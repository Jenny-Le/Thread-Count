import React from "react";
import { Link } from 'react-router-dom';
import "./logo.css"


//Creating Thread Count logo for main page
const Logo = () => {
   return (
    <div className="row">
        <div className="col-12 center-align">
            <Link to='/'><h3 className="logo">Thread Count</h3></Link>
        </div>
    </div>
   )

};


export default Logo;

