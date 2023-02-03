import "./styles.css"
import React, {useState} from "react";


function App() {


  const [minVal, setMinVal]= useState(0);
  const [maxVal, setMaxVal]= useState(10);
  const [randomNum, setRandomNum]= useState(8);

  const giveRandomNum=()=>{
    setRandomNum(Math.floor(Math.random() * 10)

    )
  }
 
  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>Random Number : <span>{randomNum}</span></p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min : </p>
            <input
            type="number"
            value={minVal}
            onChange={e=> setMinVal(e.target)}
            
            
            ></input>
          </div>
          <div>
            <p>Max : </p>
            <input
            type="number"
            value={maxVal}
            onChange={e=> setMaxVal(e.target)}

            
            
            ></input>
          </div>
        </div>
        <br></br>
        <button onClick={giveRandomNum}>Get Random Number</button>

      </div>
     </div>
  );
}

export default App;

