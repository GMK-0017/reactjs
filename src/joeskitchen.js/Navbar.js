import React from 'react'

export default function Navbar({setCartOpen}) {
  
  return (
    <div className="navbar">
    <div className="navbar-banner">
      Joe's Kitchen
    </div>

    <div className="nav-cart" onClick={()=>setCartOpen(true)} >
      <i className="fa fa-shopping-cart" > </i>
      <div className="cart-items">0</div>
    </div>
    
  </div>
  )
}
