import React from 'react'
import styled from 'styled-components'
import {IoStatsChart} from 'react-icons/io5'
import  {themeColor, hoverEffect
} from './utils'
const Earnings = () => {
    const user = JSON.parse(sessionStorage.getItem('user'))
    
    let balance
    if(user.balance ==''){
        balance = '0'
    } else{
        balance = user.balance
    }
   
  
  return <EarningsCard>
      <CardContent>
          <Chart>
              <IoStatsChart />
          </Chart>
          <EarningsText>Balance</EarningsText>
          <Earning>${balance}</Earning>
          <EarningsIncrease>+ 10% Interest Per Annum</EarningsIncrease>
      </CardContent>
  </EarningsCard>
}

const EarningsCard = styled.div`
    height: 100%;
    width: 14rem;
    background-color: #01BF71;
    /* background-color: ${themeColor}; */
    padding: 1rem;
    border-radius: 1rem;
    color: white;
    transition: 0.4s ease-in-out;
    &:hover{
        box-shadow: ${hoverEffect};
    }
    @media screen and (min-width:320px) and (max-width : 1080px){
       width: 90%;
      
    }
`

const CardContent = styled.div`
    margin: 1rem;
`


const Chart = styled.div`
    display: flex;
    justify-content: center;
    svg{
        height: 4rem;
        width: 4rem;
    }
`

const EarningsText = styled.h3`
    text-align: center;
    font-weight: normal;
    padding: .4rem 0;
`

const Earning = styled.h2`
    text-align: center;
`

const EarningsIncrease = styled.h5`
    text-align: center;
    font-weight: normal;
    font-size: 10px;
    background-color: rgba(0,0,0,0.2);
    padding: 0.5rem;
    border-radius: 2rem;

    @media screen and (min-width:320px) and (max-width : 1080px){
       margin-top: 10px;
      
    }
`

export default Earnings