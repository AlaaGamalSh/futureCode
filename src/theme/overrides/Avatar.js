import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Avatar(theme) {
  return {
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          color: theme.palette.text.secondary,
          backgroundColor: alpha(theme.palette.primary.main),
        },
      },
    },
    MuiAvatarGroup: {
      defaultProps: {
        max: 4,
      },
      styleOverrides: {
        root: {
          justifyContent: "flex-end",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.main,
        },
        avatar: {
          fontSize: 16,
          fontWeight: theme.typography.fontWeightMedium,
          "&:first-of-type": {
            fontSize: 12,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.main,
          },
        },
      },
    },
  };
}
