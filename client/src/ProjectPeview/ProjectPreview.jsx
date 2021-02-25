import React from "react";
import Image from "../Image/Image.jsx";
import styled from "styled-components";
import colors from "../colors/colors";
import breakpoints from "../breakpoints/breakpoints";
import htmlParser from "html-react-parser";


const MainImage = styled(Image)`
  flex: 1 1 60%;
 
  @media(max-width: ${breakpoints.laptop}){
    order:1;
    width: 100%;
  }
  
`;

const SecondaryImage = styled(Image)`
 flex: 1 2 40%;
  margin: 1%;
  
   @media(max-width: ${breakpoints.laptop}){
    flex: 1 2 100%;
    margin:3%
  }

   @media (min-width: ${breakpoints.laptopL}){
    flex: 1 2 35%;
    
    &:last-child {
    flex:0 1 40%;
    //margin:10%
  }
  }
  
  
  
`;

const MainDescription = styled.p`
  flex: 1 2 60%;
  padding-right:3rem;
  font-size: 14px;

  @media(max-width: ${breakpoints.laptop}){
    order:2;
    width: 100%;
    padding: 0;
    font-size: 1rem;
  }
`;

const MainSectionWrapper = function({className,mainPictureURL,mainDescription}){
  return(
      <div className={className}>
          <MainDescription>{htmlParser(mainDescription)}</MainDescription>
          <MainImage src={mainPictureURL}/>
      </div>
  );
};

const MainSection = styled(MainSectionWrapper)`
  flex: 1 1 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  
  @media(max-width: ${breakpoints.laptop}){
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const PreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;   
    align-items: center; 
`;

const ProjectHeading = styled.h1`
  display: block;
  text-align: center;
  align-self:center;
  justify-self: center;
  width: 100%;
  flex:1 1 100%;
  color: ${colors.mainOrange};
  white-space: normal;
`;

const SecondarySectionWrapper = function ({className,pictures}){
    return(
        <div className={className}>
            {pictures.map((pic,idx)=>{
                return <SecondaryImage key={idx + Math.random().toString()} src={pic}/>
            })}
        </div>
    );
};     

const SecondarySection = styled(SecondarySectionWrapper)`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-top:10%;
  @media (min-width: ${breakpoints.laptopL}){
  width: 80%;
  }
`;

const Preview = function({post}){
    return(
        <>
        <PreviewContainer>
            <ProjectHeading>{post.name}</ProjectHeading>
            <MainSection mainPictureURL={post.projectPictures[0]} mainDescription={post.mainDescription}/>
            <SecondarySection pictures={post.projectPictures.slice(1)} />
        </PreviewContainer>
            </>
    );
};

export default Preview;