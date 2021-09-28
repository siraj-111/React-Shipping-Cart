import React from 'react'
import { FaCartPlus,FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  const count=JSON.parse(localStorage.getItem('cart'))
  const cart=count.length
  
  return (
    <div>
      <ul style={{listStyle:'none',display:'flex',padding:'10px'}} className="offset-4">
        <li style={linkstyle}><NavLink style={{textDecoration:'none'}} to='/'><FaHome size="30" color="#157347" /></NavLink></li>
        <li style={linkstyle}><NavLink style={{textDecoration:'none'}} to='/cart'><FaCartPlus color="#157347" size="30"/><sup>{cart}</sup></NavLink></li>
      </ul>
    </div>
  )
}
const linkstyle={
  marginLeft:'6vw',

}
