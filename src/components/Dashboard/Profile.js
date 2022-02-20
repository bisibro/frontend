import React from 'react'
import styled from 'styled-components'
import AvatarImage from "../../images/user.png";
import Navbar from './Navbar';

const ProFile = () => {
  return (
     
        
    <FormContainer>
        <UserDeets>
            <Avatar><img src={AvatarImage}  alt=""/></Avatar>
            <Username>Jidex</Username>
        </UserDeets>
        <Inputs>
            <Input placeholder="Full Name" required type="text"/>
        </Inputs>
        <Inputs>
            <Input placeholder="Country" required type="text"/>
        </Inputs>
        <Inputs>
            <Input placeholder="Phone" required type="text"/>
        </Inputs>
        <Inputs>
            <Input placeholder="Gender" required type="text" />
        </Inputs>
        <FormButton>Submit</FormButton>
    </FormContainer>
  
  )
}



const FormContainer = styled.form`
    width: 50%;
    height: auto;
    background-color: #01BF71;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
    margin-left: 1rem;
    margin-top: 3rem;
`
const UserDeets = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    margin-top: -2rem;
`
const Avatar = styled.div`
    img{
        height: 4rem;
        width: 4rem;
    }
`
const Username = styled.p``
const Inputs = styled.div``
const Input = styled.input`
    width: 
    padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`
const FormButton = styled.button`
height: 50px;
width: 30%;
    background: white;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #01BF71;
  font-size: 20px;
  cursor: pointer;
`




export default ProFile

