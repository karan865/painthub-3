import React, { useState }  from 'react'
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "./style.css";

const Signup = () => {

    const history = useHistory();

    const [user , setUser] = useState({
        name:"",LastName:"", email:"", phone:"",  password:"", cpassword:""
    })

    let name, value;

    const handleInputs = (e) => {
       console.log(e)
       name = e.target.name;
       value = e.target.value;

      setUser({ ...user, [name]:value })
    }

    const PostData = async (e) => {
        e.preventDefault();    //event object for preventing form automatic reload behaviour

        const { name,LastName, email, phone, password, cpassword } = user;

        const res = await fetch("http://localhost:8000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // When sending data to a web server, the data has to be a string.
            body: JSON.stringify({
                name,
                LastName,
                email,
                phone,
                password,
                cpassword
            })
        });

        const data = await res.json();

        if (res.status === 422 ) {
            toast.warn('Email already exist');
            // window.alert("Invalid Crediental ");
            // console.log("registration failed");
        } else if (res.status === 423){
            toast.warn(' All fields are required ');
        }else if (res.status === 424){
            toast.warn('Password and Confirm Password not match');
        }else if (res.status === 425){
            toast.warn(' Unable to Register ');
        }else {
            // toast.success('🦄 User Registered Successfully ✔ ');
            window.alert("User Registered Successfully");
            history.push("/signin");
        }

        // const data = await res.json();

    }

    return (
        <>
             <div className="container boxx1 ">
        <div className="myCard m-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="myLeftCtn"> 
                        <form method="POST" id="register-form" className="myForm text-center" >
                            <header>Create new account</header>
                            <div className="form-group">
                                <i className="fas fa-user"></i>
                                <input className="myInput" type="text" name="name" id="name"  
                                     value={user.name}
                                     onChange={handleInputs}
                                     placeholder="First Name" /> 
                            </div>

                            <div className="form-group">
                                <i className="fas fa-user"></i>
                                <input className="myInput" type="text" name="LastName" id="LastName"  
                                  value={user.LastName}
                                  onChange={handleInputs}
                                    placeholder="Last Name" /> 
                            </div>

                            <div className="form-group">
                                <i className="fas fa-envelope"></i>
                                <input className="myInput" type="email" name="email" id="email"  
                              value={user.email}
                              onChange={handleInputs}
                                     placeholder="Your Email" />
                            </div>

                            <div className="form-group">
                                <i className="fas fa-user"></i>
                                <input className="myInput" type="number" name="phone" id="phone"  
                                 value={user.phone}
                                 onChange={handleInputs}
                                    placeholder="Mobile Number" />
                            </div>

                            <div className="form-group">
                                <i className="fas fa-lock"></i>
                                <input className="myInput" type="password" name="password" id="password"  
                                  value={user.password}
                                  onChange={handleInputs}
                                    placeholder="Password" /> 
                            </div>

                            <div className="form-group">
                                <i className="fas fa-lock"></i>
                                <input className="myInput" type="password" name="cpassword" id="cpassword"  
                              value={user.cpassword}
                              onChange={handleInputs}
                                    placeholder="Confirm your password" />
                            </div>

                            <input type="submit" name="signup" id="signup" className=" myInput form-submit butt" value="Register" 
                                    onClick={PostData} 
                                    />
                            
                        </form>
                    </div>
                </div> 
                <div className="col-md-6">
                    <div className="myRightCtn">
                            <div className="box"><header>welcome</header>
                            
                            <p>The world's largest selection of courses
Choose from 130,000 online video courses with new additions published every month</p>
                                <input type="button" className="butt_out" value="Learn More"/>
                            </div>
                                
                    </div>
                </div>
            </div>
        </div>
</div> 

<ToastContainer position = "top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick rtl={false}
                    pauseOnFocusLoss draggable pauseOnHover />
        </>
    )
}

export default Signup


