import React from "react";
import {Link} from "react-router-dom";
import './Header.css'
import Navbar from "../../components/navbar"

function Header(){
    return(
    <>
    {/* <Navbar/> */}
        <div className="header">
            <h1> Movies List</h1>
        </div>
    </>
    )
}

export default Header;