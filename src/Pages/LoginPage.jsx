import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/styled/ButtonStyles";
import { InputTag } from "../components/styled/InputStyles";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Emailerror, setEmailError] = useState("");
  const [Passworderror, setPasswordError] = useState("");


  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleBlur = (e) => {        

 



    if (e.target.name === "email") {
              
            if(!email){

                    setEmailError("This Field Is Required");

            }

            else{

                  setEmailError("")

            }


      }

       else {
        
           
        if(!password){

            setPasswordError("This Field Is Required");

    }

    else{

          setPasswordError("")

    }

      }
    };


  
            
        console.log(Passworderror , Emailerror);

  return (
    <div className="login">
      <div className="container">
        <div className="intro">
          <h1>Welcome Back, &#128075;</h1>
          <p>
            Not Registered? <Link to="/register">Register Here</Link>
          </p>
        </div>

        <form method="post">
          <InputTag
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            error ={Emailerror}
          />
          <InputTag
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Passworderror}
          />
          <PrimaryButton type="submit" primary disabled={ (email && password ) ? false : true}>
            Login
          </PrimaryButton>
        </form>

        <div className="loginForgot">
          <Link to="/forgot">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
