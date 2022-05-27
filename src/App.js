import './App.css';
import Footer from './components/Footer';
import useInterval from './components/useInterval';
import Header from './components/Header';
import UpgradeContainer from './components/UpgradeContainer';
import { useState, useContext, createContext } from 'react';

const UserContext = createContext();

function App() {
  const [token, setToken] = useState();
  const [bones, setBones] = useState(0);
  const [clickAmount, setClickAmount] = useState(1);
  const [idleBones, setIdleBones] = useState(0);


  const upgradeArray = [new Upgrade("Shovel", 0, 15, 1.07, 1, "https://i.imgur.com/hoTeSu0.png"),
                        new Upgrade ("Bone Bro", 0, 206, 1.12, 5, "https://i.imgur.com/jImn5VD.png"),
                        new Upgrade ("SkeleSnake", 0, 600, 1.13, 15, "https://stardewvalleywiki.com/mediawiki/images/2/25/Snake_Skull.png")
                      ];
                        
  const [upgrades, setUpgrades] = useState(upgradeArray);

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
      <UserContext.Provider value={token}>
      <Header
      setUpgrades={setUpgrades}
      setBones={setBones}
      setToken={setToken}
      setIdleBones={setIdleBones}
       />
       </UserContext.Provider>
      <div className='main-container'>
      <div className='click-area border' onClick={clickBone} >
        CLICK ME!
        <img className='bone-click' src='https://i.imgur.com/1zm0Xet.png' alt='bone' />
        <div>{bones}</div>
      
      <div className='idle-bones'>
      Bones/sec: {idleBones}
      </div>
      </div>
      
      
      <UpgradeContainer 
        setClickAmount={setClickAmount}
        setIdleBones={setIdleBones}
        upgrades={upgrades}
        setUpgrades={setUpgrades}
        setBones={setBones}
        bones={bones}
        />
        </div>
      <Footer />
    </div> 
  );
}

export default App;

class Upgrade {
  constructor(name, amount, baseCost, coefficient, baseProduction, imageURL) {
      this.name = name;
      this.amount = amount;
      this.baseCost = baseCost;
      this.coefficient = coefficient;
      this.baseProduction = baseProduction;
      this.imageURL = imageURL;
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