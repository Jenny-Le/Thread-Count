import React from "react"
import "./nav.css"

const Nav = () => {
    return(
        <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/user/login">Login / Sign Up</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Nav;