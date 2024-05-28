import React from "react"
import Navbar from "./Navbar"
import { Route, Routes } from "react-router-dom"
import Item from "./Item"
import Cart from "./Cart"
import AddItem from "./AddItem"

const App=()=> {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Item/>} ></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
      <Route path="/AddItem" element={<AddItem/>}></Route>
    </Routes>
      
    </>
  )
}

export default App
