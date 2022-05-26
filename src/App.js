import './App.css';
import Footer from './components/Footer';
// import Upgrade from './components/Upgrade';
import Header from './components/Header';
import UpgradeContainer from './components/UpgradeContainer';
import { useState } from 'react';

function App() {
  const [bones, setBones] = useState(0);
  const [clickAmount, setClickAmount] = useState(1);
  const [idleBones, setIdleBones] = useState(0);
  // method for click
  const clickBone = () => {
    setBones(old => old + clickAmount);
  }
  // method for increasing idleBones
  // const bonesPerSec = (increase) => {
  //   setIdleBones(old => old + increase);
  // }

  return (
    <div className="App">
      <Header />
      <div className='click-area' onClick={clickBone} >
        CLICK HERE FOR BONES
        {bones}
        bones/sec: {idleBones}
      </div>
      <UpgradeContainer setClickAmount={setClickAmount} setIdleBones={setIdleBones} />
      <Footer />
    </div> 
  );
}

export default App;
