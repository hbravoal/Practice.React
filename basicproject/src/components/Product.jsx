import React from 'react'
const Product = ({product,products,cart,setCart}) => {
    const handleSelectProduct = id => {        
        const filterProduct = products.filter((itemProduct) => {
            return itemProduct.id ===  id;
        })
        setCart([
           ...cart,
           filterProduct[0]
       ]) 
        
    }
    const handleDeleteProduct = id => {        
        console.log('deleting',id)
        const filterProduct = cart.filter(itemProduct => itemProduct.id !== id);
             
        console.log(filterProduct)
        setCart(filterProduct)
        
    }
    const {name,price,id}= product;
    return (
        <div className="itemProduct">
            <h2>{name}</h2>
            <p>{price}</p>
           
            {products ? 
                ( <button
                    type="button"                
                    onClick={()=>handleSelectProduct(id)}
                >Comprar</button>)
            :
            ( <button
                type="button"                
                onClick={()=>handleDeleteProduct(id)}
            >Eliminar</button>)
            }
        </div>
     );
}
 
export default Product;