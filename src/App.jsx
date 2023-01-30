import React from 'react'
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartContainer from './components/CartContainer/CartContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/ecommerce/' element={<ItemListContainer titulo={"Productos"} />}></Route>
                <Route path='/ecommerce/category/:categoriaId' element={<ItemListContainer titulo={"Productos"} />}></Route>
                <Route path='/ecommerce/item/:itemId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
                <Route path='/ecommerce/cart' element={<CartContainer></CartContainer>}></Route>

                <Route path='*' element={<Navigate to='/ecommerce/'></Navigate>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App