import React ,{useState,useEffect}from 'react';
import axios from 'axios';
import Character from './components/Character';
import styled from "styled-components";
const StyledItems=styled.div`
  display: grid;
  place-items: center;

`



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data,setData]=useState([])

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then(res => {
        setData(res.data)
        //console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })

  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledItems>
        {data.map((x,index)=>{
         return <Character info={x} key={index} />
        })
      }

      </StyledItems>
        
      
    </div>
  );
}

export default App;
