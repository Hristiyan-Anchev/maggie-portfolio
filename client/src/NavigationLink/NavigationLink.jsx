import React from "react";
import styled from "styled-components";
import Color from "../colors/colors";
import {NavLink} from "react-router-dom";


const StyledAnchor = styled(NavLink)`
 //&:hover{
 ////transform: translateY(.5rem);
 //transition: 1000ms;
 //}
 
 &.active{
  background-color: ${Color.mainOrange};
  color:white;
  transition: 1s;
 }
  
  
  background-color:transparent;
  color:black;
  margin: 0 1rem 1rem 1rem;
  padding: 3rem .6rem .6rem .6rem ;
  text-decoration: none;
  
  white-space: nowrap;
  text-align: center;
  flex-grow: 1;
  flex-shrink: 2;
`;

export default function NavigationLink(props){
    StyledAnchor.defaultProps = {
        to:props.href,
        exact:props.exact
    }


    return(
        <StyledAnchor>
            {props.children}
        </StyledAnchor>
    );
}