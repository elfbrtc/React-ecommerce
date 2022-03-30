import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Home() {
    
    const [categories, setCategories] = useState([]);

    useEffect(()=> {
        axios.get("https://api.rainforestapi.com/categories?api_key=329948108C2C41C0BD337C1465E0D52C&domain=amazon.com")
        .then(res => setCategories(res.data.categories));
        
        
    },[]);

    

    
  return (
    <div>
         {categories.map((category, key) =>(
            
            <span key={key}>{category.name}</span>
         ))
         }
    </div>
  )


}

export default Home