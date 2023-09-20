import React, { useState } from "react";
// helmet
import { Helmet } from "react-helmet-async";
// react router dom
import { Link as RouterLink, useNavigate } from "react-router-dom";
// localization
import { useLocales } from "../../locales";
// @mui
import {
  Alert,
  Box,
  Container,
  Grid,
  Typography,
  InputAdornment,
  IconButton,
  MenuItem,
} from "@mui/material";

import { useSettingsContext } from "../../components/settings";
// components
import FormProvider, {
  RHFTextField,
  RHFSelect,
} from "../../components/hook-form";
// form
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@emotion/react";
import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { addNewAdverts, getStors } from "../../redux/services/adverts_service";
import { toast } from "react-toastify";
import { useEffect } from "react";
//_________________________________________________________________________________

const txtFieldBorderStyle = {
  width: "100%",
  borderRadius: "4px",
  paddingBottom: "24px",

  "& .MuiFormLabel-root": {
    color: "#BCBCBC",
    fontSize: "16px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      // borderColor: "rgba(255, 204, 99, 0.3)",
    },
    "&:hover fieldset": {
      border: "1px solid #ECECEC",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #ECECEC",
    },
  },
};

const labelSx = {
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "24px",
  color: "#535353",
};

const mainHolderSx = {
  p: { xs: "40px 25px", md: "40px", lg: "32px" },
  background: "#FFFFFF",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
};

const boxTitleSx = {
  display: "flex",
  marginBottom: "29px",
  alignItems: "center",
  width: "100%",
};

const titleTypographySx = {
  fontSize: "40px",
  fontWeight: "700",
  lineHeight: "30px",
  paddingLeft: "13px",
  color: "#69AB6D",
  paddingTop: "20px",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
};

const loadingButtonStyle = {
  bgcolor: "#69AB6D",
  height: "48px",
  color: (theme) =>
    theme.palette.mode === "light" ? "common.white" : "grey.800",
  "&:hover": {
    bgcolor: "text.primary",
    color: (theme) =>
      theme.palette.mode === "light" ? "common.white" : "grey.800",
  },
  fontSize: "16px",
  fontWeight: 600,
  paddingLeft: "103px",
  paddingRight: "103px",
};

const boxButtonSx = {
  marginTop: "30px",
  display: "flex",
  justifyContent: { lg: "flex-end", xs: "center" },
};

const selectNoBackgroundStyle = {
  width: "100%",
  borderRadius: "4px",

  paddingBottom: "39px",
  ".css-1dit81g-MuiInputBase-root-MuiOutlinedInput-root": {
    // background: "#ECECEC",
  },
  "& .MuiFormLabel-root": {
    color: "#BCBCBC",
    fontSize: "16px",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      border: "1px solid #9DA0A4",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #9DA0A4",
    },
  },
};

