import React, {useState} from 'react';
import './Css/App.css';
import Navigation from "./Navigation";
import DefaultPage from "./Pages/Default";
import Motherboard from "./Pages/Moterboard";

function App() {

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
    }
  }

  return (
    <div className="App">
      <Navigation setPage={setPage}/>

      <>{getPage()}</>
    </div>
  );
}

export default App;