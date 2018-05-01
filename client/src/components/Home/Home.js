import React from "react";
import "./home.css" 
import ProductLists from "../ProductLists"
const queryString = require('query-string');

//parsing URL paramaters with query-string library
const Home = (props) => {
   const filter = queryString.parse(props.location.search);
   return (
        <ProductLists {...filter} searchQuery={props.searchQuery} />
   )

}

export default Home;