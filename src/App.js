import './App.css';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import TextForm from './Components/TextUtils/TextForm';

function App() {
  return (
   <>
      <Navbar Head="TextUtils"/>
      {/* <div className="container my-3">
        <TextForm Heading="Enter the text to analyse"/>
      </div> */}
      <About />
   </>
  );
}

export default App;