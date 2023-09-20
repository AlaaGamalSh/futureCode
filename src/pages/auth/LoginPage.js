import React, { useEffect, useState } from "react";
//helemt
import { Helmet } from "react-helmet-async";
// localization
import { useLocales } from "../../locales";
import * as Yup from "yup";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import {
  Link,
  Alert,
  Box,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  Grid,
} from "@mui/material";

//mui
import { LoadingButton } from "@mui/lab";
// components
import FormProvider, { RHFTextField } from "../../components/hook-form";
import Iconify from "../../components/iconify";
import ImageSection from "../../section/auth/ImageSection";
import ChangeLanguageBox from "../../section/auth/details/ChangeLanguageBox";
import { useAuthContext } from "../../auth/useAuthContext";

// -----------------------------------------------------------------------------

//* ------- Styles --------

const txtFieldBorderStyle = {
  width: "100%",
  paddingBottom: "23px",
  "& .MuiFormLabel-root": {
    color: "#BCBCBC",
    fontSize: "16px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      // borderColor: "rgba(255, 204, 99, 0.3)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 204, 99, 0.3)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(255, 204, 99, 0.3)",
    },
  },
};

const loadingButtonStyle = {
  marginBottom: "23px",
  fontSize: "16px",
  fontWeight: 600,
  bgcolor: "#69AB6D",
  py: "15px",
  color: (theme) => (theme.palette.mode === "light" ? "#EBF4F8" : "grey.800"),
  "&:hover": {
    bgcolor: "text.primary",
    color: (theme) =>
      theme.palette.mode === "light" ? "common.white" : "grey.800",
  },
  "&:focus": {
    bgcolor: "#fba900",
    color: "#FFFFFF",
  },
  marginLeft: "auto",
  borderRadius: "6px",
  marginRight: "auto",
  boxShadow:
    " 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08)",
};

const holder = {
  position: "relative",
  p: {
    xs: "0px 0px",
    sm: "00px 0px",
    md: "00px 50px",
    lg: "0px 100px 0px 100px ",
  },
};

const inputsHolderSx = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
};

const imageSectionSx = {
  display: {
    xs: "none",
    md: "block",
  },
};

const FutureCodeSx = {
  fontSize: "60px",
  fontWeight: 700,
  color: "#7C8C7D",
  textShadow: "2px 3px 3px #69AB6D, -2px -2px 4px rgba(0, 0, 0, 0.25)",
};

//_____________________________________________________________
export default function LoginPage() {
  const { login } = useAuthContext();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const [showPassword, setShowPassword] = useState(false);

  const { translate } = useLocales();

  const SignInSchema = Yup.object().shape({
    phone: Yup.string().required(translate("phone_number_is_required")),
    password: Yup.string().required(translate("password_is_required")),
  });

  const defaultValues = {
    phone: "",
    password: "",
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(SignInSchema),
    defaultValues,
  });

  const {
    reset,
    // setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      const loginForm = new FormData();

      loginForm.append("phone", data.phone);

      loginForm.append("password", data.password);

      loginForm.append("account_type", "admin");
      if (login) {
        await login(loginForm);
      }
    } catch (error) {
      reset();
    }
  };
  // ------------- JSX Code ----------
  return (
    <>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <Grid container height="100%">
        {/* ********************* Login Form Section ******************/}
        <Grid item xs={10} sm={8} md={6} mx="auto">
          {/* __________ Langauge Changer  _________ */}
          <ChangeLanguageBox />

          {/* __________________ Login Form page ____________ */}
          <Stack sx={{ ...holder, justifyContent: "center", height: "100%" }}>
            {/* _____ Head of login page ____ */}
            <Stack mb="23px">
              {/*---- logo ---- */}
              <Stack direction="row" justifyContent="center" mb="28px">
                <Typography sx={FutureCodeSx}>Future code</Typography>
              </Stack>
            </Stack>

            {/*----------------- Form of login page -------------- */}
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ ...inputsHolderSx }}>
                {!!errors.afterSubmit && (
                  <Alert severity="error">{errors.afterSubmit.message}</Alert>
                )}

                {/*------ phone input -------- */}
                <RHFTextField
                  name="phone"
                  label={translate("phone_number")}
                  type="number"
                  sx={{ ...txtFieldBorderStyle }}
                />

                {/*------ password input -------- */}
                <RHFTextField
                  name="password"
                  label={translate("password")}
                  type={showPassword ? "text" : "password"}
                  sx={txtFieldBorderStyle}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          <Iconify
                            icon={
                              showPassword ? "eva:eye-off-fill" : "eva:eye-fill"
                            }
                            color={showPassword ? "#69AB6D" : "#91C895"}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* -------- Submit Button and sign ip link --------- */}
              <Stack sx={{ marginX: "auto" }}>
                {/* --- Next Button --- */}
                <LoadingButton
                  fullWidth
                  disableRipple
                  size="large"
                  type="submit"
                  variant="Contained"
                  sx={{
                    ...loadingButtonStyle,
                  }}
                  loading={isSubmitting}
                >
                  {translate("sign_in")}
                </LoadingButton>
              </Stack>
            </FormProvider>
          </Stack>
        </Grid>

        {/* ************ image Section ************/}
        <Grid item sm={6} sx={{ ...imageSectionSx }}>
          <ImageSection height={657} />
        </Grid>
      </Grid>
    </>
  );
}
