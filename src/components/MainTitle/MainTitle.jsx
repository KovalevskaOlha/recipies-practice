import styled from "styled-components";

const Title = styled.h1`
font-size: 2.5rem;       
  font-weight: 700; 
  text-align: center;  
  margin: 30px 0;          
  color: #1f2831;          
  letter-spacing: 1px;     
  text-transform: uppercase; 
`

export const MainTitle = ({text}) => {
    return (
        <Title>{text}</Title>
    )
}