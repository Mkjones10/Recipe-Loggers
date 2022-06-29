import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props){
    const {logout} = props
    return(
        <div className="navbar">
            <div className="nav-head">
                Recipe Logger
            </div>
            <div className="nav-links">
                <Link to ='/profile'>Profile</Link>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}