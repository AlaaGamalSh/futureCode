import React from 'react'
// @mui
import { TableCell, TableRow } from "@mui/material";
//import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";

// ----------------------------------------------------------------

// ----------- Styles ------------
const rightCellBorderStyle = {
    borderWidth: "1px 1px 1px 0px",
    borderRadius: "0px 16px 16px 0px",
    borderColor: "#eee",
    borderStyle: "solid",
    height: '70px'
};

const innerCellBorderStyle = {
    borderWidth: "1px 0px",
    borderColor: "#eee",
    borderStyle: "solid",
    height: '70px'
};

const leftCellBorderStyle = {
    borderWidth: "1px 0px 1px 1px",
    borderRadius: "16px 0px 0px 16px",
    borderColor: "#eee",
    borderStyle: "solid",
    height: '70px'
};


export default function LoadingTableRows({ sx, number, cellsNum }) {

    // ------------JSX Code ---------------
    return (
        <>
            {[...Array(number !== 0 ? number : 5)].map((skel, index) => (

                <TableRow key={index}>
                    {[...Array(cellsNum)].map((cell, i) =>
                        <TableCell
                            component="th"
                            scope="row"
                            sx={i === 0 ?
                                { ...leftCellBorderStyle }
                                :
                                (
                                    (i === ([...Array(cellsNum)]).length - 1) ?
                                        { ...rightCellBorderStyle }
                                        :
                                        { ...innerCellBorderStyle }

                                )
                            }>
                            <Skeleton animation="wave" variant="text" height='30px' />
                        </TableCell>
                    )}
                </TableRow >
            ))
            }

        </>
    )
}

