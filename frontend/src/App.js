import React, {createContext, useReducer} from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Header from "./components/Header";
import Services from "./components/Services/Services";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import Navbar from "./components/Navbar";
import Logout from './components/Logout/logout';
import About from './components/About/About';
import { initialState, reducer } from './reducer/userReducer'

//for toggle logout
export const UserContext = createContext();

const Routing = () => {



  // const getUserName = async () => {
  //     try {
  //         const response = await fetch('/getUserDetails', {
  //             method: "GET",
  //             headers: {
  //                 'Content-Type': 'application/json'
  //             }
  //         }); 
  //         console.log(response);
  //         const data = await response.json();
  //         console.log(`My Home data Login `+data.name);
  //         if (data) {
  //             dispatch({ type: 'USER', payload:data });
  //           console.log(`login ka useffect ` + data);
  //         }
  //     } catch (error) {
  //         console.log(`My Home page error `+error);
  //       }
  // }

  // useEffect(() => {
  //   getUserName();
  // }, []);

  return (


    <Switch>

      <Route path="/" exact component={Header} />
      <Route path="/services" exact component={Services} />
      <Route path="/about" exact component={About} />
      <Route path="/register" exact component={Signup} />
      <Route path="/signin" exact component={Signin} />
      <Route path="/logout" exact component={Logout} />
      <Redirect to="/" />
    </Switch>


  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <Router>
        <UserContext.Provider value={{ state, dispatch }}>

          <Navbar />

          <Routing />

        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
