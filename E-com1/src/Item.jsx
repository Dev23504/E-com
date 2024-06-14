import React from 'react'
import './index.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


const Item = ({i}) => {
  const task =useSelector((state)=>state)
    

  const dispatch = useDispatch()
  function AddToCart(){
      dispatch({type:'Add_Item_To_Cart',payload:i})
   

    }
  return (
    <div className='shadow p-3 mb-5 bg-body rounded'>
      {/* <h1>This is Item</h1> */}
      <div className='M'>
        <h1>{i.Mobile}</h1>
         <h1><img src={i.AppleImage} className='img-fluid '></img></h1>
        <h1>{i.Price}</h1>
        <button className='btn btn-primary'  onClick={AddToCart}>AddItem</button>
      </div>
      
     
      
    </div>
  )
}

export default Item
