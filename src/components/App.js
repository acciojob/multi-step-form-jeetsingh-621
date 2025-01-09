import React, { useState } from "react";
import './../styles/App.css';
import Step from './Step';

const App = () => {
  const [currentstep, setcurrentstep] = useState(1);
  const [formdata, setformdata] = useState([{
    first_name : "",
    last_name:"",
    model:"",
    car_price:"",
    card_info:"",
    expiry_date:"",  
  }]);

  // const handlenext=()=>setcurrentstep((prev)=>prev+1);
  const handlenext = () => {
    setcurrentstep((prevStep) => {
      if (prevStep < 3) return prevStep + 1;
      return prevStep;
    });
  };
  
  // const handleprev =()=>setcurrentstep((prev)=>prev-1);

  const handleprev = () => {
    setcurrentstep((prevStep) => {
      if (prevStep > 1) return prevStep - 1;
      return prevStep;
    });
  };
  

  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log("form submitted:", formdata);
  };

  const handleinputchange=(e)=>{
    const {id , value} = e.target;
    setformdata((prevdata)=>({
      ...prevdata,
      [id]:value,
    }));
  };

  return (
    <div>
      <div>
          <Step step={currentstep} formdata={formdata} handleinputchange={handleinputchange} handlenext={handlenext}
            handleprev={handleprev} handlesubmit={handlesubmit}
          />

      </div>
    </div>
  )
}

export default App
