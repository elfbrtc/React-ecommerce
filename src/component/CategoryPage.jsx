import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import {Card, List,Button} from 'antd'
import {useState, useEffect} from 'react'
import { baseService } from '../network/services/baseService';

const { Meta } = Card;


function CategoryPage() {
  const { categoryId} = useParams();

  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(()=> {
    getData();
  },[])

  const getData= ()=>{
    baseService.get('/products/search?q=b&pageSize=20&currentPage=1').then(data=>setCategoriesList(data.products))
  }


    return (
     
    <>
     <Navbar/>
     
     {/* <div className='flex-container '>
       {categoriesList.map((categori ,key)=>(
        <div className='flex-div'>
        <Card
          // cover={<img alt="example" src={image1} />}
        >
          <Meta title={categori.displayName}/>

        </Card>
        <div className='category-button'><Button type="primary">{categori.displayName} Kategorisi</Button></div>

      </div>

    ))} 

    </div> */}
    
    </>
  )
}

export default CategoryPage