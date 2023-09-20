
import React from "react";
// locales
import { useLocales } from "../../locales";
// mui
import { Stack, Typography } from "@mui/material";
// component
import Image from "../../components/image/Image";

//-------------------------------------------

// ---------- Styles -----------------

const actionHolderSx = {
  flexDirection: { xs: "column", md: "row" },
  justifyContent: "space-between",
  alignItems: "center",
  spacing: 2,
  mb: "24px",
};

const totalUserSx = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#9DA0A4",
};

const infoSx = {
  fontSize: "10px",
  fontWeight: 700,
  color: "#535353",
};

const titleSx = {
  fontWeight: 600,
  color: "#333333",
};

const subHolderSx = {
  flexDirection: { xs: "column", md: "row" },
  alignItems: "center",
  width: { xs: "100%", md: "auto" },
};

const dateTextSx = {
  fontSize: "12px",
  fontWeight: 500,
  color: "#535353",
};

export default function TableTopSection({
  title = null,
  counter = null,
  counterTilte = null,
}) {
  const { translate } = useLocales();

  // ---------- JSX Code ------------
  return (
    <>
      <Stack sx={{ ...actionHolderSx }}>
        {/* ***** total user **** */}
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          mb={{ xs: "10px", md: "0px" }}
        >
          {title ? (
            <Typography variant="h5" sx={{ ...titleSx }}>
              {translate(`${title}`)}
            </Typography>
          ) : (
            <>
              <Typography sx={{ ...totalUserSx }}>
                {translate(`total_${counterTilte}`)}:
              </Typography>

              <Typography sx={{ ...totalUserSx, ml: "4px" }}>
                {counter}
              </Typography>
            </>
          )}
        </Stack>

        <Stack sx={{ ...subHolderSx }}>
          {/* ---- print and export ---- */}
          <Stack
            mt={{ xs: "15px", md: "0px" }}
            direction="row"
            alignItems="center"
            spacing="18px"
            alignSelf={{ xs: "end", md: "auto" }}
          >
            {/* ----- Print ----- */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <Image
                disabledEffect
                src="/assets/icons/dashboard/ic_print.svg"
              />
              <Typography sx={{ ...infoSx }}>{translate("print")}</Typography>
            </Stack>

            {/* ----- Export ----- */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <Image
                disabledEffect
                src="/assets/icons/dashboard/ic_export.svg"
              />
              <Typography sx={{ ...infoSx }}>{translate("export")}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
