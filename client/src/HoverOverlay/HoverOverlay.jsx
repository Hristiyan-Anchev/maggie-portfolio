import styled from "styled-components";


const  Container = function({className}){
    return (
        <div className={className} ></div>
    );
}



const HoverOverlay = styled(Container)`
  //display: flex;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(255,226,217,0.6) ;
    
`;


export default HoverOverlay;
