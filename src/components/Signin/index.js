import React, { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

import {
  Form,
  FormContent,
  FormWrap,
  Icon,
  Container,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  Accent,
} from "./SigninElements";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer";

const SignIn = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let userObject = {
    username,

    password,
  };
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://capital-equity.herokuapp.com/users/login", userObject)
      .then((res) => {
        let user = res.data.user;
        if (user) {
          toast.success("Login Successful");
         
        }

        setTimeout(() => {
          sessionStorage.setItem("user", JSON.stringify(user));
          navigate("/dashboard");
        }, 3000);
      })
      .catch((error) => {
        toast.error("Incorrect Details");
        window.location.reload();
      });
  };
  return (
    <>
      <Container>
        <ToastContainer />
        <FormWrap>
          <Icon to="/"> CapitalEquity</Icon>
          <FormContent>
            <Form action="#" onSubmit={handleSubmit}>
              <FormH1> Sign into your account</FormH1>
              <FormLabel htmlFor="for">Username</FormLabel>
              <FormInput
                type="text"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormButton type="submit">Continue</FormButton>
              <Text>
                Don't have an account? <Accent to="/signup">Sign up</Accent>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
