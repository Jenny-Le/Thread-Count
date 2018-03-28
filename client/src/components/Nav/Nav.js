import React from "react"
import "./nav.css"

const Nav = () => {
    return(
        <div className="row valign-wrapper">
        <div className="col s6 m4">
         <form>
            <div className="input-field">
                <i className="material-icons prefix">search</i>
                <input type="text" className="validate"></input>
                <label>Search</label>
            </div>
         </form>
         </div>
         <div className="col s6 m8">

          <ul id="nav-mobile" className="right">
            <li><a href="/signup">Login / Sign Up</a></li>
          </ul>
          </div>
          </div>
    )
}

export default Nav;