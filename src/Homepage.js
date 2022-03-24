import { products } from "./data/products"
import Categorieshome from './Categorieshome'
import Navbar from "./Navbar"
import CategoryCard from "./CategoryCard"
import { categories } from "./data/categories"
import CategoryAbout from "./CategoryAbout"
import 'antd/dist/antd.css';


const Homepage = () => {
  return (
      <>
        <Categorieshome/>
        <Navbar/>
        <CategoryAbout/>
        <CategoryCard/>
      </>
    
  )
}

export default Homepage