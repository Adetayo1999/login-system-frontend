import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { PrimaryButton } from "../components/styled/ButtonStyles";
import { InputTag } from "../components/styled/InputStyles";
import { defaultURL } from "../consts";
import { UseTokenContext } from "../Context/Context";
import { actionTypes } from "../Context/reducer";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Emailerror, setEmailError] = useState("");
  const [Passworderror, setPasswordError] = useState("");
  const [state, dispatch] = UseTokenContext();
  const [isLoading , setIsLoading] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);

      if (email) {
        setEmailError("");
      }
    } else {
      setPassword(e.target.value);

      if (password) {
        setPasswordError("");
      }
    }
  };

  const handleBlur = (e) => {
    if (e.target.name === "email") {
      if (!email) {
        setEmailError("This Field Is Required");
      } else if (
        !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        )
      ) {
        setEmailError("Email Not Valid");
      } else {
        setEmailError("");
      }
    } else {
      if (!password) {
        setPasswordError("This Field Is Required");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Emailerror && !Passworderror) {
        
      setIsLoading(true);
       
      fetch(`${defaultURL}/login`, {
        method: "POST",
        credentials:'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {

      setIsLoading(false);
          if (data.accessToken) {
            dispatch({
              type: actionTypes.SET_ACCESS_TOKEN,
              token: data.accessToken,
            });

                      history.push("/");
          }

          else{
              
                setEmailError(`${data.error}`)
                setPasswordError(`${data.error}`);

          }




        })
        .catch((error) => console.log("error"));
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="intro">
          <h1>Welcome Back, &#128075;</h1>
          <p>
            Not Registered? <Link to="/register">Register Here</Link>
          </p>
        </div>

        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="form__group">
            <InputTag
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Emailerror}
            />
            <p>{Emailerror}</p>
          </div>

          <div className="form__group">
            <InputTag
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Passworderror}
            />

            <p>{Passworderror}</p>
          </div>

          <PrimaryButton
            type="submit"
            primary
            disabled={email && password ? false : true}
          >
            {isLoading ? "Loading..." : "Login"}
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
