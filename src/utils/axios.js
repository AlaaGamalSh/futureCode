import axios from "axios";
// config
// import { HOST_API_KEY } from '../config';
import { errorToast } from "./toastMessage";

// ----------------------------------------------------------------------
const axiosInstance = axios.create({
  baseURL: "http://helpco.futurecode-projects.com",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
    AuthenticatedProvider: "controls",
    "Accept-Language": localStorage.getItem("i18nextLng"),
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (
      response.status === 200 &&
      (response.data.message === "Success" ||
        response.data.message === "تمت العملية بنجاح")
    ) {
      return response.data;
    } else if (
      response.status === 200 &&
      (response.data.message !== "Success" ||
        response.data.message !== "تمت العملية بنجاح")
    ) {
      return response.data;
    } else if (response.status === 200 && response.data.status !== 200) {
      alert(response.data.message);
      return response.data;
    }
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      alert(error.response.statusText);
    } else if (error.response.status === 402) {
      throw error;
    } else if (
      error.response.status === 406 ||
      error.response.status === 422 ||
      error.response.status === 419
    ) {
      if (
        error.response.data.message === "" ||
        error?.response?.data?.data?.account_found_nd_profile_not_created
      ) {
      } else {
        console.log(error.response.statusText);
        alert(error.response.statusText);
        errorToast(error.response.statusText);
      }
      throw error;
    } else {
      console.log(error.response.statusText);
      alert(error.response.statusText);
      throw errorToast(error.response.statusText);
    }
  }
);
export default axiosInstance;
