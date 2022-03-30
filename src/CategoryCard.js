import { categories } from './data/categories'
import React, {useState, useEffect} from 'react'
import {Card, List, Result} from 'antd'
import './App.css';
import axios from 'axios';


import image1 from './assets/images/resim.jpg';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const CategoryCard = () => {

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://magic-aliexpress1.p.rapidapi.com/api/v2/categories',
  headers: {
    'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com',
    'X-RapidAPI-Key': '5ce72fcc3bmshb9f82ff04cc2c4dp11ec1cjsnffba98ee069f'
  }
};

  const [categories, setCategories] = useState([]);

    useEffect(()=> {
      axios.request(options).then(function (response) {
        setCategories(response.data);
      }).catch(function (error) {
        console.error(error);
      });

    },[]);
  
const [categoriesList, setCategoriesList] = useState(categories)

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];
  

  return (
    <>
    <div className='nav-categori'>
      
    {categories.slice(0,10).map((categori ,key)=>(
       
       <Link to={`/${categori._id}/products`}><h3 key={key}>{categori.category_name}</h3></Link>
     ))}
    </div>
    <div className='row'>
    {/* <div className='flex-container '>
       {categories.map((categori ,key)=>(
       
        <div className='flex-div'>
        <Card className='card-detail'
          cover={<img alt="example" src={image1} />}
        >
          <Meta title={categori.name} description= {categori.description}/>  
        </Card>     
      </div>
      ))} 
    </div> */}

    <div className='product-list'>
    <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 2,
    }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />
    </div>
    </div>
    
    </>
    
    
    
  );
}

export default CategoryCard