import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';

function CategoryPage() {
  const { _id } = useParams();

    return (
     
    <>
     <Navbar/>
    {_id} Armut</>
  )
}

export default CategoryPage