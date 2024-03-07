import React from "react";
import logo from '../Assets/agileflow-high-resolution-logo-white-transparent.png'
import '../../App.css'
import './CommonElements.css'
import Sidebar from './Sidebar'

function Header({ onLogout}) {

    return(

        <header>
            <div className="header-container">
                <Sidebar />
                <img src={logo} alt="Logo da empresa" style={{ width: '20%', height: 'auto' }} />
                <button onClick={onLogout}>Logout</button>
            </div>
        </header>
    )
}

export default Header;