import { useCartContext } from "../../context/CartContext";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CartContainer = () => {
    const { cartList, vaciarCarrito } = useCartContext();
    return (
        <>
            <List
                sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                }}
            >
                {cartList.map((producto) => (
                    <ListItem key={producto.id} alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={producto.imagen} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={producto.titulo}
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                    Precio: {new Intl.NumberFormat("es-AR", {
                                        style: "currency",
                                        currency: "ARS",
                                        minimumFractionDigits: 2,
                                    }).format(producto.precio)}
                                    <br />
                                    Cantidad: { producto.cantidad }
                                    </Typography>
                                    <br />
                                    {" - " + producto.descripcion}
                                </>
                            }
                        />
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" onClick={vaciarCarrito}>Vaciar carrito</Button>
        </>
    );
}

export default CartContainer