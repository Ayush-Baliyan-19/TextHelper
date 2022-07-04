import './App.css';
import React from 'react';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
// import TextForm from './Components/TextUtils/TextForm';

function App() {
  const [myState,useMyState]= React.useState({bg:"dark"})
  const [mystyle,useMyStyle]=React.useState({backgroundColor:"black",
color:"white"})
  return (
   <div style={mystyle} className="App" >
      <Navbar Head="TextUtils" props={myState}/>
      {/* <div className="container my-3">
        <TextForm Heading="Enter the text to analyse"/>
      </div> */}
      <About useMyState={useMyState} useMyStyle={useMyStyle} myState={myState} mystyle={mystyle}/>
   </div>
  );
}

export default App;