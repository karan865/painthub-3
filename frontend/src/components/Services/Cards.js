import React from "react";
import "./style.css";


const Service = (props) => {
    return(
        <>
       
 <div className="col-md-4 col-12 outer-card">
 <main className="grid" >
                  < article>
                      <img src={props.imgsrc} alt="img1" />
                      <div className="text" >
                         <h3>{props.title}</h3>
                         <p>this is descriptions and it is for providing knowledge about cources</p>
                         <button>Start</button> 
                      </div>
                  </article>
               </main>
</div>
                   
        </>
    );
};

export default Service;












