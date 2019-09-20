import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({title, imageUrl, size, history, linkUrl, match }) => (
    <div className = {`${size} menu-item`} onClick = {() => history.push(`${match.url}${linkUrl}`)}>
        <div className = "background-image"
            style = {{
                backgroundImage: `url(${imageUrl})`
            }}
        />
         <div className = "content">
            <h1 className = "title">{title.toUpperCase()}</h1>
            <span className = "subtitle">SHOP NOW</span>
        </div>
    </div>
)

/*
 WithRouter is a higher order component, which essentially a function that takes a component 
 as an argument and returns a new modified component.Here powering up MenuItem component to have access 
 related to Router (location, match and history props).

*/
export default withRouter(MenuItem);