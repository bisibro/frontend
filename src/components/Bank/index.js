import React, { useState } from "react";
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
} from "./BankElements";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const BankDetails = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  let id = user._id;

  const [bankName, setbankName] = useState("");
  const [accountName, setaccountName] = useState("");
  const [accountNumber, setaccountNumber] = useState("");

  let bankObject = {
    bankName,
    accountName,
    accountNumber,
  };

  let navigate = useNavigate();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://capital-equity.herokuapp.com/users/bank-info/${id}`,
        bankObject
      )
      .then((res) => {
        let userr = res.data.user;
        console.log(userr);
        if (userr) {
          toast.success("Update Succesful");
          sessionStorage.setItem("user", JSON.stringify(userr));
        }
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      })
      .catch((error) => {
        toast.error("Something Went Wrong");
        window.location.reload();
      });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/"> CapitalEquity</Icon>
          <FormContent>
            <Form action="#" onSubmit={handleSubmit}>
              <FormH1> Update Bank Details</FormH1>
              <FormLabel htmlFor="for">Bank Name</FormLabel>
              <FormInput type="text" required onChange={(e) => setbankName(e.target.value)} />

              <FormLabel htmlFor="for">Account Name</FormLabel>
              <FormInput type="text" required onChange={(e) => setaccountName(e.target.value)}/>
              <FormLabel htmlFor="for">Account Number</FormLabel>
              <FormInput type="number" required onChange={(e) => setaccountNumber(e.target.value)}/>

              <FormButton type="submit">Continue</FormButton>
              <Text><Accent to="/dashboard">Back to Dashboard</Accent></Text>
            </Form>
          </FormContent>
        </FormWrap>
        
      </Container>
    </>
  );
};

export default BankDetails;
