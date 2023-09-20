import PropTypes from "prop-types";
// @mui
import { TableRow, TableCell } from "@mui/material";
//
import EmptyContent from "../empty-content";
import { useLocales } from "../../locales";

// ----------------------------------------------------------------------

TableNoData.propTypes = {
  isNotFound: PropTypes.bool,
};

export default function TableNoData({ isNotFound, title }) {
  const { translate } = useLocales();

  const pathname = window.location.pathname;

  const renderSwitch = () => {
    switch (pathname.split("/")[2]) {
      case "financial":
        return "/assets/images/tables/no_transactions.svg";
      case "users":
        return "/assets/images/tables/no_employee.svg";
      case "rank":
        return "/assets/images/tables/new_branches.svg";
      case "overview":
        if (title === "new_branches") {
          return "/assets/images/tables/new_branches.svg";
        }
        if (title === "pending_branches") {
          return "/assets/images/tables/pending_branches.svg";
        }
        return "/assets/images/tables/new_branches.svg";
      case "branches":
        if (title === "new_branches") {
          return "/assets/images/tables/new_branches.svg";
        }
        if (title === "pending_branches") {
          return "/assets/images/tables/pending_branches.svg";
        }
        return "/assets/images/tables/new_branches.svg";
      default:
        return "/assets/images/tables/no_transactions";
    }
  };
  return (
    <TableRow>
      {isNotFound ? (
        <TableCell colSpan={12}>
          <img
            src={`${renderSwitch()}`}
            alt=""
            style={{
              height: "50%",
              width: "50%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </TableCell>
      ) : (
        <TableCell colSpan={12} sx={{ p: 0 }} />
      )}
    </TableRow>
  );
}
