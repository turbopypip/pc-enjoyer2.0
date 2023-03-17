import React, { useState } from "react";
import "./Css/App.css";
import Navigation from "./Navigation";
import DefaultPage from "./Pages/Default";
import Motherboard from "./Pages/Motherboard";
import CPU from "./Pages/CPU";
import PowerUnit from "./Pages/PowerUnit";
import HandleClickScroll from "./Utils/HandleClickScroll";
import OpMemory from "./Pages/OpMemory";
import VideoCard from "./Pages/VideoCard";
import iconButtonUp from "./Icons/buttonUp.png";
import Case from "./Pages/Case";
import CoolingSystem from "./Pages/CoolingSystem";
import PhoneNavigationPanel from "./PhoneNavigationPanel";
import MemoryStorage from "./Pages/MemoryStoragePage";
import Updates from "./Pages/Updates";


const App = () => {
  const [page, setPage] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);

  const getPage = () => {
    switch (page) {
      case 0:
        return <DefaultPage />;
      case 1:
        return <Motherboard />;
      case 2:
        return <CPU />;
      case 3:
        return <PowerUnit />;
      case 4:
        return <OpMemory />;
      case 5:
        return <VideoCard />;
      case 6:
        return <Case />;
      case 7:
        return <CoolingSystem />;
      case 8:
        return <MemoryStorage />;
      case 9:
        return <Updates />
    }
  };

  return (
    <div className="App">

      {window.innerWidth > 720 ? (
        <Navigation setPage={setPage} />
      ) : (
        <div className="navigationPhone">
          <Navigation setPage={setPage} showNavigation={showNavigation} />
          <PhoneNavigationPanel setShowNavigation={setShowNavigation} />
          <div
            className="navigationCloser"
            onClick={() => setShowNavigation(false)}
            style={{
              width: `${showNavigation ? "100vw" : "0"}`,
              height: `${showNavigation ? "100vh" : "0"}`,
            }}
          />
        </div>
      )}
      <div className="PageContainer">
        {getPage()}
        <div className="buttonUpContainer">
          <a className="buttonUp" onClick={(e) => HandleClickScroll(e, "root")}>
            <img src={iconButtonUp} width="50px" height="50px" />
          </a>
        </div>

        <footer className="footer">
          <p>© PC-Enjoyer 2023</p>
          <p>
            <a
              href="https://github.com/turbopypip"
              target="_blank"
              className="linkToTheOtherWebsite"
            >
              <svg
                className="linkIcon"
                viewBox="0 0 16 16"
                version="1.1"
                width="14"
                height="14"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                ></path>
              </svg>
              GitHub
            </a>
          </p>
          <p>contact.pc-enjoyer@mail.ru</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
