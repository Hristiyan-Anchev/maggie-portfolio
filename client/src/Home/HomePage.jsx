import styled from "styled-components";
import mainImg from "../shared/home/mainImg.jpg";
import Color from "../colors/colors";
import Separator from "../shared/Separator";
import Image from "../Image/Image";
import breakpoints from "../breakpoints/breakpoints";
import React from "react";


const Landing = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-wrap: wrap-reverse;
    align-items:center;
    justify-content: space-between;
    width: 85%;
`;

const MainImage = styled(Image)`
  width:15rem;
 flex: 1 1 70%;
  align-self: center;
  justify-self:center;
  height: auto;
  margin: 3%;
  
  
  box-shadow: 5px 5px 15px 0  #cacbcd;
  border-radius: 5px;
  
  @media(min-width: ${breakpoints.laptop}){
  flex-basis: 50%;
  }
`;

const MainArticle = styled.article`          
    line-height: 1.8rem;
    width:15rem;
    height:auto;
    flex: 1 6 40%;
    justify-self: flex-end;   
`;

const Heading = styled.h1`
white-space: nowrap;
color:${Color.mainOrange};
text-align: center;
font-weight: bold;
font-size: 2rem;
`;

const Paragraph = styled.p`
text-align: justify-all;
font-weight: bold;
`;

const Divider = styled(Separator)`
  width:10% ;
  flex-grow: 1;
  flex-shrink: 1000;
`;

export default function HomePage(props){
    return(
        <>
            <Landing>

                <MainImage src={mainImg}/>

                {/*<Divider/>*/}

                <MainArticle>
                   <Heading>Well hello there!</Heading>
                    <Paragraph>My name is Margarita Kostadinova and I am a Graphic Designer and Illustrator based in Manchester, UK. I started out as a fine artist, but got sucked into the design world. Now I make illustrations and obsess over plants. I would love to help you with visualizing your ideas and give them a touch of “spice”.</Paragraph>
                </MainArticle>
            </Landing>

            <br/>



        </>

    );
}