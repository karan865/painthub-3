import React from 'react';
import "./style.css";
import FeatureBox from "./FeatureBox";
import featureimage from "../../images/feature_1.png";
import featureimage2 from "../../images/feature_2.png";
import featureimage3 from "../../images/feature_3.png";

const Feature = () => {
    return (
        <div id="features">
            <div className="a-container">
                <FeatureBox image={featureimage} title='About Us' />
                <FeatureBox image={featureimage2} title='Blogs' />
                <FeatureBox image={featureimage3} title='Contact Us' />
                
            </div>
        </div>
    )
}

export default Feature
