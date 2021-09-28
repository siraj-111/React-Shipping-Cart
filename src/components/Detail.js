import React from 'react'
import { useLocation } from 'react-router'
import data from './data'
export const Detail = () => {
  const location=useLocation()
  const id=location.state.id
  const item=data.find(item=>item.id===parseInt(id))
  return (
    <div >
   
     <img src={item.Image} alt={item.name}/>
     <h4>{item.name}</h4>
     <h6>{item.price} $</h6>
    </div>
  )
}
