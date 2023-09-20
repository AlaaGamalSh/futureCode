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
  Button,
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
//toast
import { toast } from "react-toastify";
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
  bgcolor: "#FFC801",
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

const buttonSx = {
  width: "200px",
  height: "100px",
  borderRadius: "10px",
  background: "#2E2857",
  marginBottom: "20px",
};

export default function MainPage() {
  const navigate = useNavigate();

  const { translate } = useLocales();

  useEffect(() => {
    localStorage.clear();
  }, []);

  // ------------- JSX Code ----------
  return (
    <>
      <Helmet>
        <title>Main Page</title>
      </Helmet>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "100px",
        }}
      >
        {" "}
        <Button sx={buttonSx}>{translate("show")}</Button>{" "}
        <Button sx={buttonSx}>{translate("managment")}</Button>{" "}
      </Box>
    </>
  );
}
