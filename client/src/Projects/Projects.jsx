import React,{useState,useEffect} from "react";
import styled from "styled-components";
import Project from "../Project/Project";
import {BrowserRouter as Router, NavLink, Route, Switch, useLocation} from "react-router-dom";
import breakpoints from "../breakpoints/breakpoints";
import ProjectPreview from "../ProjectPeview/ProjectPreview";

const StyledNavLink = styled(NavLink)`
justify-self: center;
margin: 1rem;
flex: 0 2 40%;

@media (max-width: ${breakpoints.tablet}){
flex: 2 2 80%;
}

@media(min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.laptop}) {
flex: 2 2 30%;
}
`


const Container = function (props){
     const [data,setData] = useState([]);
     const [tilesVisible,setTilesVisible] = useState(true);
     const location = useLocation();


    useEffect( ()=>{
         let fetchedData = data;
             (async ()=>{
                 if(fetchedData.length === 0){
                 fetchedData =await (await fetch("/projects",{
                     headers: {
                         "X-Requested-With": "XMLHttpRequest"
                     }
                 }))
                     .json();
                 }
                 setData(fetchedData);
             })();

     },[]);

    useEffect(()=>{
        setTilesVisible(location.pathname === "/projects");

    },[location])


     function handleTileClick(evt){
         setTilesVisible(false);
     }

    return (
        <div className={props.className}>
        <Router>
            { tilesVisible &&
            data.map(post =>{
                console.log(post)
                return(
                    <StyledNavLink key={`${post._id.substring(20)}${Math.random()}`} to={`/projects/${post._id}`}>
                        <Project onClick={handleTileClick} name={post.name} description={post.shortDescription} pictureURL={post.pictureURL}/>
                    </StyledNavLink>
                    );
                })
            }

            <Switch>
                {!tilesVisible &&
                    data.map(post =>{
                        return(
                            <Route key={post._id}
                                   exact path={`/projects/${post._id}`}
                            >
                                <ProjectPreview post={post}/>
                            </Route>
                        );
                    })
                }
            </Switch>
        </Router>
        </div>
    );
}


const Projects = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  
  @media (min-width: ${breakpoints.laptop}){
    max-width:80%;
  }
  
`;

export default Projects;