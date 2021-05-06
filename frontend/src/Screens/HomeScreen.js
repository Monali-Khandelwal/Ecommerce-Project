import React,{ useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function HomeScreen(props){


  //Define a hook
  const [products, setProduct] = useState([]);

  //fetch data from server

  useEffect(() => {
    const fecthData = async () =>{
      const {data} = await axios.get("/api/products");
      setProduct(data);
    }
    fecthData();
    return () => {
      //
    }
  }, [])
    
    return <ul className="products">
    {
      products.map(product => 
        <li key={product._id}> 
          <div className="product">
            <Link to={'/product/'+ product._id}>
                <img className="product-image" src={product.image} alt="product"/>
            </Link>
            <div className="product-name"> 
                <Link to={'/product/'+ product._id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price"> Rs {product.price}</div>
            <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>
          </div>
        </li>
      )
    }
      
  </ul>
}

export default HomeScreen;