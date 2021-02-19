import React,{useState} from "react";
import colors from "../colors/colors";
import styled from "styled-components";
import breakpoints from "../breakpoints/breakpoints";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faExclamation, faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";
import {faBehance, faDribbble, faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";


const BaseForm = React.forwardRef((props,ref)=>{
    return(
        <form className={props.className} ref={ref}>
            {props.children}
        </form>
    );
});

const formRef = React.createRef();

const Form = styled(BaseForm)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex:1 2 auto;
`;

const Label = styled.label`
margin:1rem;
font-size: 2rem;
letter-spacing: .3rem;
flex:1 2 auto;

`;

const Textarea = styled.textarea`
  
  
  box-shadow: 5px 5px 15px 2px  #cacbcd;
  transition: .3s;
  flex:1 2 auto;
  margin:0;
  padding:.7rem;
  border:1px solid lightgray;
  border-radius: 5px;
  height:20rem; 
  width:55vw;
  -webkit-appearance: none;
  @media(min-width: ${breakpoints.mobileM}){
  width: 60vw;
  }
  
  @media(min-width: ${breakpoints.tablet}){
   width: 40vw;
  }
  
  @media(min-width: ${breakpoints.laptop}){
    width: 35vw;
  }
  
  @media(min-width: ${breakpoints.laptopL}){
  width: 30vw;
  }
  
  @media(min-width: ${breakpoints.laptopL}){
  width: 20vw;
  }
  
  @media(min-width: ${breakpoints.desktop}){
  width: 15vw;
  }
  
`;


const Input = styled.input`
  flex: 2 2 auto;
  padding:1rem;
  box-shadow: 5px 5px 15px 2px  #cacbcd;
  transition: .3s;
  border:1px solid lightgray;
  border-radius: 5px;
  width:55vw;
  -webkit-appearance: none;
  
  
  @media(min-width: ${breakpoints.mobileM}){
  width: 60vw;
  }
   @media(min-width: ${breakpoints.tablet}){
   width: 40vw;
  }
  
  @media(min-width: ${breakpoints.laptop}){
    width: 35vw;
  }
  
  @media(min-width: ${breakpoints.laptopL}){
  width: 30vw;
  }
  
  @media(min-width: ${breakpoints.laptopL}){
  width: 20vw;
  }
  
  @media(min-width: ${breakpoints.desktop}){
  width: 15vw;
  }
  
`;
const Button = styled.input`
  border:0;
  background-color: ${colors.mainOrange};
  font-weight: bold;
  color: white;
  border-radius: 4px;
  font-size: 2rem;
  padding:1rem;
  margin:3rem;
  
  &:hover{
  cursor: pointer;
  }  
  
  flex:1 2 auto;
  -webkit-appearance: none;
`;

const Sup = styled.sup`
    font-size: 1rem;
    `;

const PostScript = styled.p`
    font-size: 1rem;
    font-weight: 100;
    font-style: italic;
    text-align: center;
    
`;

const Paragraph = styled.p`
     width: 90%;
     letter-spacing: .1rem;
     line-height: 1.3rem;
      margin:2rem;
      text-align: center;
      
    @media(min-width: ${breakpoints.tablet}){
      width: 80%;
    }
    
     @media(min-width: ${breakpoints.laptop}){
      width: 70%;
    }
    
    @media(min-width: ${breakpoints.laptopL}){
      width: 45%;
    }
    
    @media(min-width: ${breakpoints.desktop}){
      width: 35%;
    }
`;


const SocialSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const A = styled.a`
  
  text-decoration: none;
  color: black;
  margin:1rem;
  
  @media(min-width: ${breakpoints.tablet}){
  margin:1.5rem;
  }
`;



const FormWrapper = function({className}){
    window.scrollTo(0,0);
    let [hasError,setHasError] = useState(null);

    function handleSendMessage(evt){
        evt.preventDefault();
        const inputFields = Array.from(formRef.current.children)
            .filter(c => c.tagName !== "LABEL" && c.type !== "submit")
            .map((f,idx) => {
                f.style.border = "";
                let curVal = f.value.trim();
                if(curVal === "" || (idx === 1 && !curVal.match(new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"))) || curVal.length > 5000){
                    f.style.border = "2px solid rgba(255, 99, 71, 0.5)";
                }
                return f.value.trim();
            });

        //todo : sanitize input

        const reqBody = JSON.stringify({
            name:inputFields[0],
            email:inputFields[1],
            subject:inputFields[2],
            message:inputFields[3]
        });

        (async ()=>{
            const response =  await (await fetch("/api/messageme", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: reqBody
            })).json();
            setHasError(response.error);
        })();
    }
            if(hasError === true){
                return(
                    <div className={className}>
                        <FontAwesomeIcon icon={faExclamationTriangle} size={"8x"} style={{color:"red",margin:"1rem"}}/>
                        <Paragraph>Oopss... an error occurred! Please try again or get in touch via one of the social medias!</Paragraph>

                </div>
                )
        }else if(hasError === false){
                return(
                <div className={className}>
                    <FontAwesomeIcon icon={faCheck} size={"8x"} style={{color:"forestgreen",margin:"1rem"}}/>
                    <Paragraph>Thank you so much for reaching out! I am extremely happy that you chose to work with me and I will do my very best to get back to you as soon as possible. In the mean time feel free to check out my social media accounts.</Paragraph>

                    <SocialSection>
                        <A href="https://www.linkedin.com/in/margarita-kostadinova-2905a617a/?fbclid=IwAR3fOxHyGNumROffEPkU0VpZq6ZgC-bYUZ0ejn44O4Bi95PuWVcPa-1u4oM">
                            <FontAwesomeIcon icon={faLinkedinIn}  size={"2x"}/>
                        </A>

                        <A href="https://www.instagram.com/margarita.creates/?fbclid=IwAR07GBAO_5z9gLv4WSL_Z6gipxokD1kPIJxeFmTjJbwkFqRloJ8TW_IBYxU">
                            <FontAwesomeIcon icon={faInstagram} size={"2x"}/>
                        </A>

                        <A href="https://www.behance.net/margaritakostadinova?fbclid=IwAR0PuFT4evkpjmJ2hLvSnTpG406tqGmpn6XZ0hAdqBZ6TzfLpqxB6cNCJBs">
                            <FontAwesomeIcon icon={faBehance} size={"2x"}/>
                        </A>

                        <A href="https://dribbble.com/MargaritaKostadinova?fbclid=IwAR31o8IP6BbUB43wLDCNEuzomUiIGdk2ZkcvnHTIeGOkB1-MWoElXH4AyYs">
                            <FontAwesomeIcon icon={faDribbble} size={"2x"}/>
                        </A>
                    </SocialSection>
                </div>
                )
        }else if(hasError === null){
              return(
                  <div className={className}>

            <Form ref={formRef} action="/messageme" method="POST">
            <Label htmlFor={"name"}>Name<Sup>*</Sup></Label>
            <Input type={"text"} id={"name"} name={"name"} placeholder={"John Smith..."}></Input>

            <Label htmlFor={"email"}>Email<Sup>*</Sup></Label>
            <Input type={"email"} id={"email"} name={"email"} placeholder={"john.smith@gmail.com..."}></Input>

            <Label htmlFor={"subject"}>Subject<Sup>*</Sup></Label>
            <Input type={"text"} id={"subject"} name={"subject"} placeholder={"Enquiry for..."}></Input>

            <Label htmlFor={"message"}>Message<Sup>*</Sup></Label>
            <Textarea rows="4" cols="50"
            type={"text"} id={"message"} name={"message"}
            placeholder={"Your text message goes here..."}></Textarea>

            <Button onClick={handleSendMessage} type={"submit"} value={"SEND"}/>

            </Form>
            <PostScript>* - field is required</PostScript>
                </div>
              )
        }
}



const StyledForm = styled(FormWrapper)`
width: 100%;
display:flex;
flex-wrap: wrap;
flex-direction:column;
align-items: center;
justify-content: center;


@media(max-width: ${breakpoints.laptop}){
  //width:20%;
}
`;

export default StyledForm;
