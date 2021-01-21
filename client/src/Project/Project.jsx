import React,{useState} from "react";
import styled from "styled-components";
import Color from "../colors/colors.js";
import breakpoints from "../breakpoints/breakpoints";


const OverlayWrapper = function ({name, description, className,onClick}) {
    return (
        <div className={className + " overlay"}>
            <h1 style={{margin:".9rem 0 .5rem 0"}}>{name}</h1>
            <p style = {{margin:"0.5rem 0 .9rem 0"}}>{description}</p>
        </div>
    );
}

const Overlay = styled(OverlayWrapper)`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;

  font-weight: bold;
  white-space: nowrap;
  font-size:1rem;
  text-align: center;
  opacity: 0;
  background-color: black;
  color: white;
  width:100%;
  height:100%;
  transition: .7s;
  position: absolute;
  top: 0;
  left:0;
  
  border-radius: 5px;
  
  &:hover{
  opacity: .7;
  }
`;


const ProjectImage = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: 5px 5px 15px 0  #cacbcd;
`;


const ProjectWrapper = function({name,description,className,onClick,pictureURL}){
    return(
        <div  className={className} onClick={onClick}>
            <Overlay name={name} description={description}/>
            <ProjectImage src={pictureURL}/>
        </div>
    );
}


const Project = styled(ProjectWrapper)`
  position: relative;
  font-size: 0;
  border-radius: 5px;
  
 
`;

export default Project;