const adsType = [
  { name: "image", value: 0 },
  { name: "store", value: 1 },
  { name: "link", value: 2 },
];
//____________________________________________________________________________
export default function AddAdvert() {
  const dispatch = useDispatch();

  const { translate } = useLocales();

  const [imageFile, setImageFile] = useState(null);

  const [isSelected, setSelected] = useState(null);

  const { isLoadingAddAdverts, stors } = useSelector((state) => state.adverts);

  const navigate = useNavigate();

  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  const adsSchema = Yup.object().shape({
    type: Yup.string().required(translate("type_is_required")),

    title_ar: Yup.string().required(translate("title_ar_is_required")),

    title_en: Yup.string().required(translate("title_en_is_required")),

    description_ar: Yup.string().required(
      translate("description_ar_is_required")
    ),

    description_en: Yup.string().required(
      translate("description_en_is_required")
    ),
    tag: Yup.string().required(translate("tag_is_required")),

    valid_to: Yup.string().required(translate("valid_to_is_required")),

    store_id:
      isSelected === 1
        ? Yup.string().required(translate("store_id_is_required"))
        : "",

    image: Yup.string(),

    link:
      isSelected === 2
        ? Yup.string().required(translate("link_is_required"))
        : "",
  });

  const defaultValues = {
    type: "",
    title_ar: "",
    title_en: "",
    description_ar: "",
    description_en: "",
    tag: "",
    valid_to: "",
    store_id: "",
    image: "",
    link: "",
  };

  const methods = useForm({
    resolver: yupResolver(adsSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    setValue,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    console.log(data);

    const { image } = data;

    try {
      const adForm = new FormData();

      adForm.append("title_ar", data.title_ar);

      adForm.append("title_en", data.title_en);

      adForm.append("description_ar", data.description_ar);

      adForm.append("description_en", data.description_en);

      adForm.append("tag", data.tag);

      adForm.append("valid_to", data.valid_to);

      adForm.append("store_id", data.store_id);

      adForm.append("link", data.link);

      image !== "" && adForm.append("image", imageFile);

      dispatch(addNewAdverts(adForm)).then((response) => {
        if (response.payload.status === 1) {
          toast(response.payload.data.id);
          navigate("/dashboard/adverts");
        }
      });
    } catch (error) {
      console.error(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };

  useEffect(() => {
    dispatch(getStors());
  }, [dispatch]);

  //____________________________________________

  return (
    <>
      <Helmet>
        <title>{translate("add_advert")}</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : "xl"}>
        <Box sx={boxTitleSx}>
          <Typography sx={titleTypographySx}>
            {translate(`add_advert`)}
          </Typography>
        </Box>

        {/* ***************** Form **************** */}
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}

          <Box sx={mainHolderSx}>
            <Grid container columnSpacing={{ xs: "40px", lg: "48px" }}>
              <Grid item xs={12} lg={6}>
                <Box>
                  <Typography sx={labelSx}>{translate("type")}</Typography>{" "}
                  <RHFSelect
                    name="type"
                    sx={{
                      ...selectNoBackgroundStyle,
                    }}
                    SelectProps={{
                      native: false,
                      IconComponent: () => (
                        <img
                          src="/assets/icons/table/shape.svg"
                          alt=""
                          style={{
                            marginRight: "19px",
                            marginLeft: "19px",
                            transform:
                              theme.direction === "rtl" && "rotate(180deg)",
                          }}
                        />
                      ),
                    }}
                    onChange={(e) => {
                      setValue("type", e.target.value, {
                        shouldValidate: true,
                      });
                      setSelected(e.target.value);
                    }}
                  >
                    {adsType.map((category, index) => (
                      <MenuItem value={category.value} key={index}>
                        {translate(category.name)}
                      </MenuItem>
                    ))}
                  </RHFSelect>
                </Box>
                {isSelected === 1 ? (
                  <Box>
                    <Typography sx={labelSx}>
                      {translate("store_id")}
                    </Typography>
                    <RHFSelect
                      name="store_id"
                      sx={{
                        ...selectNoBackgroundStyle,
                      }}
                      SelectProps={{
                        native: false,
                        IconComponent: () => (
                          <img
                            src="/assets/icons/table/shape.svg"
                            alt=""
                            style={{
                              marginRight: "19px",
                              marginLeft: "19px",
                              transform:
                                theme.direction === "rtl" && "rotate(180deg)",
                            }}
                          />
                        ),
                      }}
                      onChange={(e) => {
                        setValue("store_id", e.target.value, {
                          shouldValidate: true,
                        });
                        setSelected(e.target.value);
                      }}
                    >
                      {stors.map((category, index) => (
                        <MenuItem value={category.id} key={index}>
                          {translate(category.store_name)}
                        </MenuItem>
                      ))}
                    </RHFSelect>
                  </Box>
                ) : (
                  <Box></Box>
                )}
                {isSelected === 2 ? (
                  <Box>
                    <Typography sx={labelSx}>{translate("link")}</Typography>
                    <RHFTextField
                      name="link"
                      type="text"
                      sx={txtFieldBorderStyle}
                    />
                  </Box>
                ) : (
                  <Box></Box>
                )}
              </Grid>

              <Grid item xs={12} lg={6}>
                <Box>
                  <Typography sx={labelSx}>{translate("title_ar")}</Typography>
                  <RHFTextField
                    name="title_ar"
                    type="text"
                    sx={txtFieldBorderStyle}
                  />
                </Box>

                <Box>
                  <Typography sx={labelSx}>{translate("title_en")}</Typography>
                  <RHFTextField
                    name="title_en"
                    type="text"
                    sx={txtFieldBorderStyle}
                  />
                </Box>

                <Box>
                  <Typography sx={labelSx}>
                    {translate("description_ar")}
                  </Typography>
                  <RHFTextField
                    name="description_ar"
                    type="text"
                    sx={txtFieldBorderStyle}
                  />
                </Box>

                <Box>
                  <Typography sx={labelSx}>
                    {translate("description_en")}
                  </Typography>
                  <RHFTextField
                    name="description_en"
                    type="text"
                    sx={txtFieldBorderStyle}
                  />
                </Box>

                <Box>
                  <Typography sx={labelSx}>{translate("valid_to")}</Typography>
                  <RHFTextField
                    name="valid_to"
                    type="text"
                    sx={txtFieldBorderStyle}
                  />
                </Box>

                <Box>
                  <Typography sx={labelSx}>{translate("image")}</Typography>
                  <RHFTextField
                    name="image"
                    id="image"
                    type="file"
                    onChange={(event) => {
                      setImageFile(event.target.files[0]);
                      setValue("image", event.target.value, {
                        shouldValidate: true,
                      });
                    }}
                    sx={{
                      ...txtFieldBorderStyle,
                      "& .MuiOutlinedInput-input": {
                        fontSize: "14px",
                      },
                    }}
                    inputProps={{
                      sx: {
                        "&::placeholder": {
                          textAlign: "left",
                          color: "#BCBCBC",
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "22px",
                        },
                      },
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            // component="label"
                            sx={{ cursor: "pointer" }}
                          >
                            <label htmlFor="image">
                              <img
                                src="/assets/icons/dashboard/ic_upload.svg"
                                alt=""
                                style={{
                                  cursor: "pointer",
                                }}
                              />
                            </label>
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Box>
                  <Typography sx={labelSx}>{translate("tag")}</Typography>
                  <RHFTextField
                    name="tag"
                    type="text"
                    sx={txtFieldBorderStyle}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box sx={boxButtonSx}>
            <LoadingButton
              onClick={handleSubmit(onSubmit)}
              color="inherit"
              size="large"
              type="submit"
              variant="Contained"
              loading={isLoadingAddAdverts}
              sx={loadingButtonStyle}
            >
              {translate("send")}
            </LoadingButton>
          </Box>
        </FormProvider>
      </Container>
    </>
  );
}
