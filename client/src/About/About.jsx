import React from "react";
import styled from "styled-components";
import Img from "../Image/Image";
import meJPG from "../shared/about/me.JPG";
import workingJPG from "../shared/about/working.JPG";
import colors from "../colors/colors";
import breakpoints from "../breakpoints/breakpoints";
import {NavLink} from "react-router-dom";

const TextWrapper = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
align-items: center;
order:2;
flex:1 3 50%;

@media (max-width:${breakpoints.laptopL}){
flex:1 1 100%;
}
`;

const Heading = styled.h1`
font-weight: bold;
color: ${colors.mainOrange};
`;

const Paragraph = styled.p`
padding:3rem;
  font-weight: bold;
  line-height: 2rem;
`;


const MainImg = styled(Img)`
width: 15rem;
flex: 1 0 40%;
order: 1;
margin:3rem;

@media (max-width:${breakpoints.mobileL}){
flex:1 1 60%;
}

@media (max-width:${breakpoints.laptop}){
flex:1 1 50%;
}

@media (max-width:${breakpoints.laptopL}){
flex:1 1 60%;
}
`;


const SecondaryImg = styled(Img)`
width: 15rem;
flex: 1 0 40%;
margin:3rem;
order:4;

@media (max-width:${breakpoints.laptop}){
flex:1 1 100%;
order:3;
}

// @media (max-width:${breakpoints.tablet}){
// flex:1 1 100%;
// order:3
// }

`;

const HireWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

flex: 1 2 30%;
order:3;

@media (max-width:${breakpoints.laptop}){
flex:1 1 100%;
margin:1rem;
order:4;
}

// @media (max-width:${breakpoints.tablet}){
// flex:1 1 60%;
// order:4
// }


`;

const HireMeBtn = styled(NavLink)`
  border:0;
  background-color: ${colors.mainOrange};
  font-weight: bold;
  color: white;
  border-radius: 4px;
  font-size: 2rem;
  padding:1rem;
  margin:3rem;
  
  &:hover{
  cursor: pointer;
  }
  
  @media (max-width:${breakpoints.laptop}){
  //margin:3rem;
}
`;

const ResumeBtn = styled.a`
  display:inline-block;
  border:0;
  background-color: ${colors.mainOrange};
  font-weight: bold;
  color: white;
  border-radius: 4px;
  font-size: 1rem;
  padding:.5rem;
  margin:.5rem;
  
  &:hover{
  cursor: pointer;
  }
`;



function scrollToTop(evt){
    window.scrollTo(0,0);
}


export default function About(props){
    return (
        <>

                <MainImg src={meJPG}/>
                <TextWrapper>
                    <Heading>
                        Hello Darling!
                    </Heading>
                    <Paragraph>
                        My name is Margarita and I’ve been dealing with art for 10 years now. I started with simple sketching, moving on to oil painting and then digital painting. A year and a half ago, I decided to try graphic design, from which I mostly love illustration, branding and UI design. I went on to study Graphic design through online courses and got my diploma as a Creative Specialist. Even though I studied, I still think I have a lot to learn and I certainly enjoy doing so. I have experience as a freelance graphic designer, but I would love to work in a team so that I can gain more experience. I enjoy working on multiple different style projects, experimenting with bright colours, different techniques and software. As for my character – I am ambitious, patient and quite the perfectionist. I’m friendly and punctual, and organization is a top priority for me. I have a great passion for everything I do, and I am not scared of putting in the time and energy! If you would like to see my resume click {<ResumeBtn href="/assets/Resume.pdf">HERE</ResumeBtn>}
                    </Paragraph>
                </TextWrapper>
            <HireWrapper>
                <Paragraph>If you would like me as a part of your team, or you would like to work with me on an illustration or graphic design project, get in touch and let’s make something incredible together!</Paragraph>
                <HireMeBtn onClick={scrollToTop} to={"/about/hireme"}>HIRE ME </HireMeBtn>
            </HireWrapper>

            <SecondaryImg src = {workingJPG}/>


        </>
    );
}