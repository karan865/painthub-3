import React from 'react'
import "./style.css";
import img1 from "../../images/team-member4.jpg";
import img2 from "../../images/team-member1.png";
import img3 from "../../images/team-member2.png";
import img4 from "../../images/team-member3.png";

const About = () => {
    return (
        <>
        <div className="about-container">
      <div className="profile-image">
        <img src={img1} alt="" />
        
      </div>

      <div className="description">
        <p>
        At SkillSoft, we’ve seen again and again how the seemingly simple act of creating can be a force for growth, change, and discovery in people’s lives. We want to inspire and multiply the kind of creative exploration that furthers expression, learning and application.
        </p>
        <p>
        SkillSoft is an online learning community with thousands of classes for creative and curious people, on topics including illustration, design, photography, video, freelancing, and more. On Skillshare, millions of members come together to find inspiration and take the next step in their creative journey.
        </p>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, tempora!
        </p> */}
      </div>

      <div className="projects-container">
        <div className="project">
          <h3 className="project-name">Active Members </h3>
          <div className="project-number  websites-designed">1000+</div>
        </div>

        <div className="project">
          <h3 className="project-name">Courses</h3>
          <div className="project-number  apps-developed">100+</div>
        </div>
      </div>

      <h2 className="our-team-heading">Our Team</h2>

      <div className="our-team">
        <div className="team-member">
          <img src={img2} alt="" />
          <div className="designation">
            <strong>Alice J.,</strong> (Project Manager)
          </div>
        </div>

        <div className="team-member">
          <img src={img3} alt="" />
          <div className="designation">
            <strong>Dave B.,</strong> (Lead Designer)
          </div>
        </div>

        <div className="team-member">
          <img src={img4} alt="" />
          <div className="designation">
            <strong>Jeniffer A.,</strong> (Lead Programmer)
          </div>
        </div>
      </div>

      <div className="our-mission">
        <img className="quote-icon" src="images/quote-icon.png" alt="" />
        <p>Our mission is to provide the best services to our clients.</p>
      </div>
    </div>


            
        </>
    )
}

export default About
