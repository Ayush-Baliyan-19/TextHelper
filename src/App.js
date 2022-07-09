import './App.css';
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import TextForm from './Components/TextUtils/TextForm';
// import Alert from './Components/Alerts/Alert';

function App() {
  const [myState, setMyState] = React.useState({ bg: "light" })
  const [mystyle, setMyStyle] = React.useState({
    backgroundColor: "#f8f9fa",
    color: "black"
  })
  const togglemode = async () => {
    if (myState.bg === "dark") {
      setMyState({ bg: "light" });
      setMyStyle({
        backgroundColor: "#f8f9fa",
        color: "black"
      })
    }
    else {
      setMyState({ bg: "dark" })
      setMyStyle({
        backgroundColor: "#212529",
        color: "white"
      })
    }
  }
  return (
    <div style={mystyle} className="App" >
      <Navbar Head="TextUtils" myState={myState} toggleMode={togglemode} />
      <div className="container my-3">
      {/* <Router> */}
        <Routes>
          <Route exact path='/' element={<TextForm/>} />
          <Route exact path='/about' element={<About/>}/>
        </Routes>
      {/* </Router> */}
      </div>
    </div>
  );
}

export default App;