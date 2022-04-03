import { Input, Badge } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { baseService } from '../network/services/baseService';
import {useState, useEffect} from 'react'
import '../style/App.css';
import HomeProduct from './HomeProduct';

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



const Navbar = (props) => {

const [categories, setCategories] = useState([]);

     useEffect(()=> {
       getData();

     },[])

     const getData= ()=>{
       baseService.get('/categories/v2/list-root').then(data => setCategories(data.rootCategories))
     }

     const[searchTerm, setSearhTerm]= useState([])

  return (
    <>
    <div className='navbar'>
    <div  className='nav-title'>
      <Link className='logo-link' to="/">Sephora</Link>
    </div>
    <div className='nav-search'>
      <Search
      placeholder="Ürün, marka, kategori ara​.."
      onChange={event => {setSearhTerm(event.target.value)}}
      allowClear
      size="large"
      onSearch={onSearch}
      
    />
    {/* {categories.filter((val)=>{
      if (searchTerm== ""){
        return val
      }
      else if(val.displayName.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
      }
    }).map((val,key)=>{
          <div className="search-product-1" key={key}>
            {" "}
            <p>{val.displayName}</p>
          </div>
        
      })} */}

      
    
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

    <HomeProduct searchTerm={searchTerm} />

    
    
    </>
    
 )
}    

export default Navbar