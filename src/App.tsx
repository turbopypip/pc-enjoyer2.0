import React, {useState} from 'react';
import './Css/App.css';
import Navigation from "./Navigation";
import DefaultPage from "./Pages/Default";
import Motherboard from "./Pages/Moterboard";
import CPU from "./Pages/CPU";
import PowerUnit from "./Pages/PowerUnit";
import iconButtonUp from "./Icons/buttonUp.png"
import HandleClickScroll from "./Utils/HandleClickScroll";

const App = () => {

  const[page, setPage] = useState(0)

  const getPage = () =>{
    switch (page){
      case 0:
        return (
          <DefaultPage />
        )
      case 1:
        return (
          <Motherboard />
        )
      case 2:
        return (
          <CPU />
        )
      case 3:
        return (
          <PowerUnit />
        )
    }
  }

  return (
    <div className="App">
      <Navigation setPage={setPage}/>

      <>
        {getPage()}
        <div className="buttonUpContainer">
          <a
            className="buttonUp"
            onClick={(e) =>
              HandleClickScroll(e,"root")}
          >
            <img src={iconButtonUp} width="50px" height="50px"/>
          </a>
        </div>
      </>
    </div>
  );
}

export default App;