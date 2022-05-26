import './App.css';
import Footer from './components/Footer';
// import Upgrade from './components/Upgrade';
import Header from './components/Header';
import UpgradeContainer from './components/UpgradeContainer';
import { useState } from 'react';

function App() {
  const [bones, setBones] = useState(0);
  const [clickAmount, setClickAmount] = useState(1);
  // method for click
  const clickBone = () => {
    setBones(old => old + clickAmount);
  }

  return (
    <div className="App">
      <Header />
      <div className='click-area' onClick={clickBone} >
        CLICK HERE FOR BONES
        {bones}
      </div>
      <UpgradeContainer setClickAmount={setClickAmount} />
      <Footer />
    </div> 
  );
}

export default App;
