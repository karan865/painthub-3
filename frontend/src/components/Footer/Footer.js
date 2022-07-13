import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css";

const Footer = () => {
    return (
        <>
          <section className="footer">

<div className="container">

    <div className="row">

        <div className="col-md-4" data-aos="fade-right">
            <NavLink to="#" className="logo"><span>S</span>kill<span>S</span>oft</NavLink>
            <p>Power up your potential by learning the latest skills. Choose from 130,000 online video courses with new additions published every month</p>
        </div>

        <div className="col-md-4 text-center" data-aos="fade-up">
            <h3>links</h3>
            <NavLink to="#">home</NavLink>
            <NavLink to="#">about</NavLink>
            <NavLink to="#">facility</NavLink>
            <NavLink to="#">contact</NavLink>
        </div>

        <div className="col-md-4 text-center" data-aos="fade-left">
            <h3>share</h3>
            <NavLink to="#">facebook</NavLink>
            <NavLink to="#">twitter</NavLink>
            <NavLink to="#">instagram</NavLink>
            <NavLink to="#">github</NavLink>
        </div>

    </div>

</div>

<h1 className="credit text-center mx-auto">created by <span>Chuni lal yadav</span> | all rights reserved.</h1>

</section>  
        </>
    )
}

export default Footer
