import './App.css';
import Footer from './components/Footer';
import useInterval from './components/useInterval';
import Header from './components/Header';
import UpgradeContainer from './components/UpgradeContainer';
import { useState } from 'react';

function App() {

  // const [saveLoaded, setSaveLoaded] = useState(false);
  const [bones, setBones] = useState(0);
  const [clickAmount, setClickAmount] = useState(1);
  const [idleBones, setIdleBones] = useState(0);


  const shovel = new Upgrade("Shovel", 0, 15, 1.07, 1);
  const boneBro = new Upgrade ("Bone Bro", 0, 206, 1.12, 5);
  // add other upgrades later
  const [upgrades, setUpgrades] = useState([shovel, boneBro]);

  // constant increase by idle amount per second
  useInterval(() => {
    setBones(old => old + idleBones);
  }, 1000)



  // method for click
  const clickBone = () => {
    setBones(old => old + clickAmount);
  }
  return (
    <div className="App">
      <Header />
      <div className='click-area' onClick={clickBone} >
        CLICK HERE FOR BONES
        <div>{bones}</div>
      </div>
      <div className='idle-bones'>
      bones/sec: {idleBones}
      </div>
      <UpgradeContainer 
        setClickAmount={setClickAmount}
        setIdleBones={setIdleBones}
        upgrades={upgrades}
        setBones={setBones}
        bones={bones}
        />
      <Footer />
    </div> 
  );
}

export default App;

class Upgrade {
  constructor(name, amount, baseCost, coefficient, baseProduction) {
      this.name = name;
      this.amount = amount;
      this.baseCost = baseCost;
      this.coefficient = coefficient;
      this.baseProduction = baseProduction;
      this.setCurrentCost();
      this.setCurrentProduction();
  }

  setCurrentCost = () => {
      return this.currentCost = Math.floor(this.baseCost * (this.coefficient**this.amount));
  }

  setCurrentProduction = () => {
      return this.currentProduction = Math.floor(this.baseProduction * this.amount);
  }

  setAmount = (newAmount) => {
      return this.amount = newAmount;
  }

  incrementAmount = () => {
      return this.amount += 1;
  }
}