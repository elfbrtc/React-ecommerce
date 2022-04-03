import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import {Card, List,Button, Row, Col} from 'antd'
import {useState, useEffect} from 'react'
import { baseService } from '../network/services/baseService';

const { Meta } = Card;

const HomeProduct = (props) => {

  var {searchTerm} = props

    const [homeProductList, sethomeProductList] = useState([]);

  useEffect(()=> {
    getHomeProducts();
    return () => {
      sethomeProductList([]);
    };
  },[searchTerm])

  const getHomeProducts = async () =>{
    // console.log(searchTerm === "" || searchTerm.length===0);
    try {
      const data= await baseService.get(`/products/search?q=${(searchTerm === "" || searchTerm?.length===0 ) ? "o" : searchTerm}&pageSize=20&currentPage=1`)
      console.log(data);
      sethomeProductList(data.products)
      
    } catch (error) {
      sethomeProductList([])
      console.log(error);
    }
    // baseService.get(`/products/search?q=${searchTerm}&pageSize=500&currentPage=1`).then(data=>sethomeProductList(data.products))
  }


  return (
    <>
        <div className='flex-container container '>
        <Row align='middle' wrap gutter={[48,48]}>
        {homeProductList?.length !==0 ? homeProductList?.map((category ,key)=>(
        <Col  xs={{ span: 12, offset: 2 }} lg={{ span: 6, offset: 2 }}>
          <Card
            style={{width:280}}
            hoverable
            cover={<img alt="example" src={category.image450} />}
          >
            <Meta title={category.displayName} description={category.brandName}/>

          </Card>
        </Col>
      

    )): <h1>Ürün Bulunamadı</h1>} 
    </Row>

    </div>
    </>
  )
}

export default HomeProduct