import React, { lazy, Suspense , useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Spinner from "./components/PageComponents/Spinner";
import { UseTokenContext } from "./Context/Context";
import { actionTypes } from "./Context/reducer";
import {defaultURL} from "./consts";


const ForgotPage = lazy(() => import("./Pages/ForgotPage"));
const NotFoundPage = lazy(() => import("./Pages/404"));
const LoginPage = lazy(() => import("./Pages/LoginPage"));
const RegisterPage = lazy(() => import("./Pages/RegisterPage"));
const PublicHomePage = lazy(() => import("./Pages/PublicHomePage"));
const  Dashboard = lazy(() =>  import("./Pages/Dashboard"));

function App() {
  const [state, dispatch] = UseTokenContext();

       
   useEffect(() => {
             
          fetch(`${defaultURL}/refresh_token` , {
                method:"POST",
                credentials:'include',
                headers:{
                  "Content-Type":"application/json"
                }
          })
          .then(res => res.json())
          .then(data => {
            
                
            dispatch({
               type:actionTypes.SET_ACCESS_TOKEN,
               token:data.accessToken              
            })
          })
         .catch(err => {
              console.log(err.message);
         })


   },[dispatch])


  return (
    <div className="app">
      <Router>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route
              exact
              path="/"
              component={state.usertoken ? Dashboard : PublicHomePage}
            />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/forgot" component={ForgotPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
