import React from 'react'
import "./style.css";
import img1 from "../../images/course1.jpg";
import img2 from "../../images/course2.jpg";
import img3 from "../../images/course3.jpg";
import img4 from "../../images/course4.jpg";
import img5 from "../../images/course5.jpg";
import img6 from "../../images/course6.jpg";
import img7 from "../../images/course7.jpg";
import img8 from "../../images/course8.jpg";
import img9 from "../../images/course9.jpg";


const Facilities = () => {
    return (
        <>
         <section className="facility" id="facility" >

              <div className="container">

              <h1 className="heading"><span>'</span> Top categories <span>'</span></h1>

              <div className="box-container" >

    <div className="card" data-aos="fade-right" >
        <img src={img1} alt="img2" />
        <div className="card-text" >
            <h3>Design</h3>
        </div>
    </div>

    <div className="card"  data-aos="fade-up">
        <img src={img2} alt="img2" />
        <div className="card-text" >
           <h3>Development</h3>
        </div>
    </div>

    <div className="card"  data-aos="fade-left">
        <img src={img3} alt="img2" />
        <div className="card-text" >
        <h3>Marketing</h3>
        </div>
    </div>

    <div className="card" data-aos="fade-right">
        <img src={img4} alt="img2" />
        <div className="card-text" >
        <h3>IT & Software</h3>
        </div>
    </div>

    <div className="card" data-aos="fade-up" >
        <img src={img5} alt="img2" />
        <div className="card-text" >
        <h3>Development</h3>
        </div>
    </div>

    <div className="card" data-aos="fade-left" >
        <img src={img6} alt="img2" />
        <div className="card-text" >
        <h3>Business</h3>
        </div>
    </div>

    <div className="card" data-aos="fade-right">
        <img src={img7} alt="img2" />
        <div className="card-text" >
        <h3>Photography</h3>
        </div>
    </div>

    <div className="card" data-aos="fade-up">
        <img src={img8} alt="img2" />
        <div className="card-text" >
        <h3>Music</h3>
        </div>
    </div>

    <div className="card" data-aos="fade-left" >
        <img src={img9} alt="img2" />
        <div className="card-text" >
        <h3>Grafic Design</h3>
        </div>
    </div>

    {/* <div className="box" data-aos="zoom-in">
        <NavLink to="images/ig1.jpg" title="our team">
            <img src={img1} alt="abc" />
        </NavLink>
    </div>

    <div className="box" data-aos="zoom-in">
        <NavLink to="images/img2.jpg" title="our lab">
            <img src={img2} alt="img2" />
        </NavLink>
    </div>

    <div className="box" data-aos="zoom-in">
        <NavLink to="images/img3.png" title="emergency rooms">
            <img src={img3} alt="img3" />
        </NavLink>
    </div>

    <div className="box" data-aos="zoom-in">
        <NavLink to="images/img4.jpg" title="expert doctors">
            <img src={img4} alt="img4" />
        </NavLink>
    </div>

    <div className="box" data-aos="zoom-in">
        <NavLink to="images/img5.jpg" title="expert doctors">
            <img src={img5} alt="img5" />
        </NavLink>
    </div>

    <div className="box" data-aos="zoom-in">
        <NavLink to="images/img6.jpg" title="emergency rooms">
            <img src={img6} alt="img6" />
        </NavLink>
    </div>

    <div className="box" data-aos="zoom-in">
        <NavLink to="images/img7.jpg" title="expert doctors">
            <img src={img7} alt="img7" />
        </NavLink>
    </div>

    <div className="box" data-aos="zoom-in">
        <NavLink to="images/img8.jpg" title="emergency rooms">
            <img src={img8} alt="img8" />
        </NavLink>
    </div>

    <div className="box" data-aos="zoom-in">
        <NavLink to="images/img9.jpg" title="enough beds">
            <img src={img9} alt="img9" />
        </NavLink>
    </div> */}

</div>

</div>

</section>   
        </>
    )
}

export default Facilities
