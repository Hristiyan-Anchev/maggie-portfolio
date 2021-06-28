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
                if(curVal === "" ){
                    f.style.border = "2px solid rgba(255, 99, 71, 0.5)";
                }
                return f.value.trim();
            });

        //todo : sanitize input

        const reqBody = JSON.stringify({
            username:inputFields[0],
            password:inputFields[1],
        });

        (async ()=>{
            const response =  await (await fetch("/cms/login", {
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


            </div>
        )
    }else if(hasError === null){
        return(
            <div className={className}>

                <Form ref={formRef}
                      // action="/messageme" method="POST"
                >
                    <Label htmlFor={"username"}>Username<Sup>*</Sup></Label>
                    <Input type={"text"} id={"username"} name={"username"} placeholder={"..."}></Input>

                    <Label htmlFor={"password"}>Password<Sup>*</Sup></Label>
                    <Input type={"password"} id={"password"} name={"password"} placeholder={"..."}></Input>


                    <Button
                        onClick={handleSendMessage}
                        type={"submit"} value={"SEND"}/>

                </Form>
                <PostScript>* - field is required</PostScript>
            </div>
        )
    }
}





const StyledLoginForm = styled(FormWrapper)`
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

    export default StyledLoginForm;