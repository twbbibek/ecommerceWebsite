import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  /* setup useState */
  /* set up useEffect -> api call */

  useEffect(() => {
    axios
      .get(`https://ecommerce-sagartmg2.vercel.app/api/products/${id}`)
      .then((res) => {
        setProduct(res.data.data)
      });
  }, []);

  return (
    <div className="container">
      <h1>show product details</h1>
      {
        JSON.stringify(product)
      }

      <button className="btn">add to cart</button>
    </div>
  );
}
