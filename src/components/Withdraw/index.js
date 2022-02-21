import React, { useState } from "react";
import { Form, FormContent, FormWrap, Icon, Container, FormH1, FormLabel, FormInput, FormButton, Text } from './WithdrawElements'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const WithDraw = () => {
  const user = JSON.parse(sessionStorage.getItem('user'))
  let id = user._id
  console.log(id)
  const [amount, setAmount] = useState("");

  let balancee
  if(user.balance == ''){
    balancee = 0
  }else{
    balancee = Number(user.balance)
  }
  let navigate = useNavigate()



const handleSubmit = (e) => {
  e.preventDefault();
  
 let amountt = Number(amount)

 if(amountt > balancee){
  toast.error('Insufficient balance')
  window.location.reload()
 }
  else{
    toast.success('Processing Request')
    let newbalancee = Number(user.balance) - amountt
    let balance = newbalancee.toString()
    console.log(balance)
    let balanceAmount = {
      balance
    }
    axios.post(`https://capital-equity.herokuapp.com/users/bank-info/${id}`, balanceAmount).then(axios.post(`https://capital-equity.herokuapp.com/users/bank-info/${id}`, balanceAmount))
      .then((res) => {
        let userr = res.data.user
          console.log(userr)
        if(userr){
          
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
    
  }

  
}



  return (
    <>
        <Container>
                <FormWrap>
                  <ToastContainer />
                    <Icon to='/'> CapitalEquity</Icon>
                    <FormContent>
                        <Form action="#" onSubmit={handleSubmit}>
                            <FormH1> Withdraw (BTC)</FormH1>
                            <FormLabel htmlFor='for'>Wallet Address </FormLabel>
                            <FormInput type='text' required placeholder="0xhdd422h38hj2hbxxhsawws8ss90xk"/>
                            <FormLabel htmlFor='for'>Amount (USD) </FormLabel>
                            <FormInput type='number' required placeholder="Amount" onChange={(e) => setAmount(e.target.value)}/>
                            
                            <FormButton type="submit">Continue</FormButton>
                            <Text>balance: ${user.balance}</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
                
            </Container>
    </>
  )
}

export default WithDraw 