import React from 'react'
import Skeleton from "@mui/material/Skeleton";

export default function LoadingCharts() {

    // ---------------- JSX Code ------------
    return (
        <Skeleton
            animation="wave"
            variant="rectangular"
            height={300}
            width='100%'
            sx={{
                borderRadius: "10px",
            }}
        />
    )
}

