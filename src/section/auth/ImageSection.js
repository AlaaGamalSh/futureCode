import React, { useState } from "react";
import { useLocales } from "../../locales";

// @mui
import { Link, Box, Stack, Typography } from "@mui/material";
// components
import { IconButtonAnimate } from "../../components/animate";
import Image from "../../components/image/Image";

// ----------------------------------------------------------

//* ------- Styles --------

const langsHolderSx = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "end",
  p: { xs: "25px 0px 0px 0px", md: "25px 50px 0px 50px", lg: "52px 92px" },
  transform: { xs: "translateX(10 %)", md: "" },
};

const langsTextSx = {
  color: { xs: "#121212", md: "#fff" },
  fontWeight: 700,
  fontSize: "16px",
  cursor: "pointer",
  mr: "30px",
  LineHeight: "90px",
};

const overLaySx = {
  position: "relative",
  width: "100% !important",
  // height: '1075px !important',
  background: `linear-gradient(359.14deg,
                    rgba(18, 18, 18, 0.55) 20.95%,
                    rgba(37, 37, 37, 0.03) 62.21%,
                    rgba(18, 18, 18, 0) 97.87%,
                    rgba(255, 255, 255, 0) 97.87%), url(/assets/images/auth/office_img.jpg)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function ImageSection({ height = 1024 }) {
  const { translate, currentLang, onChangeLang } = useLocales();

  const handleChangeLang = (newLang) => {
    onChangeLang(newLang);
  };

  // --------- JSX Code -------------
  return (
    <Box
      sx={{
        ...overLaySx,
        height: "100%",
        minHeight: `${height}px !important`,
      }}
    >
      {/* __________ Langauge Link _________ */}
      <Stack sx={{ ...langsHolderSx }}>
        <Link
          underline="none"
          sx={{ ...langsTextSx }}
          onClick={() =>
            handleChangeLang(currentLang.value === "en" ? "ar" : "en")
          }
        >
          {currentLang.value === "en" ? "العربية" : "English"}
        </Link>

        {/* __________ language Flag _________ */}
        <IconButtonAnimate
          onClick={() =>
            handleChangeLang(currentLang.value === "en" ? "ar" : "en")
          }
          sx={{
            width: "fit-content",
            height: "fit-content",
            p: "0px",
          }}
        >
          <Image
            disabledEffect
            src={
              currentLang.value === "en"
                ? "/assets/images/auth/ar_flag.svg"
                : "/assets/icons/flags/ic_flag_en.svg"
            }
            alt={currentLang.label}
          />
        </IconButtonAnimate>
      </Stack>
    </Box>
  );
}
