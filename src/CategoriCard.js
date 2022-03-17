import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { categories } from './data/categories'
import { useState } from 'react'

import React from 'react'

const CategoriCard = () => {
  
  const [categoriesList, setCategoriesList] = useState(categories)
  
  return (
    

    <>
    {categoriesList.map((categori ,key)=>(
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {categori.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {categori.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button type="primary"></Button>
      </CardActions>
    </Card>
    
    ))}
    
    </>
    
  )
}

export default CategoriCard