import React, {useState} from 'react';
import './global.css'
import PeopleSvg from './assets/undraw_mobile_pay_9abj.svg'
import CalcForm from './Components/CalcForm/CalcForm'
import ResultCards from './Components/ResultCards/ResultCards'

const places = [
  {origin: "011", destinations: ["016", "017", "018"], prices: [1.90, 1.70, 0.90]},
  {origin: "016", destinations: ["011"], prices: 2.90},
  {origin: "017", destinations: ["011"], prices: 2.70},
  {origin: "018", destinations: ["011"], prices: 1.90},
]



const plans = [
  "FaleMais 30",
  "FaleMais 60",
  "FaleMais 120",
]



// const dests = [
//   ["016", "017"],
//   ["011", "017"]
// ]

function App() {


  const [currentOrigin, setCurrentOrigin] = useState(0);
  const [currentDest, setCurrentDest] = useState(0);
  const [currentPlan, setCurrentPlan] = useState(0);
  const [duration, setDuration] = useState(0);
  const [priceWithoutPlan, setPriceWithoutPlan] = useState();
  const [priceWPlan, setPriceWPlan] = useState();



  function handleChangeOrigin(origin){
    setCurrentOrigin(origin);
  }

  function handleChangeDest(dest){
    setCurrentDest(dest);
  }

  function handleChangePlan(plan){
    setCurrentPlan(plan);
  }

  function handleChangeDuration(dur){
    setDuration(dur);
  }




  function calculateNoPlan(e) {
    e.preventDefault();

    const price = getPrice();

    setPriceWithoutPlan(duration * price);

  }



  function getPrice(){
  
    if(currentOrigin === 0){
     return places[0].prices[currentDest];
     }else {
      return places[currentOrigin].prices;
     }
  
  }
  
  function calculatePlan(e) {
    e.preventDefault();

    const tax = getPrice();


    switch(currentPlan){

      case 0:
        
        if(duration <= 30){
          setPriceWPlan(0)
        }else {
          setPriceWPlan(((duration - 30) * ( tax + (0.1 * tax) )))
        }
        break;

      case 1:
        if(duration <= 60){
          setPriceWPlan(0)
        }else {
          setPriceWPlan(((duration - 60) * ( tax + (0.1 * tax) )))
        }
        break;

      case 2:
        if(duration <= 120){
          setPriceWPlan(0)
        }else {
          setPriceWPlan(((duration - 120) * ( tax + (0.1 * tax) )))
        }
        break;

      default:
        break;  

    }

    
  }

  return (

    <>
     
      <main id="content">
          <div className="main-content">
         <section className="side-svg">
         
          <img className="" src={PeopleSvg} alt=""/>

         </section>

         <section className="side-form">
     
           <CalcForm 
           calculateNoPlan={calculateNoPlan} 
           calculatePlan={calculatePlan} 
           handleChangeOrigin={handleChangeOrigin} 
           handleChangeDest={handleChangeDest} 
           handleChangePlan={handleChangePlan} 
           handleChangeDuration={handleChangeDuration} 
           places={places} 
           currentOrigin={currentOrigin} 
           plans={plans} 
           duration={duration} 
           />
          
         </section>
         </div>
          <ResultCards priceWithoutPlan={priceWithoutPlan} priceWPlan={priceWPlan}/>
      </main>
   
                
    </>
  );
}

export default App;
