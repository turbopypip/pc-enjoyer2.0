import React, {useState} from 'react';
import './Css/App.css';
import Navigation from "./Navigation";
import DefaultPage from "./Pages/Default";
import Motherboard from "./Pages/Motherboard";
import CPU from "./Pages/CPU";
import PowerUnit from "./Pages/PowerUnit";
import HandleClickScroll from "./Utils/HandleClickScroll";
import OpMemory from "./Pages/OpMemory";
import VideoCard from "./Pages/VideoCard";
import iconButtonUp from "./Icons/buttonUp.png"
import Case from "./Pages/Case";
import CoolingSystem from "./Pages/CoolingSystem";
import PhoneNavigationPanel from "./PhoneNavigationPanel";

const App = () => {
  const[page, setPage] = useState(0)
  const[showNavigation, setShowNavigation] = useState<boolean>()

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
      case 4:
        return (
          <OpMemory />
        )
      case 5:
        return (
          <VideoCard />
        )
      case 6:
        return (
          <Case />
        )
      case 7:
        return (
          <CoolingSystem />
        )
    }
  }

  return (
    <div className="App">
      {window.innerWidth > 720 ? (<Navigation setPage={setPage}/>) : (<PhoneNavigationPanel />)}
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