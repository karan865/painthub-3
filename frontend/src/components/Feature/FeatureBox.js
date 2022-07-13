import React from 'react'
import { NavLink } from 'react-router-dom';
import "./style.css";
const FeatureBox = (props) => {
    return (
        <div className="a-box">
        <div className="a-b-img" >
            <img src={props.image} alt="" />
        </div>
        <div className="s-b-text" >
            <h2>{props.title}</h2>
            {/* <p>Start your journey</p> */}
            <NavLink to="#" className="btn "  > Read more </NavLink> 
            
        </div>    
        </div>
    )
}

export default FeatureBox 
