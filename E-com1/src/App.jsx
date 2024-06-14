import React from "react"
import Navbar from "./Navbar"
import { Route, Routes } from "react-router-dom"
import Item from "./Item"
import Items from "./Items"
import Cart from "./Cart"
import AddItem from "./AddItem"
import { createStore } from "redux"


import { Provider } from "react-redux"
import RootReducer from "./Reducer/RootReducer"
// import { persistReducer, persistStore,  } from 'redux-persist'
import { PersistGate } from "redux-persist/integration/react"
import {persistReducer,persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"


const App=()=> {
  const persistcongig={
    key : "Root",
    storage
  }
  const persistedReducer =persistReducer(persistcongig,RootReducer)

  const store=createStore(persistedReducer)

  const persistor=persistStore(store)

  return (
    <>
  <Provider store={store}>
 <PersistGate persistor={persistor}>
 <Navbar/>
 <Routes>
          <Route path='/' element={<Items/>}/>
          <Route path='/additem' element={<AddItem/>}/>
          <Route path='/cart' element={<Cart/>}/>

     </Routes>
      
 </PersistGate>
  </Provider>
    </>
  )
}

export default App
