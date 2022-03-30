import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import {Card, List,Button} from 'antd'
import {useState, useEffect} from 'react'
import { baseService } from '../network/services/baseService';

const { Meta } = Card;

const HomeProduct = () => {

    const [homeProductList, sethomeProductList] = useState([]);

  useEffect(()=> {
    getData();
  },[])

  const getData= ()=>{
    baseService.get('/products/search?q=o&pageSize=20&currentPage=1').then(data=>sethomeProductList(data.products))
  }


  return (
    <>
        <div className='flex-container '>
       {homeProductList.map((categori ,key)=>(
        <div className='flex-div'>
        <Card
          cover={<img alt="example" src={categori.image135} />}
        >
          <Meta title={categori.displayName}/>

        </Card>
        <div className='category-button'><Button type="primary">{categori.displayName}</Button></div>

      </div>

    ))} 

    </div>
    </>
  )
}

export default HomeProduct