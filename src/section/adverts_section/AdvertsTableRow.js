import React, { useState } from "react";
//React-Router-Dom
// import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// @ Mui
import {
  TableRow,
  TableCell,
  Typography,
  // Checkbox,
  Stack,
  IconButton,
  MenuItem,
  Avatar,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Iconify from "../../components/iconify";
import MenuPopover from "../../components/menu-popover";
import { useLocales } from "../../locales";
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import CustomConfirmDialog from "../../components/confirm-dialog2/ConfirmDialog";
import { deleteAdvert } from "../../redux/services/adverts_service";
import { setAdvertId } from "../../redux/slices/adverts";
// ------------------------------------------------------------------------
const rightCellBorderStyle = {
  borderWidth: "1px 1px 1px 0px",
  borderRadius: "0px 16px 16px 0px",
  borderColor: "#eee",
  borderStyle: "solid",
  p: "11px",
};

const innerCellBorderStyle = {
  borderWidth: "1px 0px",
  borderColor: "#eee",
  borderStyle: "solid",
  p: "11px",
};

const leftCellBorderStyle = {
  borderWidth: "1px 0px 1px 1px",
  borderRadius: "16px 0px 0px 16px",
  borderColor: "#eee",
  borderStyle: "solid",
  p: "11px",
};

const cellTextSx = {
  fontSize: "12px",
  fontWeight: 400,
  color: "#535353",
};

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  cursor: "pointer",
}));

const confirmBtnSx = {
  background: "#FFFFFF",
  color: "red",
  border: "0.75px solid red",
  fontSize: "12px",
  fontWeight: "500",
  "&:hover": {
    bgcolor: "text.primary",
    color: (theme) =>
      theme.palette.mode === "light" ? "common.white" : "grey.800",
  },
  borderRadius: "6px",
  width: "120px",
  height: "36px",
};

const cancelBtnSx = {
  background: "#FFFFFF",
  color: "#535353",
  border: "0.75px solid #BCBCBC",
  fontSize: "12px",
  fontWeight: "500",
  "&:hover": {
    bgcolor: "text.primary",
    color: (theme) =>
      theme.palette.mode === "light" ? "common.white" : "grey.800",
  },
  borderRadius: "6px",
  width: "120px",
  height: "36px",
};
AdvertsTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
  onSelectRow: PropTypes.func,
};

