import { categories } from './data/categories'
import { useState } from 'react'
import {Card} from 'antd'
import { Button, Menu, Dropdown } from 'antd';
import './App.css';

import image1 from './assets/images/resim.jpg';



const { Meta } = Card;

const CategoryCard = () => {
  
  const [categoriesList, setCategoriesList] = useState(categories)
  

  return (

    <>
    <div className='flex-container '>
       {categoriesList.map((categori ,key)=>(
       
        <div className='flex-div'>
        <Card
          cover={<img alt="example" src={image1} />}
        >
          <Meta title={categori.name} description= {categori.description}/>
          
        </Card>
        <div className='category-button'><Button type="primary">{categori.name} Kategorisi</Button></div>
        
      </div>
      
      
   
    
    ))} 
    
    </div>
    </>
    
    
    
  );
}

export default CategoryCard