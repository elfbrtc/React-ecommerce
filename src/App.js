import { Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import CategoryPage from './component/CategoryPage'
import Products from './component/Products';
import ProductDetails from './component/ProductDetails';
import Navbar from './component/Navbar';



function App() {
  return (
    <>
    <Navbar/>
    <div className='app'>

      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path="/:categoryId/products" element={<Products />} />
        <Route exact path='/:productId/:preferedSku/detail' element={<ProductDetails />} />
      </Routes>
    </div></>
    
  );
}

export default App;
