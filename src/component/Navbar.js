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
       baseService.get('/categories/v2/list-root').then(data => setCategories(data.rootCategories))
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
      
    {categories.map((categori ,key)=>(
       
       <Link to={`/${categori.categoryId}/products`}><h3 key={key}>{categori.displayName}</h3></Link>
     ))}
    </div>

    
    
    </>
    
 )
}    

export default Navbar