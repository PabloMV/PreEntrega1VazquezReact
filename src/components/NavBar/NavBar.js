import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
     <ul>
        <li><a href='#'>Inicio</a></li>
        <li><a href='#'>Nosotros</a></li>
        <li><a href='#'>Productos</a></li>
        <li><a href='#'>Contactos</a></li>
        <li><CartWidget/></li>
     </ul>
    </nav>
  )
}

export default NavBar