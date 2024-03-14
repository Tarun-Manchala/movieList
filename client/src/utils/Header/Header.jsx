import React from "react";
import {Link} from "react-router-dom";
import './Header.css'

function Header(){
    return(
    <>
        <div className="header">
            <h1> Movies List</h1>
        </div>
        {/* <div className="home">
          <Link to="/" className="home-link">Home</Link>
        </div> */}
    </>
    )
}

export default Header;