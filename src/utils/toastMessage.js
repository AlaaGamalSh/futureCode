import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successToast = (a) => {
  toast(
    <div className="JustifyingMSG">
      <div>
        <i class="fa fa-check" aria-hidden="true"></i>
      </div>
      <div>{a}</div>
    </div>,
    {
      position: "top-left",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      closeButton: false,
      className: "toastMessage_ar successToastMessage",
    }
  );
};
export const errorToast = (a) => {
  toast.error(
    <div className="JustifyingMSG">
      <div>
        <i className="fa fa-exclamation" aria-hidden="true"></i>
      </div>
      <div>{a}</div>
    </div>,
    {
      position: "top-left",
      autoClose: 1500,
      pauseOnHover: false,
      pauseOnFocusLoss: true,
      closeOnClick: true,
      draggable: true,
      closeButton: false,
      className: "toastMessage_ar errorToastMessage",
    }
  );
};
