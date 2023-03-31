import React from 'react'
import Tab from './Tab'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className="tabs">
      <Tab>
        <NavLink to="/login" exact={true}>
          Login
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to="/dashboard">
          Dashboard
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to="/home">
          Homepage
        </NavLink>
      </Tab>
    </div>
  )
}

export default Header