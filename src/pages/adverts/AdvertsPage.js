import { Container, Stack, Button, Typography, Box } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useSettingsContext } from "../../components/settings";
import { useLocales } from "../../locales";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AdvertsTable from "../../section/adverts_section/AdvertsTable";

//-------------------------------------------------------------------
const btnSx = {
  background: "#69AB6D",
  fontSize: "12px",
  fontWeight: 500,
  color: "#FFFFFF",
  minWidth: "fit-content",
  height: "40px",
  borderRadius: "8px",
  "&:hover": {
    background: (theme) => theme.palette.secondary.light,
  },
  width: "150px",
};

const addNewAdvertSx = {
  fontSize: "12px",
  fontWeight: 700,
  color: "#fff",
};

const containerSx = {
  p: { xs: "40px 25px", md: "40px", lg: "32px 32px 0px 32px" },
  position: "relative",
  height: "100%",
};

//-------------------------------------------------------------------
export default function AdvertsPage() {
  const { themeStretch } = useSettingsContext();

  const { translate } = useLocales();

  const navigate = useNavigate();

  // -------- JSX Code -----------
  return (
    <>
      <Helmet>
        <title> {translate("adverts")}</title>
      </Helmet>

      <Container sx={{ height: "100%" }} maxWidth={themeStretch ? false : "xl"}>
        <Box sx={containerSx}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Typography variant="h5" color="#121212" ml="12px" fontWeight={700}>
              {translate(`adverts`)}
            </Typography>
            <Button
              sx={{ ...btnSx }}
              onClick={() => navigate("/dashboard/adverts/add-advert")}
            >
              <Typography sx={addNewAdvertSx}>
                {translate("add_new_advert")}
              </Typography>
            </Button>
          </Stack>
          <AdvertsTable />
        </Box>
      </Container>
    </>
  );
}
/*
 */
