import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  Accent
} from "./SignupElements";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let userObject = {
    fullName,
    username,
    email,
    password,
  };

  let navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://capital-equity.herokuapp.com/users/register", userObject)
      .then((res) => {
         let user = res.data.user
        if(user){
            toast.success('Signup Succesful')
        }
        setTimeout(() => {
            navigate('/signin')
          }, 3000)
      }) 
      .catch((error) => {
        toast.error('Incorrect Details')
          window.location.reload()
      });
  };
  return (
    <>
      <Container>
      <ToastContainer />
        <FormWrap>
          <Icon to="/"> CapitalEquity</Icon>
          <FormContent>
            <Form action="#" onSubmit={handleSubmit} >
              <FormH1> Create your account</FormH1>
              <FormLabel htmlFor="for">Full Name</FormLabel>
              <FormInput
                type="text"
                required
                onChange={(e) => setFullName(e.target.value)}
              />
              <FormLabel htmlFor="for">Username</FormLabel>
              <FormInput
                type="text"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormButton type="submit">Continue</FormButton>
              <Text>Have an account? <Accent to="/signin">Login</Accent> </Text>
            </Form>
          </FormContent>
        </FormWrap>
        <Footer />
      </Container>
    </>
  );
};

export default SignUp;
