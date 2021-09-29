import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/styled/ButtonStyles";
import { InputTag } from "../components/styled/InputStyles";
import "./LoginPage.css";

function RegisterPage() {
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
          <InputTag type="text" placeholder="Fullname" />
          <InputTag type="text" placeholder="Email" />
          <InputTag type="password" placeholder="Password" />
          <InputTag type="password" placeholder="Re-enter Password" />
          <PrimaryButton type="submit" primary>
            Register
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
