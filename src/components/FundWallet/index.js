import React , { useState } from 'react'
import {  useNavigate } from "react-router-dom";
import { Form, FormContent, FormWrap, Icon, Container, FormH1, FormLabel, FormInput, FormButton, Text, Accent } from './FundElements'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const FundWallet = () => {

  const [Amount, setamount] = useState("");

  let amountObject = {
    Amount
  };
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://capital-equity.herokuapp.com/users/create-charge", amountObject)
      .then((res) => {
        let coin = res.data.hosted_url
        if (coin) {
          toast.success("Redirecting");
          window.location.href = `${coin}`;
        }

        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      })
      .catch((error) => {
        toast.error("Something went wrong");
        // window.location.reload();
      });
  };


  return (
    <>
        <Container>
        <ToastContainer />

                <FormWrap>
                    <Icon to='/'> CapitalEquity</Icon>
                    <FormContent>
                        <Form action="#" onSubmit ={handleSubmit}>
                            <FormH1> Fund your account ($BTC)</FormH1>
                            <FormLabel htmlFor='for'>Amount (USD)</FormLabel>
                            <FormInput type='number' required onChange={(e) => setamount(e.target.value)}/>
                            
                            <FormButton type="submit">Continue</FormButton>
                            <Text><Accent to="/dashboard">Back to Dashboard</Accent></Text>
                        </Form>
                    </FormContent>
                </FormWrap>
                
            </Container>
    </>
  )
}

export default FundWallet 