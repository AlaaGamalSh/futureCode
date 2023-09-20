import React from 'react'
// @mui
import { Box } from '@mui/system';
//import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";

// ---------------------------------------------------------------------------

// ----------- Style -----------
const mainHolderSx = {
    // p: "24px",
    // border: "1.5px solid #ECECEC",
    borderRadius: "25px",
    background: "#FFFFFF",
    justifyContent: "space-between",
    minHeight: "240px",
    position: "relative",
};


export default function LoadingVertical() {
    // ---------------- JSX Code -----------------
    return (
        <Box sx={{ ...mainHolderSx }}>
            <Skeleton
                animation="wave"
                variant="rectangular"
                height={240}
                width='100%'
                sx={{
                    borderRadius: "10px",
                }}
            />
        </Box >
    )
}


