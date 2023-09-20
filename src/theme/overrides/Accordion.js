// ----------------------------------------------------------------------

export default function Accordion(theme) {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          /* padding: {
            xs: "30px 0px",
            sm: "30px 45px",
          },*/
          // border: "2px solid rgba(255, 197, 41, 0.3)",
          border: "1.5px solid #ECECEC",
          borderRadius: "24px !important",
          boxShadow: "none",
          "&.MuiAccordion-root:before": {
            height: "0px",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(1),
          "&.Mui-disabled": {
            opacity: 1,
            color: theme.palette.action.disabled,
            "& .MuiTypography-root": {
              color: "inherit",
            },
          },
        },
        expandIconWrapper: {
          color: "#FFCC63",
          border: '2px solid #FFCC63',
          borderRadius: '50%',
        },
      },
    },
  };
}
