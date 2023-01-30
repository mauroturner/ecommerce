import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Typography from "@mui/material/Typography";
import { gFetch } from '../../helpers/gFetch';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ItemList from '../ItemList/ItemList';
import { Link, useParams } from "react-router-dom";

const ItemListContainer = ({titulo}) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoriaId } = useParams();

    useEffect(() => {
        gFetch({categoria: categoriaId})
            .then(res => setProductos(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [categoriaId]);
    return (
        <>
            <Container maxWidth="lg">
                <Typography variant="h2" component="h2">
                    {titulo}
                </Typography>
                <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    {loading ? (
                        <Box sx={{ display: "flex" }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <ItemList productos={productos}/>
                    )}
                </Grid>
            </Container>
        </>
    );
}

export default ItemListContainer