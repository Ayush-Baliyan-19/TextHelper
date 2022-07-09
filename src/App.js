import './App.css';
import React from 'react';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import TextForm from './Components/TextUtils/TextForm';

function App() {
  const [myState,setMyState]= React.useState({bg:"dark"})
  const [mystyle,setMyStyle]=React.useState({backgroundColor:"black",
color:"white"})
const togglemode = async ()=>{
  if(myState.bg==="dark")
  {
    setMyState({bg:"light"});
    setMyStyle({backgroundColor:"#f8f9fa",
  color:"black"})
  }
  else{
    setMyState({bg:"dark"})
    setMyStyle({backgroundColor:"#212529",
  color:"white"})
  }
}
console.log(myState);
  return (
   <div style={mystyle} className="App" >
      <Navbar Head="TextUtils" myState={myState} toggleMode={togglemode}/>
      <div className="container my-3">
        <TextForm Heading="Enter the text to analyse"/>
      </div>
      {/* <About togglemode={togglemode}/> */}
   </div>
  );
}

export default App;