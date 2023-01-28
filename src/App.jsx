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
              <Route path='/' element={<ItemListContainer titulo={"Ofertas"} />}></Route>
              <Route path='/category/:id' element={<ItemListContainer titulo={"Ofertas"} />}></Route>
              <Route path='/item/:id' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
              <Route path='/cart' element={<CartContainer></CartContainer>}></Route>

              <Route path='*' element={<Navigate to='/'></Navigate>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App