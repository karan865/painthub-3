import React from 'react'
import "./style.css"
import img1 from "../../images/cmmt1.jpg"
import img2 from "../../images/cmmt2.jpg"
import img3 from "../../images/cmmt3.webp"

const Reviews = () => {
    return (
        <>
            <section className="review" id="review">

<div className="container">

<h1 className="heading"><span>'</span> people's review <span>'</span></h1>

<div className="box-container">

    <div className="box" data-aos="fade-right">
        <p>I come across this learning platform This course is good for the whom are entering in the finance, Perfect skill trainer they have and make this course perfect. I will highly recommend for the those who are entering in finance.</p>
        <h3>Shivani</h3>
        <span>jan 5, 2021</span>
        <img src={img1} alt="" />
    </div>

    <div className="box" data-aos="fade-up">
        <p>I have been a fan of SkillsHunt for a long time and currently have over 85 courses in my account. I find the platform user friendly and you can contact the instructors no matter how long ago the course was posted so you should try this.</p>
        <h3>vikash malhotra</h3>
        <span>jan 7, 2021</span>
        <img src={img2} alt="" />
    </div>

    <div className="box" data-aos="fade-left">
        <p>I enjoyed learn the new skills for life coaching and health and wellness. It allowed me to learn about nutrition and ways to be healthy and help others. Learning from the instructor and the easy to follow step gave me motivation and wanting to learn more.</p>
        <h3>micheal</h3>
        <span>jan 10, 2021</span>
        <img src={img3} alt="" />
    </div>

</div>

</div>

</section>
        </>
    )
}

export default Reviews
