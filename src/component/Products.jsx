import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import {Card, Row, Col} from 'antd'
import { Meta } from 'antd/lib/list/Item';
import {useState, useEffect} from 'react'
import { baseService } from '../network/services/baseService';



const Products = () => {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();
  useEffect(()=> {
    getData();
  },[categoryId])
  
  const getData= ()=>{
    baseService.get(`/products/list?categoryId=${categoryId}&pageSize=20&currentPage=1`).then(data=>setProducts(data.products))
  }


  return (
    <>
    
        <div className='page-container '>
        <Row align='middle' wrap gutter={[48,48]}>
        {products.map((product ,key)=>(
            
            <Col span={6}>
               <Link to={`/${product.productId}/${product.currentSku.skuId}/detail`}>
                <Card
                
                cover={<img alt="example" 
                src={product.image450} 
                />
                }
                style={{width:240}}
                hoverable>
                    <Meta title={product.displayName} description={product.brandName}/>
                </Card>
                </Link>
            </Col>
            
        ))} 
    </Row>
    </div>
    </>
  )
}

export default Products