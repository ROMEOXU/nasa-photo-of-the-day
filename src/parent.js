import React,{useEffect,useState} from "react";
import axios from "axios";

export default function Parent (){
   const [nasa,setNasa] = useState([]);
   const effectfn = () => {
        axios
          .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
          .then(response => setNasa(response.data))
          .catch(error => console.log(error));
      };
    useEffect(effectfn, []);
    console.log(nasa);
    return(
        <>
           <h1>APOD</h1>
           <div>{nasa.explanation}</div>
           <img src = {nasa.url} alt = {nasa.title}/>
        </>

    )
}