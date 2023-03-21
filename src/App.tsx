import React, { useState, useEffect } from "react";
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
import LinkIcon from "./Icons/LinkIcon.svg"
import PostIcon from "./Icons/PostIcon.svg"


const MOBILE_BREAKPOINT_QUERY = '(max-width: 720px)';

enum Pages {
  DEFAULT,
  MOTHERBOARD,
  CPU,
  POWER_UNIT,
  OP_MEMORY,
  VIDEO_CARD,
  CASE,
  COOLING_SYSTEM,
  MEMORY_STORAGE,
  UPDATES
}

const getMobileMedia = () => window.matchMedia(MOBILE_BREAKPOINT_QUERY);

const App = () => {
  const [page, setPage] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    return getMobileMedia().matches;
  });

  useEffect(() => {
    const media = window.matchMedia(MOBILE_BREAKPOINT_QUERY);

    const handleChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);

    media.addEventListener('change', handleChange)

    return () => {
      media.removeEventListener('change', handleChange)
    }
  }, [])


  const getPage = () => {
    switch (page) {
      case Pages.DEFAULT:
        return <DefaultPage />;
      case Pages.MOTHERBOARD:
        return <Motherboard />;
      case Pages.CPU:
        return <CPU />;
      case Pages.POWER_UNIT:
        return <PowerUnit />;
      case Pages.OP_MEMORY:
        return <OpMemory />;
      case Pages.VIDEO_CARD:
        return <VideoCard />;
      case Pages.CASE:
        return <Case />;
      case Pages.COOLING_SYSTEM:
        return <CoolingSystem />;
      case Pages.MEMORY_STORAGE:
        return <MemoryStorage />;
      case Pages.UPDATES:
        return <Updates />
    }
  };

  const getNavigationCloserStyle = (showNavigation: boolean) => {
    const style = {width: "", height: ""}
    if (showNavigation) {
      style.width = "100vw"
      style.height = "100vh"
      return style
    }
    else{
      style.width = "0"
      style.height = "0"
      return style
    }
  }

  return (
    <div className="App">

      {!isMobile ? (
        <Navigation isMobile={isMobile} setPage={setPage} />
      ) : (
        <div className="navigationPhone">
          <Navigation isMobile={isMobile} setPage={setPage} showNavigation={showNavigation} />
          <PhoneNavigationPanel setShowNavigation={setShowNavigation} />
          <div
            className="navigationCloser"
            onClick={() => setShowNavigation(false)}
            style={{
              width: getNavigationCloserStyle(showNavigation).width,
              height: getNavigationCloserStyle(showNavigation).height,
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
              <img src={LinkIcon} width="15" className="linkIcon"/>GitHub
            </a>
          </p>
          <p>
            <a className="postLink" href="mailto:contact.pc-enjoyer@mail.ru">
              <img src={PostIcon} height="12" className="postIcon"/>contact.pc-enjoyer@mail.ru
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
