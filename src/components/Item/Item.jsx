import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link, useParams } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <>
            <Grid>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={producto.imagen}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {producto.titulo}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {producto.descripcion}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Añadir</Button>
                        <Link to={"/ecommerce/item/" + producto.id}>
                            <Button size="small">Ver más</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
}

export default Item