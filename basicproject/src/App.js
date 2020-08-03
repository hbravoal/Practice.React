import React,{Fragment, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Cart from './components/Cart';
import Footer from './components/Footer';
function App() {
  //Crear Listado de productos
  const fecha = new Date().getFullYear();
  const [products,setProducts] = useState([
    {id:1, name: 'Camisa ReactJs', price : '$50'},
    {id:2, name: 'Camisa Vue JS', price : '$30'},
    {id:3, name: 'Camisa Angular ', price : '$20'},
    {id:4, name: 'Camisa Express', price : '$40'},
    {id:5, name: 'Camisa Gatsby', price : '$60'}
  ]);
  //State para carrito de compras
  const [cart,setCart] = useState([]);

  return (
    <Fragment>
      <Header titulo="Tienda Virtual"/>
      <h1>Lista de Products</h1>
      {products.map((product) => 
       <Product 
          product={product}
          products = {products}
          key={product.id}
          cart = {cart}
          setCart = {setCart}
        />
      )}
      <Cart
        cart= {cart}
        setCart = {setCart}
      
      />

      
      <Footer  fecha ={fecha}/>
    </Fragment>
  );
}

export default App;
