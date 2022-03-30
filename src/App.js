import { Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import CategoryPage from './component/CategoryPage'



function App() {
  return (
    
    <div className='app'>

      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path="/:_id/products" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
