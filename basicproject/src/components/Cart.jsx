import React from 'react';
import './cart.css';
import Product from '../components/Product';
const Cart = ({cart,setCart}) => {
    return (  
        <div className="cart">
                <h1>Tu Carrito de compras</h1>
        {
            cart.length === 0
            ? <p> No hay elementos en el carrito</p>
            :
            cart.map((cartItem) =>(
             <Product
                key={cartItem.id}
                product= {cartItem}
                cart ={cart}
                setCart= {setCart}
             >

             </Product>
            ))
        }    
        </div>
    );
}
 
export default Cart
