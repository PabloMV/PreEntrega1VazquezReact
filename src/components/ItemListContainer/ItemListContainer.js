import React, { useEffect, useState } from 'react';
import Item from "../ItemDetailContainer/ItemDetailContainer";
import "./ItemListContainer.css"

import {Link} from "react-router-dom"

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => setProducts(data))
},[])

console.log(products)

return (<div className='ListaDeProductos'>
  {products.map((product) => {
    return (
      <div style={{margin: 10}} key={product.id}>
        <Link to={`/detalle/${product.id}`}>
        <Item data={product}/>
        </Link>
      </div>
    );
  })}
</div>);
};

export default ItemListContainer;

