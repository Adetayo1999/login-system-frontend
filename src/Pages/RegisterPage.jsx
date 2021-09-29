import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/styled/ButtonStyles";
import { InputTag } from "../components/styled/InputStyles";
import "./LoginPage.css";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password2Error, setPassword2Error] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "fullname") {
      setName(e.target.value);
       
       if(name){
           
        setNameError("");

       }

    } else if (e.target.name === "email") {
      setEmail(e.target.value);
      if (email) {
        setEmailError("");
      }
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
      if (password) {
        setPasswordError("");
      }
    } else {
      setPassword2(e.target.value);

      if (password2) {
        setPassword2Error("");
      }
    }
  };

  const handleBlur = (e) => {
       
    if(e.target.name === "fullname"){
           
             if(!name){
                  setNameError("This Field Is Required"); 
             }
             else{
                 setNameError("");
             }

    }
    else if(e.target.name === "email"){
              
          if(!email){
              setEmailError("This Field Is Required")
          }
          else{
              setEmailError("");
          }

    }

    else if(e.target.name === "password"){
        
        if(!password){
                 
            setPasswordError("This Field Is Required");

        }

        else{

                setPasswordError("");
        }

    }
        
    else {
         
                  if(!password2){
                          
                     setPassword2Error("This Field Is Required");

                  }
                  else if(password2 !== password){
                      
                      setPassword2Error("Passwords Do Not Match");

                  }
                  else{
                      setPassword2Error("");
                  }

    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="intro">
          <h1>Hello Guest, &#128075;</h1>
          <p>
            Registered User? <Link to="/">Login Here</Link>
          </p>
        </div>

        <form>
          <div className="form__group">
            <InputTag
              type="text"
              placeholder="Fullname"
              name="fullname"
              value={name}
              onChange={handleChange}
              error={nameError}
              onBlur={handleBlur}
            />
            <p>{nameError}</p>
          </div>

          <div className="form__group">
            <InputTag
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={emailError}
            />
            <p>{emailError}</p>
          </div>
          <div className="form__group">
          <InputTag
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            error={passwordError}
          />
             <p>{passwordError}</p>
           </div>
          <div className="form__group">
            <InputTag
            type="password"
            placeholder="Re-enter Password"
            value={password2}
            name="password2"
            onBlur={handleBlur}
            onChange={handleChange}
            error={password2Error}
          />
             <p>{password2Error}</p>
            </div>

          <PrimaryButton type="submit" primary disabled={(name && email && password && password2) ? false : true}>
            Register
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