export default function AdvertsTableRow(props) {
  const { row, selected } = props;

  const dispatch = useDispatch();

  const { translate } = useLocales();

  const navigate = useNavigate();

  const [openConfirm, setOpenConfirm] = useState(false);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const [openPopover, setOpenPopover] = useState(null);

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleOpenPopover = (event) => {
    event.stopPropagation();
    setOpenPopover(event.currentTarget);
  };
  // -------- JSX Code -------
  return (
    <StyledTableRow hover selected={selected}>
      {/** id */}
      <TableCell sx={leftCellBorderStyle}>
        <Stack alignItems="center" justifyContent="center">
          <Typography sx={{ ...cellTextSx, mb: "8px" }}>{row?.id}</Typography>
        </Stack>
      </TableCell>
      {/**title_ar */}
      <TableCell align="center" sx={innerCellBorderStyle}>
        <Typography sx={{ ...cellTextSx }}>{row?.title_ar}</Typography>
      </TableCell>
      {/**title_en */}
      <TableCell
        align="center"
        sx={{ ...innerCellBorderStyle, textAlign: "center" }}
      >
        <Typography component="div" sx={{ ...cellTextSx }}>
          {row?.title_en}
        </Typography>
      </TableCell>
      {/**description_ar */}
      <TableCell
        align="center"
        sx={{ ...innerCellBorderStyle, textAlign: "center" }}
      >
        <Typography component="div" sx={{ ...cellTextSx }}>
          {row?.description_ar}
        </Typography>
      </TableCell>
      {/**description_en */}
      <TableCell
        align="center"
        sx={{ ...innerCellBorderStyle, textAlign: "center" }}
      >
        <Typography component="div" sx={{ ...cellTextSx }}>
          {row?.description_en}
        </Typography>
      </TableCell>
      {/** tag*/}
      <TableCell
        align="center"
        sx={{ ...innerCellBorderStyle, textAlign: "center" }}
      >
        <Typography component="div" sx={{ ...cellTextSx }}>
          {row?.tag}
        </Typography>
      </TableCell>
      {/**valid_to */}
      <TableCell
        align="center"
        sx={{ ...innerCellBorderStyle, textAlign: "center" }}
      >
        <Typography component="div" sx={{ ...cellTextSx }}>
          {row?.valid_to}
        </Typography>
      </TableCell>
      {/**store_id */}
      <TableCell
        align="center"
        sx={{ ...innerCellBorderStyle, textAlign: "center" }}
      >
        <Typography component="div" sx={{ ...cellTextSx }}>
          {row?.store_id}
        </Typography>
      </TableCell>
      {/**image */}
      <TableCell
        align="center"
        sx={{
          ...innerCellBorderStyle,
          textAlign: "center",
        }}
      >
        <Box width="max-content">
          {row?.image !== null ? (
            <img
              src={row?.image}
              alt=""
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50px",
                margin: "auto",
              }}
            />
          ) : (
            <Avatar sx={{ mx: "auto" }} />
          )}
        </Box>
      </TableCell>
      {/** video*/}
      <TableCell
        align="center"
        sx={{ ...innerCellBorderStyle, textAlign: "center" }}
      >
        <Typography
          component="div"
          sx={{ ...cellTextSx, width: "max-content" }}
        >
          {row?.video}
        </Typography>
      </TableCell>
      {/** link*/}
      <TableCell
        align="center"
        sx={{ ...innerCellBorderStyle, textAlign: "center" }}
      >
        <Typography component="div" sx={{ ...cellTextSx }}>
          {row?.link}
        </Typography>
      </TableCell>
      {/**created_at */}
      <TableCell
        align="center"
        sx={{ ...innerCellBorderStyle, textAlign: "center" }}
      >
        <Typography component="div" sx={{ ...cellTextSx }}>
          {moment(row?.created_at).format("DD/MM/YYYY")}
        </Typography>
      </TableCell>
      {/**updated_at */}
      <TableCell
        align="center"
        sx={{ ...innerCellBorderStyle, textAlign: "center" }}
      >
        <Typography component="div" sx={{ ...cellTextSx }}>
          {moment(row?.updated_at).format("DD/MM/YYYY")}
        </Typography>
      </TableCell>
      {/** */}
      <TableCell align="center" sx={{ ...rightCellBorderStyle }}>
        <IconButton
          color={openPopover ? "inherit" : "default"}
          onClick={handleOpenPopover}
        >
          <Iconify icon="eva:more-horizontal-fill" />
        </IconButton>
      </TableCell>
      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        arrow="top-left"
        sx={{
          width: "80px",
          boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          border: "1px solid rgba(103, 103, 103, 0.1)",
        }}
      >
        <MenuItem
          onClick={(e) => {
            e.stopPropagation();

            dispatch(setAdvertId(row?.id));

            navigate(`edit-advert`);
          }}
        >
          {translate(`edit`)}
        </MenuItem>

        <MenuItem
          onClick={(e) => {
            e.stopPropagation();
            handleOpenConfirm();
            handleClosePopover();
          }}
        >
          <Typography fontSize="14px" fontWeight={400} color="red">
            {translate(`delete`)}
          </Typography>
        </MenuItem>
      </MenuPopover>
      <CustomConfirmDialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        title={translate("delete_advert")}
        content={
          <>{translate("are_you_sure_you_want_to_delete_this_advert")}</>
        }
        action={
          <>
            <Button
              sx={cancelBtnSx}
              onClick={() => {
                handleCloseConfirm();
              }}
            >
              {translate("cancel")}
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={confirmBtnSx}
              onClick={() => {
                handleCloseConfirm();
                dispatch(deleteAdvert(row?.id)).then((response) => {
                  if (response.payload.status === 1) {
                    alert("advert is deleted");
                    window.location.reload();
                  }
                });
              }}
            >
              {translate("delete")}
            </Button>
          </>
        }
      />
    </StyledTableRow>
  );
}
