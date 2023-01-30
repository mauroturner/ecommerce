import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { gFetch } from '../../helpers/gFetch';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const {itemId} = useParams();

    useEffect(() => {
        gFetch({id: itemId})
            .then(res => setProducto(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, []);
    console.log(producto);
    return (
        <Container maxWidth="lg">
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
                    <ItemDetail producto={producto} />
                )}
            </Grid>
        </Container>
    );
}

export default ItemDetailContainer