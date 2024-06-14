import React from 'react'
import { useSelector } from 'react-redux'
import Item from "./Item"
import './index.css'


const Items = () => {
  const itemobj=useSelector((store)=>store.ItemReducer)
  
  const itemList=itemobj.Item;

  const itemsData=itemList.map((i)=>{ 
    
   return(
    <div className='col-md-4'>
    <Item key={i.id} i={i}/></div>
   )
    
    
  })
  
  
  return (
    <div className='container'>
      <h1>Total Items :{itemobj.Item.length}</h1>
      <h1 className='row'>{itemsData}</h1>
      
    </div>
  )
}

export default Items
