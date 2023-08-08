import { useEffect } from 'react';
import './App.css';
import Home from './Home';

function App() {

  useEffect(() => {
    window.onload = () => {
      document.getElementById('myVideo').play()
    }
  })
  return (
    <div>
      <video autoplay muted loop id="myVideo" >
        <source src={"space_vid.mp4"} type="video/mp4"></source>
      </video>
      <div className='content' >
      <Home/>
      </div>
    </div>
  );
}

export default App;
