import React,{useState,useEffect} from "react";
import styled from "styled-components";
import p1 from "../shared/home/showcase1.jpg";
import p2 from "../shared/home/showcase2.jpg";
import Image from "../Image/Image";



const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex:1 1 50%;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
`;



export default  function ShowcaseGrid() {

    return (
        <Grid>
            <Image src={p1}/>
            <Image src={p2}/>
        </Grid>
    );
}