import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom'
import './style.css';

export default function Header() {

  const activeClass = ({isActive}) => isActive ? 'current' : undefined

  return (
  <>
    <ul>
        <li><NavLink to="/top" className={activeClass}>Top Songs</NavLink></li>
        <li><NavLink to="/bottom" className={activeClass}>Bottom Songs</NavLink></li>
    </ul>
  </>
  )
}
