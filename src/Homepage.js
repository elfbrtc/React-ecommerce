import { products } from "./data/products"
import Categorieshome from './Categorieshome'
import Navbar from "./Navbar"
import CategoriCard from "./CategoriCard"
import { categories } from "./data/categories"


const Homepage = () => {
  return (
      <>
        <Categorieshome/>
        <Navbar/>
        <CategoriCard/>
      </>
    
  )
}

export default Homepage