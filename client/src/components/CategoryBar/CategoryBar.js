import React from 'react';
import './category-bar.css'

//Creating CategoryBar that contains routes for category that gets chosen
const CategoryBar = () => {
    return (
        <div className="row">
            <div className="col s12 category-bar">
                <a href="/?filter=boy">Boys</a>
                <a href="/?filter=girl">Girls</a>
                <a href="/?filter=tops">Tops</a>
                <a href="/?filter=bottoms">Bottoms</a>
                <a href="/?filter=accessories">Accessories</a>
            </div>
        </div>
    )
}

export default CategoryBar