import React from "react";
import styled from "styled-components";
import Colors from "../colors/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import breakpoints from "../breakpoints/breakpoints";


const NavContainer = styled.nav`
       display: flex;
       flex-grow: 1;
       flex-shrink: 2;
       flex-wrap: wrap-reverse;
       justify-content: space-between;
       align-items: center;
       width:100%;
       height:auto;
       border-bottom: 3px solid ${Colors.mainOrange};
      
       
     
    `;


const BurgerButton = styled(FontAwesomeIcon)`
    display: ${props=>props.hidden ? "none" : "inline-block" };
    align-self: center;
    justify-self: center;
    margin:1.5rem;
    //transition: 1s;
    z-index: 400;
   &:hover{
   cursor: pointer;
   
   }
  
  @media (max-width: ${breakpoints.laptop}){
        display: inline-block;   
    }
`;




export default function MainNav ({children,mobileMenuHandler,isBurgerMenuShowing,isMobileMenuActive}) {

    return (

        <NavContainer>
            {children}
            <BurgerButton hidden={!isMobileMenuActive} onClick={mobileMenuHandler} icon={!isMobileMenuActive ? faBars : faTimes} size={!isMobileMenuActive? "3x" : "3x"} />
        </NavContainer>
    );
}