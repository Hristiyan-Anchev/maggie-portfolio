import React,{useState,useEffect} from "react";
import styled from "styled-components";

import breakpoints from "../breakpoints/breakpoints";
import Img from "../Image/Image";


const Illustration = styled(Img)`
  flex:1 1 100%;
  margin:10%;
  //width: 25rem;
  @media(min-width: ${breakpoints.laptop}){
  flex: 0 1 40%;
  margin:2%;
  }
  
  @media(min-width: ${breakpoints.laptopL}){
    flex:0 1 29%;
    margin:1%;
  }
  
`;

const Wrapper = styled.div`
  display: flex;
  justify-content:space-evenly;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
  height: 100%;
`;


export default function Illustrations(props) {
    let [data,setData] = useState([]);

    useEffect(()=>{
        let fetchedData = data;

        (async ()=>{
            if(data.length === 0){
               fetchedData = await (await fetch("/illustrations",{
                   headers: {
                       "X-Requested-With": "XMLHttpRequest"
                   }
               })).
               json();
            }
            console.log("fetched data ::::",fetchedData);
            setData(fetchedData);
        })();
     },[]);



    return(
            <Wrapper>
                {
                    data.map(i=>{
                        const key = `${(Math.random() * 100)}${i["_id"].substr(20)}`;
                        const illustrationDestination = i.imagePath;
                        return <Illustration src={illustrationDestination} key={key}/>
                    })
                }
          {/*<Illustration src={artboart_2}/>*/}

          </Wrapper>
    )

}

