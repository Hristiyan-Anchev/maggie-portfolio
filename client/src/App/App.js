import React, {useState} from "react";
import styled from "styled-components";
import {BrowserRouter as Router,  Switch, Route,Redirect} from "react-router-dom";



import PageContainer from "../PageContainer/PageContainer";
import MainNav from "../MainNav/MainNav";
import Logo from "../Logo/Logo";
import mainLogo from "../shared/mlogo.png";
import NavLinks from "../NavLinks/NavLinks";
import NavigationLink from "../NavigationLink/NavigationLink";
import MainContent from "../MainContent/MainContent";
import HomePage from "../Home/HomePage";
import ShowcaseGrid from "../ShowcaseGrid/ShowcaseGrid";
import Footer from "../Footer/Footer";

import Illustrations from "../Illustrations/Illustrations";
import Projects from "../Projects/Projects";
import MobileMenu from "../MobileMenu/MobileMenu";
import About from "../About/About";
import {createGlobalStyle} from "styled-components";
import Montserrat_Regular from "../shared/fonts/Montserrat/Montserrat-Regular.ttf";
import Montserrat_Bold from "../shared/fonts/Montserrat/Montserrat-Bold.ttf"
import StyledForm from "../HireMeForm/HireMeForm";

//
const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "Montserrat";  
  src:url(${Montserrat_Bold});
  font-style:normal;
  font-display:auto;
  font-weight:300;
  }
  
  html{
  font-family: "Montserrat",serif;
  }
  
 
`;

const MainApp = styled.div`

`;


function App() {
    const [isMobileMenuShowing,setIsMobileMenuShowing] = useState(false);

    function noScroll() {
        window.scrollTo(0, 0);
    }

    function handleMobileMenu(evt){
            setIsMobileMenuShowing(!isMobileMenuShowing);
            noScroll();
            const html = document.getElementsByTagName("html")[0];
            html.style.overflow = !isMobileMenuShowing ? "hidden" : "scroll";
    }

  return (


      <Router>

      {/*<MainApp>*/}
        <GlobalStyle/>

          <PageContainer>


              {/*Call your components here*/}

              {isMobileMenuShowing && <MobileMenu mobileMenuToggler={handleMobileMenu} isMenuShowing={isMobileMenuShowing}></MobileMenu>}

              <MainNav mobileMenuHandler={handleMobileMenu} isBurgerMenuShowing={!isMobileMenuShowing} isMobileMenuActive={isMobileMenuShowing}>

                  <Logo src={mainLogo}/>
                  {!isMobileMenuShowing &&
                  <NavLinks>

                      <NavigationLink exact={true} href={"/"}>HOME</NavigationLink>


                      <NavigationLink exact={false} href={"/illustrations"}>ILLUSTRATIONS</NavigationLink>


                      <NavigationLink exact={false} href={"/projects"}>DESIGN PROJECTS</NavigationLink>


                      <NavigationLink exact={false} href={"/about"}>ABOUT</NavigationLink>


                  </NavLinks>}


              </MainNav>
              <MainContent>

             <Switch >
                 <Route exact path="/">
                    <HomePage/>
                     <ShowcaseGrid/>
                 </Route>

                 <Route  path="/illustrations">
                     <Illustrations/>
                 </Route>

                 <Route   path="/projects/" >
                     <Projects/>
                 </Route>

                 <Route exact path="/about">
                     <About/>
                 </Route>

                 <Route  path="/about/hireme">
                     <StyledForm/>
                 </Route>

                 <Route render={() => <Redirect to={{pathname: "/"}}/>}/>


             </Switch>

              </MainContent>
          </PageContainer>
          <Footer/>

            {/*<Divider/>*/}

      {/*</MainApp>*/}
      </Router>
      );
}

export default App;
