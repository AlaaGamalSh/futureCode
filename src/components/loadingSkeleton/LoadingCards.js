import React from 'react'
import Skeleton from "@mui/material/Skeleton";
import { Box } from '@mui/material';
// ---------------------------------------------------------
// ----------- Style -----------
const mainHolderSx = {
    p: "10px",
    // border: "1.5px solid #ECECEC",
    borderRadius: "25px",
    background: "#FFFFFF",
    justifyContent: "space-between",
    minHeight: "140px",
    position: "relative",
};

export default function LoadingCards() {

    // ---------------- JSX Code ------------
    return (
        <Box sx={{ ...mainHolderSx }}>
            <Skeleton
                animation="wave"
                variant="rectangular"
                height={120}
                width='100%'
                sx={{
                    borderRadius: "25px",
                }}
            />
        </Box>
    )
}
