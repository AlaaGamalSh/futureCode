import React, { useState, useEffect } from "react";
// React-Router-Dom
// Locales
import { useLocales } from "../../locales";
//@ Mui
import {
  IconButton,
  Table,
  Tooltip,
  TableBody,
  TableContainer,
  Box,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// mock
// Components
import Iconify from "../../components/iconify";
import Scrollbar from "../../components/scrollbar";
import {
  useTable,
  getComparator,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
} from "../../components/table";
import LoadingTableRows from "../../components/loadingSkeleton/LoadingTableRows";
// Section Components
import AdvertsTableRow from "./AdvertsTableRow";
//Redux
import { useDispatch, useSelector } from "react-redux";
// Service
import { getAds } from "../../redux/services/adverts_service";

// --------- Style ------------
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  overflow: "unset",
  border: "4px 4px black",
}));

const tableHolderSx = {
  minWidth: 800,
  borderCollapse: "separate",
  borderSpacing: "0px 16px",
  paddingRight: "19px",
  paddingLeft: "19px",
  border: "4px 4px black",
  background: "#F8FAF9",
  borderRadius: "30px",
};

// Table head
const TABLE_HEAD = [
  { id: "id", label: "id", align: "left" },
  { id: "title_ar", label: "title_ar", align: "center" },
  { id: "title_en", label: "title_en", align: "center" },
  { id: "description_ar", label: "description_ar", align: "center" },
  { id: "description_en", label: "description_en", align: "center" },
  { id: "tag", label: "tag", align: "center" },
  { id: "valid_to", label: "valid_to", align: "center" },
  { id: "store_id", label: "store_id", align: "center" },
  { id: "image", label: "image", align: "center" },
  { id: "video", label: "video", align: "center" },
  { id: "link", label: "link", align: "center" },
  { id: "created_at", label: "created_at", align: "center" },
  { id: "updated_at", label: "updated_at", align: "center" },
  { id: "action", label: "action", align: "center" },
];
//_______________________________________________________
export default function AdvertsTable({ backArrow = false }) {
  const dispatch = useDispatch();

  const { allAds, isLoadingGetAds } = useSelector((state) => state.adverts);

  const theme = useTheme();

  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,

    onSort,
  } = useTable();

  const { translate } = useLocales();

  const [tableData, setTableData] = useState([]);

  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const [openConfirm, setOpenConfirm] = useState(false);

  const [filterName, setFilterName] = useState("");

  const [filterRole, setFilterRole] = useState("all");

  const [filterStatus, setFilterStatus] = useState("all");

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(order, orderBy),
    filterName,
    filterRole,
    filterStatus,
  });

  const dataInPage = dataFiltered?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const denseHeight = dense ? 52 : 72;
  const isFiltered =
    filterName !== "" || filterRole !== "all" || filterStatus !== "all";
  const isNotFound =
    (!dataFiltered?.length && !!filterName) ||
    (!dataFiltered?.length && !!filterRole) ||
    (!dataFiltered?.length && !!filterStatus);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleDeleteRow = (id) => {
    const deleteRow = tableData?.filter((row) => row.id !== id);
    setSelected([]);
    setTableData(deleteRow);

    if (page > 0) {
      if (dataInPage.length < 2) {
        setPage(page - 1);
      }
    }
  };

  useEffect(() => {
    dispatch(getAds()).then((response) => {
      setTableData(response?.payload?.data?.data);
    });
  }, [dispatch]);

  // --------- JSX Code ----------
  return (
    <Box mt="32px">
      <StyledTableContainer>
        <TableSelectedAction
          dense={dense}
          numSelected={selected?.length}
          rowCount={tableData?.length}
          /* onSelectAllRows={(checked) =>
            onSelectAllRows(
              checked,
              tableData?.map((row) => row?.class?.id)
            )
          }*/
          action={
            <Tooltip title="Delete">
              <IconButton color="secondary.light" onClick={handleOpenConfirm}>
                <Iconify icon="eva:trash-2-outline" />
              </IconButton>
            </Tooltip>
          }
        />

        <Scrollbar>
          <Table size={dense ? "small" : "medium"} sx={{ ...tableHolderSx }}>
            {/* ----- table head ------ */}
            <TableHeadCustom
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              rowCount={tableData?.length}
              numSelected={selected?.length}
              onSort={onSort}
              /*  onSelectAllRows={(checked) =>
              onSelectAllRows(
                checked,
                tableData?.map((row) => row?.class?.id)
              )
            }*/
            />

            {/* ---- table body ---- */}
            <TableBody>
              {!isLoadingGetAds ? (
                <>
                  {dataFiltered
                    // ?.slice(
                    //   page * rowsPerPage,
                    //   page * rowsPerPage + rowsPerPage
                    // )
                    ?.map((row, index) => (
                      <AdvertsTableRow
                        key={row.id}
                        row={row}
                        selected={selected.includes(row?.id)}
                        onSelectRow={() => onSelectRow(row?.id)}
                        onDeleteRow={() => handleDeleteRow(row?.id)}
                      />
                    ))}
                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(page, rowsPerPage, tableData?.length)}
                  />
                  <TableNoData isNotFound={isNotFound} />
                </>
              ) : (
                <LoadingTableRows number={10} cellsNum={12} />
              )}
            </TableBody>
          </Table>
        </Scrollbar>
      </StyledTableContainer>
    </Box>
  );
}

/////---------------------------------------
function applyFilter({
  inputData,
  comparator,
  filterName,
  filterStatus,
  filterRole,
}) {
  const stabilizedThis = inputData?.map((el, index) => [el, index]);

  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis?.map((el) => el[0]);

  if (filterName) {
    inputData = inputData.filter(
      (user) =>
        user?.name?.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  if (filterStatus !== "all") {
    inputData = inputData?.filter((user) => user.status === filterStatus);
  }

  if (filterRole !== "all") {
    inputData = inputData?.filter((user) => user.role === filterRole);
  }

  return inputData;
}
