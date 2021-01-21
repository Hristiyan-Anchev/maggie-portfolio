import React from "react";
import styled from "styled-components";
import breakpoints from "../breakpoints/breakpoints";

const  StyledContainer = function ({className,src}){

    return <img className={className} src={src} alt=""/>
}

const Img = styled(StyledContainer)`
  width: 20%;
  flex: 1 2 25%;
  margin: 1%; 
  box-shadow: 5px 5px 15px 0  #cacbcd;
  transition: .3s;
  border-radius: 5px;
  
  
  @media(max-width: ${breakpoints.laptop}){
    flex: 1 1 100%;
    height: auto;
    width:70%;
    margin:3%;
    
    
  }
`;

export default Img;