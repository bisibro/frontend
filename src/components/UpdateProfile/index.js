import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
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
} from "./ProfileElements";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProFile = () => {
  const user = JSON.parse(sessionStorage.getItem('user'))
  let id = user._id


  const [fullName, setFullName] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setcountry] = useState("");


  let profileObject = {
    fullName,
    phone,
    email,
    country,
  };

  let navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`https://capital-equity.herokuapp.com/users/profile/${id}`, profileObject)
      .then((res) => {
         let userr = res.data.user
         console.log(userr)
        if(userr){
            toast.success('Update Succesful')
            sessionStorage.setItem('user', JSON.stringify(userr))
        }
        setTimeout(() => {
            navigate('/dashboard')
          }, 3000)
      }) 
      .catch((error) => {
        toast.error('Something Went Wrong')
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
              <FormH1> Update Profile</FormH1>
              <FormLabel htmlFor="for">Full Name</FormLabel>
              <FormInput type="text" required onChange={(e) => setFullName(e.target.value)}/>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="text" required onChange={(e) => setEmail(e.target.value)}/>
              <FormLabel htmlFor="for">Phone</FormLabel>
              <FormInput type="text" required onChange={(e) => setphone(e.target.value)} />
              <FormLabel htmlFor="for">Country</FormLabel>
              <FormInput type="text" required onChange={(e) => setcountry(e.target.value)}/>

              <FormButton type="submit">Continue</FormButton>
              <Text><Accent to="/dashboard">Back to Dashboard</Accent></Text>
            </Form>
          </FormContent>
        </FormWrap>
        <Footer />
      </Container>
    </>
  );
};

export default UpdateProFile;
