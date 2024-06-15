import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'
import Items from './Items'
// import Item from './Item'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const selectObj = useSelector((store) => store.CartReducer);
  


  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="container-fluid">
    <a className="navbar-brand" href="" ><img src="./src/Image/Dev.png" alt="" height="80px"/> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul className="navBar-nav me-auto mb-2 mb-lg-0  ul"  >
      

            <Link class="nav-link active fs-2" aria-current="page" to="/">
              Home
            </Link>

            <Link class="nav-link active fs-2  fas fa-cart-plus"  aria-current="page" to="/additem">
              AddItem
            </Link>

            <Link class="navbar-brand fs-2" to="/cart">
             Cart : {selectObj.Cart.length}
            </Link>
                  
            
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
