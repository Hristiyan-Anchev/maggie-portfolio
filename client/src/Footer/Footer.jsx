import React from "react";
import styled from "styled-components";
import Color from "../colors/colors";
import UnorderedList from "../shared/UnorderedList";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBehance, faDribbble, faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import breakpoints from "../breakpoints/breakpoints";


const Footer = styled.footer`
    margin-top: 30%;
    display: flex;
    flex-wrap: wrap;
    height: auto;
    background-color:${Color.footerBlue};
    justify-content: space-around;
    align-items: baseline;
   
    @media(max-width: ${breakpoints.laptop}){
      flex-direction: column;
      margin-top:10rem;
  
  }
`;

const Ul = styled(UnorderedList)`
display: flex;
flex: 1 0 auto;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;

margin: 1.5rem 0 1.5rem 15%;
align-self: center;

@media(max-width: ${breakpoints.laptop}){
    flex-direction: column;
    order:2;
    margin:0;
  }
`;

const UlSocial = styled(Ul)`
  flex: 1 0 auto;
  //justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 10%;
  margin: 0 20% 0 0;
  
  
  
  @media(max-width: ${breakpoints.laptop}){
    flex: 1 1 auto;
    width: 55%;
    align-self: center;
    order:1;
    margin:0;
  }
  
`;


const Li = styled.li`

  margin:1.2rem .3rem 1.2rem .3rem;
  padding: .2rem;
  display: flex;
  justify-content: center;
  flex: 0 1 35%;
  
`;

const Link = styled(NavLink)`
color: white;
white-space: nowrap;
font-weight: bold;
`;

const A = styled.a`
  text-decoration: none;
  color: white;
`;

export default function (){
    return(
        <Footer>
            <Ul>
                <Li>
                    <Link to="/">HOME</Link>
                </Li>

                <Li>
                    <Link to="/illustrations">ILLUSTRATIONS</Link>
                </Li>

                <Li>
                    <Link to="/projects">DESIGN PROJECTS</Link>
                </Li>

                <Li>
                    <Link to="/about">ABOUT</Link>
                </Li>
            </Ul>

            <UlSocial>
                <Li>
                    <A href="https://www.linkedin.com/in/margarita-kostadinova-2905a617a/?fbclid=IwAR3fOxHyGNumROffEPkU0VpZq6ZgC-bYUZ0ejn44O4Bi95PuWVcPa-1u4oM">
                        <FontAwesomeIcon icon={faLinkedinIn}  size={"2x"}/>
                    </A>
                </Li>

                <Li>
                    <A href="https://www.instagram.com/margarita.creates/?fbclid=IwAR07GBAO_5z9gLv4WSL_Z6gipxokD1kPIJxeFmTjJbwkFqRloJ8TW_IBYxU">
                        <FontAwesomeIcon icon={faInstagram} size={"2x"}/>
                    </A>
                </Li>

                <Li>
                    <A href="https://www.behance.net/margaritakostadinova?fbclid=IwAR0PuFT4evkpjmJ2hLvSnTpG406tqGmpn6XZ0hAdqBZ6TzfLpqxB6cNCJBs">
                        <FontAwesomeIcon icon={faBehance} size={"2x"}/>
                    </A>
                </Li>

                <Li>
                    <A href="https://dribbble.com/MargaritaKostadinova?fbclid=IwAR31o8IP6BbUB43wLDCNEuzomUiIGdk2ZkcvnHTIeGOkB1-MWoElXH4AyYs">
                        <FontAwesomeIcon icon={faDribbble} size={"2x"}/>
                    </A>
                </Li>

            </UlSocial>
        </Footer>
    );
};