import React, { lazy, Suspense } from "react";
import "./App.css";
 import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Spinner from "./components/PageComponents/Spinner";


const  ForgotPage = lazy(() => import("./Pages/ForgotPage"));
 const NotFoundPage = lazy(() => import("./Pages/404"));
const LoginPage =  lazy(() => import("./Pages/LoginPage"));
const RegisterPage = lazy(() => import("./Pages/RegisterPage"));



function App() {
  return (
    <div className="app">       
           <Router>
            
                    <Suspense fallback={<Spinner />}>
                     
            <Switch>
                    

                        <Route exact path="/" component = {LoginPage} />
                         <Route path = "/register" component={RegisterPage} />
                          <Route path = "/forgot" component = {ForgotPage} />
                          <Route  component={NotFoundPage}/>
            </Switch>
            </Suspense>
           </Router>
    </div>
  );
}

export default App;
