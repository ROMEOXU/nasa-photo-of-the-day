import React,{useEffect,useState} from "react";
import axios from "axios";
import styled from 'styled-components';
import Example from './reactbutton'

const NasaDiv = styled.div`
padding:5%;

`
const NasaH1 = styled.h1`
 color:#696969;
`
export default function Parent (){
   const [nasa,setNasa] = useState([]);
   const [err,setErr] =useState(false);
   const effectfn = () => {
        axios
          .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
          .then(response => setNasa(response.data))
          .catch(error => setErr(true));
      };
    useEffect(effectfn, []);
    console.log(nasa);
    return(
        <>
           {err && <div>Something went wrong...</div>}
           <NasaH1>NASA'S APOD</NasaH1>
           <NasaDiv>{nasa.explanation}</NasaDiv>
           <img src = {nasa.url} alt = {nasa.title}/>
           <Example />
        </>

    )
}