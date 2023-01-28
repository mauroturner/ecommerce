import React from 'react'
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
      <>
          <Navbar />
          <main>
              <ItemListContainer titulo={"Ofertas"} />
          </main>
      </>
  );
}

export default App