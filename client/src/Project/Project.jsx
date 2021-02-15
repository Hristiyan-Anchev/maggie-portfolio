import React,{useState} from "react";
import styled from "styled-components";
import Color from "../colors/colors.js";
import breakpoints from "../breakpoints/breakpoints";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";


const StyledSearchIcon = styled(FontAwesomeIcon)`
  
  @media(max-width: ${breakpoints.laptopL}){
  display: block;
  }  
  
 transition: .6s;
 &:hover{
  color:rgba(0,0,0,.8);
 }
 
  display: block;
  //position: absolute;
  //bottom: .5rem;
  //right: .5rem;
  color:rgba(0,0,0,.4);
  //color:black;
  width: 2rem;
  height: auto;
`;

const MagnifyingGlass = function({className,visible}){
    return (<div style={{fontSize:"1rem",position:"absolute",bottom:0,right:0,padding:"1rem"}} className={className}>
        <StyledSearchIcon icon={faSearchPlus} size="2x"/>
    </div>)
}

const OverlayWrapper = function ({name, description, className,}) {
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
  white-space: normal;
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
  z-index: 0;
  
  border-radius: 5px;
  
  
  
  @media(min-width: ${breakpoints.laptopL}){
    &:hover{
     opacity: .7;
    }
  }
`;


const ProjectImage = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: 5px 5px 15px 0  #cacbcd;
`;


const ProjectWrapper = function({name,description,className,onClick,pictureURL}){
    const [visible,setVisible] = useState(true);

    return(
        <div  className={className} onClick={onClick}
        onMouseEnter={()=>{
            console.log("enter")
            setVisible(false)
        }}
              onMouseLeave={()=>{
                  console.log("leave")
                  setVisible(true)
              }}
              onTouchStart={(evt)=>{
                  setVisible(false)
              }}

              onTouchEnd={(evt)=>{
                  setVisible(true)
              }}

        >
            {visible && <MagnifyingGlass/>}
            { <Overlay name={name} description={description}/>}
            <ProjectImage src={pictureURL}/>

        </div>
    );
}


const Project = styled(ProjectWrapper)`
  position: relative;
  font-size: 1px;
  border-radius: 5px;
  
 
`;

export default Project;