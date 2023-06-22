import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

import {Link} from "react-router-dom" 
import { Home } from '@mui/icons-material'

const NavBar = () => {
  return (
    <nav className='nav'>
       <ul>
       <Link className='Li' to="/">Home</Link>
       <Link className='Li' to="/Contacto">Contacto</Link>
       <Link className='Li' to="/Catalogo">Catalogo</Link>
       <Link className='Li' to="/categoria/men's clothing">Ropa Hombres</Link>
       <Link className='Li' to="/categoria/women's clothing">Ropa Mujeres</Link>
       <li><CartWidget/></li>
     </ul>
    </nav>
  )
}

export default NavBar