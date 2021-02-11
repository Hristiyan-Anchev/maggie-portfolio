
import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const LogoContainer = styled.img`
    //flex-grow: 1;
    //flex-shrink: 1;
    justify-self: baseline;
    align-self: center;
    //flex-basis: 100%;
    width:3rem;
    height: auto;
    z-index: 400;
`;



export default function Logo(props){
    LogoContainer.defaultProps = {
        src:props.src
    }
    console.log(props.src,"DEBUG");
    return <NavLink to="/"><LogoContainer/></NavLink>



}