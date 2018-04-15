import React from "react";
import "./home.css" 
import ProductLists from "../ProductLists"
const queryString = require('query-string');


const Home = (props) => {
   const filter = queryString.parse(props.location.search);
   return (
        <ProductLists {...filter} searchQuery={props.searchQuery} />
   )

}

export default Home;