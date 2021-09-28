import React, { Suspense } from "react";
import "./App.css";
 import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ForgotPage from "./Pages/ForgotPage";
import NotFoundPage from "./Pages/404";





function App() {
  return (
    <div className="app">       
           <Router>
            
                    <Suspense fallback={<div>Loading...</div>}>
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
