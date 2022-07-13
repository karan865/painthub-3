import React from 'react'
import "./style.css";

const Counter = () => {
    return (
        <>
         <section className="counter">

<div className="container">

    <div className="box-container">

        <div className="box" data-aos="fade-up">
            <i className="fas fa-building"></i>
            <span>120+</span>
            <h3>Classes</h3>
        </div>

        <div className="box" data-aos="fade-up">
            <i className="fas fa-users"></i>
            <span>100+</span>
            <h3>facilities</h3>
        </div>

        <div className="box" data-aos="fade-up">
            <i className="fas fa-smile"></i>
            <span>1200+</span>
            <h3>Students</h3>
        </div>

        <div className="box" data-aos="fade-up">
            <i className="fas fa-book"></i>
            <span>130+</span>
            <h3>Subjects</h3>
        </div>

    </div>

</div>

</section>   
        </>
    )
}

export default Counter
