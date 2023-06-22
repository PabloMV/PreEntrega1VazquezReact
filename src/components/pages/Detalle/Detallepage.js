import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios  from "axios";
import Item from "../../ItemDetailContainer/ItemDetailContainer"

const Detalle = () => {
  const [product, setProduct] = useState([]);

  let {id} = useParams();
  
  useEffect(() => {
    Axios(`https://fakestoreapi.com/products/${id}`).then((json) =>
      setProduct(json.data)
    );
  }, []);


  return <div style={{display: "flex", justifyContent: "center"}}>{product.id ? <Item data={product}/> : null}</div>;
};

export default Detalle;
