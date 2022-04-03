import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { baseService } from '../network/services/baseService';
const ProductDetails = () => {
  
    const [productDetail, setProductDetail] = useState({});
    const {productId, preferedSku} = useParams();
  useEffect(()=> {
    getData();
  },[productId,preferedSku])
  
  const getData= ()=>{
    baseService.get(`/products/detail?productId=${productId}&preferedSku=${preferedSku}`).then(data=>setProductDetail({brand: data.brand}))
  }
 console.log( productDetail)
  
    return (
    <div>

        {productDetail.map((product) => (
            <h1>{product?.brand?.displayName}</h1>
        ))}


    </div>

   

    

    // <Link to={`/${categori.categoryId}/products`}><h3 key={key}>{categori.displayName}</h3></Link>
  )
}

export default ProductDetails