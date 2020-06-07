import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./Advice.css"


 const Advice = () => {
   const [advice, setAdvice] = useState("");
   const [loading, setLoading] = useState(false);

   useEffect(() => {
    const url = "https://api.adviceslip.com/advice"
    axios.get(url)
      .then((res) => {
          setLoading(true);
          setAdvice(res.data.slip.advice);
      })
      .catch((error) => {
        console.log(error)
      })
   }, [])

   const onClickHandler = () => {
     window.location.reload();
   }


 if(!loading) {
     return (
       <h1 style={{color: "white"}}>Loading...</h1>
     )
   }
  return (
    <>
    <h1>Get Some Life Advice My Friend</h1>
    <img src="https://diatribe.org/sites/default/files/images/advice_mega.png" alt="Life advice"/>
    <div className="advice">
        <div className="advice-para">{advice}</div>
    </div>
    <button onClick={onClickHandler}>Click To Get New Quote</button>
  </>
  )
}

export default Advice;
