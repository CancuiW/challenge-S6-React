// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter=styled.div`
     width:80%;
     display:flex;
     justify-content: space-between;
     flex-direction:row;
     border:2px solid green;
     margin:8px ; 
    
     
`
const StyledName=styled.p`
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     font-weight: 800;
      font-size: larger;
      margin-left:8px;
`
const StyledYear=styled.p`
        border:2px solid grey;
        background-color:grey;
        padding:10px ; 
        margin-right:8px;
        color:purple;
        border-radius: 10px;

`

const Character=props=>{
    return (
        <StyledCharacter>
            <StyledName>{props.info.name}</StyledName>
            <StyledYear>{props.info.birth_year}</StyledYear>
        
        </StyledCharacter>

    )
}
export default Character;