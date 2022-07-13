import React from 'react'
import { NavLink } from 'react-router-dom';
import Facilities from "./Facilities/Facilities";
import Feature from './Feature/Feature';
import Reviews from './Reviews/Reviews';
import Counter from './Counter/Counter';
import Footer from './Footer/Footer';
import Navbar from './Navbar';



const Header = () => {
    return (
        <>
            <div id="main" className='main'>
                <Navbar />
                <div className="name" >
                    <h1><span>Dream up </span>with confidence and creativity</h1>
                    <p className="details"> Ambition accepted. Learn the latest skills to reach your professional goals.</p>
                    <div className="banner-button">
                        <NavLink to="/services" className="cv-btn">Start Now</NavLink>
                    </div>
                </div>

            </div>
            <Facilities />
            <Feature />
            <Reviews />
            <Counter />
            <Footer />



            {/* <Presentation/>
        <About image={Aboutimg1} title="come with all you need for daily life" button="get the app" />   
        <Contact/> */} */

        </>

    )
}

export default Header
