import React, { useEffect ,useState  } from 'react'
import {  useHistory } from 'react-router-dom';
import './style.css'
 import Cards from "./Cards";
 import Sdata from "./Sdata";

 const Services = () => {

    const history = useHistory();

    const [UserData, setUserData] = useState({ })

    const callSecret = async () => {
        try {
            const res = await fetch("/services", {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
                }, credentials: 'include'
            });

            const data = await res.json();
            setUserData(data);

            console.log(data.name);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
            
        } catch (error) {
             console.log('Not login user..!');
             history.push('/signin', { replace: true });
        }
    };

    useEffect(() => { 
        callSecret();
    }, []);

     return(
         <>
         {/* <div className="my-5">
           <h3 className="text-center"> Welcome  </h3>
         </div> */}
         <div className="container-fluid mb-5">
            <div className="row">
            <h5 className="user-name"> Welcome {UserData.name} </h5>
                <div className="col-10 mx-auto">
                
                  <div className="row gy-4">
                     {
                         Sdata.map(( val , ind ) => {
                             return (
                                 <Cards 
                                     key={ind}
                                     imgsrc={val.imgsrc}
                                     title={val.title}
                                 />
                             )
                         })
                     }
                  </div>
                </div>
            </div>
         </div>
         </>
     );
 };

 export default Services;