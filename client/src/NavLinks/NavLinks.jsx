import React from "react";
import styled from "styled-components";
import Separator from "../shared/Separator";
import UnorderedList from "../shared/UnorderedList";





export default function NavLinks(props){
    return (
        <>
            {/*<Separator/>*/}
        <UnorderedList>
            {props.children}
        </UnorderedList>
        </>
    );
}