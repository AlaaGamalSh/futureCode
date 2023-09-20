import React from 'react'
import Skeleton from "@mui/material/Skeleton";
import { Box } from '@mui/material';
// ---------------------------------------------------------
// ----------- Style -----------
const mainHolderSx = {
    p: "10px",
    // border: "1.5px solid #ECECEC",
    borderRadius: "20px",
    background: "#FFFFFF",
    justifyContent: "space-between",
    minHeight: "80px",
    position: "relative",
    mb:'16px'
};

export default function LoadingAccordion() {

    // ------------- JSX Code -----------
    return (
        <>
            {[...Array(5)].map((cell, i) =>
                <Box sx={{ ...mainHolderSx }}>
                    <Skeleton
                        animation="wave"
                        variant="rectangular"
                        height={60}
                        width='100%'
                        sx={{
                            borderRadius: "10px",
                        }}
                    />
                </Box>
            )}
        </>
    )
}
