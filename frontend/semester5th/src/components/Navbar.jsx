import React from 'react'
import './navbar.css'
const Navbar = (props) => {
  return (
    <div id="navbar">
        <h1>This is Navbar Component</h1>
        <a href="#">{props.name}</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </div>
  )
}

export default Navbar