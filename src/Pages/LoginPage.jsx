
   import React from 'react'
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../components/styled/ButtonStyles';
import { InputTag } from '../components/styled/InputStyles';
   import loginImage from "../images/logn.svg";
  import "./LoginPage.css";
   
   function LoginPage() {
       return (
           <div className="login">
            <div className="container">
             
             <div className="login__left">
                 
                 <img src={loginImage} alt="" />

             </div>

             <div className="login__right">
               
                 <div className="intro">
                 <h1>Welcome Back,  &#128075;</h1>
                 <p>Not Registered? <Link to="/register" >Register Here</Link></p>     
                     </div>   
                     
                     <form>
                         
                         <InputTag type="text" placeholder="Enter Your Name" />
                         <InputTag type="text" placeholder="Email" />
                         <InputTag type="password" placeholder="Password" />
                         <InputTag type="password" placeholder="Re-enter Password" />
                         <PrimaryButton type="submit" primary>Register</PrimaryButton>
                     </form>
              
             </div>
            </div>
           </div>
       )
   }
   
   export default LoginPage
   