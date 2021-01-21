import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import colors from "../colors/colors.js";
import {BrowserRouter as Router} from "react-router-dom";



const MenuWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-size: 2rem;
  background-color: white;
  flex: 2 3 auto;
   //opacity: 0.7;
 

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  z-index: 200;
  position: fixed;
  top: 0;
  left:0;
`;


const Links = styled.ul`
list-style: none;
text-decoration: none;

display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
flex: 2 5 auto;

padding: 0;
margin:0;

`;

const Link = styled(NavLink)`
  text-decoration: none;
  flex: 2 5 auto;
  color: black;
  margin:1rem;

  &.active{
  //background-color: red;
    border-bottom: 2px solid ${colors.mainOrange};
  }
`;

export default function MobileMenu({isMenuShowing,mobileMenuToggler}) {
    return (

        <>
            {isMenuShowing &&
            <MenuWrapper show={isMenuShowing}>
                <Links>
                    <li>
                        <Link onClick={mobileMenuToggler} exact={true} to={"/"}>HOME</Link>
                    </li>
                    <li>
                        <Link onClick={mobileMenuToggler} exact={true} to={"/illustrations"}>ILLUSTRATIONS</Link>
                    </li>
                    <li>
                        <Link onClick={mobileMenuToggler} exact={true} to={"/projects"}>DESIGN PROJECTS</Link>
                    </li>
                    <li>
                        <Link onClick={mobileMenuToggler} exact={true} to={"/about"}>ABOUT</Link>
                    </li>
                </Links>
            </MenuWrapper>
            }

        </>
    );
};



