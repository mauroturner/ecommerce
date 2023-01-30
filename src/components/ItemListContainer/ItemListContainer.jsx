import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Typography from "@mui/material/Typography";
import { gFetch } from '../../helpers/gFetch';
import { useState, useEffect } from 'react';
import { light } from '@mui/material/styles/createPalette';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link, useParams } from "react-router-dom";

const ItemListContainer = ({titulo}) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoriaId } = useParams();

    useEffect(() => {
        console.log(categoriaId);
        if(categoriaId){
            gFetch()
                .then(res => setProductos(res.filter(items => items.categoria === categoriaId.replaceAll('-', ' '))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
                console.log('cat');
        }else{
            gFetch()
                .then(res => setProductos(res))
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
                console.log('nada');
        }
    }, []);
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
                        productos.map((producto) => (
                            <div key={producto.id}>
                                <Grid>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="140"
                                            image={producto.imagen}
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                {producto.titulo}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                {producto.descripcion}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Añadir</Button>
                                            <Link to={'/ecommerce/item/' + producto.id}>
                                                <Button size="small">
                                                    Ver más
                                                </Button>
                                            </Link>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </div>
                        ))
                    )}
                </Grid>
            </Container>
        </>
    );
}

export default ItemListContainer