import styled from "styled-components";
import breakpoints from "../breakpoints/breakpoints";
import React from "react";

const UlWrapper = function({className,children}){
    return(
        <ul className={className}>{children}</ul>
    );
};

const UnorderedList = styled(UlWrapper)`
  display: flex;
  justify-self:flex-end;
  align-self: flex-end;
  flex-wrap: wrap;
  flex-shrink: 3;
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  
  @media (max-width:${breakpoints.laptop}){
          display: none;
       }
`;

export default UnorderedList;