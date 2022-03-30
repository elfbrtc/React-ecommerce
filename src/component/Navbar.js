import { Input, Badge } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { baseService } from '../network/services/baseService';
import {useState, useEffect} from 'react'
import '../style/App.css';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);



const Navbar = () => {

const [categories, setCategories] = useState([]);

     useEffect(()=> {
       getData();
     },[])

     const getData= ()=>{
       baseService.get('/v2/categories').then(data=>setCategories(data))
     }




  return (
    <>
    <div className='navbar'>
    <div className='nav-search'>
      <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    </div>
    <div className='shopping-cart'>
    <Badge count={5}>
    <ShoppingCartOutlined className='card-' />
    </Badge>
    
    </div>
    </div>
    <div className='nav-categori'>
      
    {categories.slice(0,10).map((categori ,key)=>(
       
       <Link to={`/${categori._id}/products`}><h3 key={key}>{categori.category_name}</h3></Link>
     ))}
    </div>
    
    </>
    
 )
}    

export default Navbar