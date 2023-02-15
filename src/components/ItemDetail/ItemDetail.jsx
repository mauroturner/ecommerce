import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({ producto }) => {
    const { agregarCarrito } = useCartContext();
    const onAdd = (cantidad) => {
        agregarCarrito({...producto, cantidad });
    }
    return (
        <>
            <Grid item xs={12} md={8}>
                <img src={producto.imagen} alt={producto.titulo} />
            </Grid>
            <Grid item xs={12} md={4}>
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    <Box sx={{ my: 3, mx: 2 }}>
                        <Grid container alignItems="center">
                            <Grid item xs>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h1"
                                >
                                    {producto.titulo}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                >
                                    {new Intl.NumberFormat("es-AR", {
                                        style: "currency",
                                        currency: "ARS",
                                        minimumFractionDigits: 2,
                                    }).format(producto.precio)}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography color="text.secondary" variant="body2">
                            {producto.descripcion}
                        </Typography>
                    </Box>
                    <Divider variant="middle" />
                    <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                        <ItemCount onAdd={onAdd}/>
                    </Box>
                </Box>
            </Grid>
        </>
    );
}

export default ItemDetail