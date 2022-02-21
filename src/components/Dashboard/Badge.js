import React from 'react'
import styled  from 'styled-components'
// import {themeColor} from '../Dashboard/utils'

const Badge = ({ content, clean=false,glow = false , paid = false, late = false}) => {
  return (
    <Div glow={glow} paid={paid} late={late} clean={clean} >{content}</Div>
  )
}

const Div = styled.div`
padding: 0.3rem 1rem;
border-radius: 1rem;
font-weight: 500;
color: white;
background-color: #01BF71;
cursor: pointer;

${({clean}) => clean && `
 
  color: #01BF71;
  border: 0.05rem solid #01BF71;
background-color: transparent;

`}

${({glow}) => glow && `
  font-size: 0.6rem;
  padding: 0.2rem  0.5rem;
  font-weight: normal;
  color: #2f233d;
background-color: rgba(109, 134, 245, 0.192);

`}

${({paid}) => paid && `
 background-color: #70e00041;
 color: #70e000;

`}

${({late}) => late && `
 background-color: #ff595e41;
 color: #ff595e;

`}


`

export default Badge