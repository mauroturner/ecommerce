import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Typography from "@mui/material/Typography";

const ItemListContainer = ({titulo}) => {
    return (
        <>
            <Typography variant="h2" component="h2">
                { titulo }
            </Typography>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid xs={3}>Producto 1</Grid>
                <Grid xs={3}>Producto 2</Grid>
                <Grid xs={3}>Producto 3</Grid>
                <Grid xs={3}>Producto 4</Grid>
            </Grid>
        </>
    );
}

export default ItemListContainer