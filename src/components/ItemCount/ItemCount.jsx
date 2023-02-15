import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const ItemCount = ({initial = 1, stock = 10, onAdd}) => {
    const [count, setCount] = useState(initial);
    const handleSum = () => {
        if(count >= stock) return;
        setCount(count + 1);
    }
    const handleSubstract = () => {
        if(count <= initial) return;
        setCount(count - 1);
    }
    const handleOnAdd = () => {
        onAdd(count);
    }

    return (
        <>
            <TextField
                id="outlined-number"
                label="Unidades"
                value={count}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <br />
            <Button variant="contained" onClick={handleSum}>+</Button>
            <Button variant="outlined" onClick={handleSubstract}>-</Button>
            <br />
            <Button onClick={handleOnAdd}>Agregar al carrito</Button>
        </>
    );
}

export default ItemCount