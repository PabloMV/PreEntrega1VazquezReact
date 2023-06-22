import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Item from "../../ItemDetailContainer/ItemDetailContainer"

const Categoria = () => {
  const [products, setProducts ]= useState([]);

  let { category } = useParams();

  console.log("category", category);
  console.log("products", products);

  let filteredProduct= products.filter((product) => {
    return product.category === category;
  });



  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => setProducts(data)
    );
  }, []);

  console.log("products", products);
  return (
    <div className="Items">
      {filteredProduct.map((product) => {
        return (
          <div style={{display: "flex", justifyContent: "center"}} key={product.id}>
            <Item data={product} />
          </div>
        );
      })}
    </div>
  );
};



export default Categoria;
