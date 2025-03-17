import { Button } from '@mui/material';
import './App.css'
import { useState } from 'react';

const Items=({name,price,onAddToCart})=>{
    return(
        <div className='container'>
        <h2>{name}</h2>
        <h3>Price:{price}</h3>
        <Button variant="contained" onClick={()=>onAddToCart(price)}>Add to Cart</Button>
        </div>
    );
}

const Cart=()=>{
    const [totalItems, setTotalItems]=useState(0);
    const [totalCost, setTotalCost]=useState(0);
    const AddToCart=(price)=>{
        setTotalItems(totalItems+1);
        setTotalCost(totalCost+price);
    }
    return(
        <div className='container'>
            <h2>5. State Management with Multiple Components</h2>
            <h2>Shopping Cart</h2>
            <h3>Total Items: {totalItems}</h3>
            <h3>Total Cost: {totalCost}</h3>
            <Items name="Book" price={20} onAddToCart={AddToCart}/>
            <Items name="Fruits" price={30} onAddToCart={AddToCart}/>
            <Items name="Vegetables" price={40} onAddToCart={AddToCart}/>
        </div>
    );
}

export default Cart;