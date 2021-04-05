import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () =>  {
    return (
        <footer>
            <nav>
                <ul className="footer">
                    <li>
                        <NavLink activeStyle={{fontWeight: 700}} exact to="/">Home</NavLink>

                    </li>
                    <li>
                        <NavLink activeStyle={{fontWeight: 700}} exact to="/list">List</NavLink>

                    </li>
                    <li>
                        <NavLink  activeStyle={{fontWeight: 700}} exact to="/add-item">Add Item</NavLink>

                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer
