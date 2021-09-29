

      import React from 'react';
      import { Link } from 'react-router-dom';
      import { PrimaryButton } from '../components/styled/ButtonStyles';
      import { InputTag } from '../components/styled/InputStyles';
      //    import loginImage from "../images/logn.svg";
        import "./LoginPage.css";
         



      
      function ForgotPage() {
          return (
            <div className="login">
            <div className="container">
             
           
               
                 <div className="intro">
                 <h1>Reset Password  &#128736;</h1>    
                     </div>   
                     
                     <form>
                         <InputTag type="text" placeholder="Email" />
                         <PrimaryButton type="submit" primary>Reset</PrimaryButton>
                     </form>
              
                        <div className="loginForgot">
                                 
                                 <Link to="/">Login Here</Link>

                        </div>


            </div>
           </div>
          )
      }
      
      export default ForgotPage
      