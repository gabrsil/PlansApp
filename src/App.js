import React, {useState} from 'react';
import './global.css'
import PeopleSvg from './assets/undraw_mobile_pay_9abj.svg'

const places = [
  {origin: "011", destinations: ["016", "017", "018"], prices: [1.90, 1.70, 0.90]},
  {origin: "016", destinations: ["011"], prices: [2.90]},
  {origin: "017", destinations: ["011"], prices: [2.70]},
  {origin: "018", destinations: ["011"], prices: [1.90]},
]



const plans = [
  "FaleMais 30",
  "FaleMais 60",
  "FaleMais 120",
]

function calculateNoPlan() {

}

function calculatePlan() {

}

// const dests = [
//   ["016", "017"],
//   ["011", "017"]
// ]

function App() {


  const [currentOrigin, setCurrentOrigin] = useState(0);
  const [currentDest, setCurrentDest] = useState(0);
  const [currentPlan, setCurrentPlan] = useState(0);
  const [duration, setDuration] = useState();
  

  return (

    <>
     
      {/* <header className="nav-header">
        <nav className="nav-items"></nav>
      </header> */}
      <div id="content">

         <section className="side-svg">
         
          <img className="" src={PeopleSvg} alt=""/>

         </section>

         <section className="side-form">
     
           <form action="">
              
           <select name="select" placeholder="Origem" onChange={e => setCurrentOrigin(e.target.selectedIndex)}
              className="form-select">
              {
                places.map((place) => {

                  return (
                    <option value="valor1">{place.origin}</option> 
                  )

                } )
              }
              
            
            </select>

            <select name="select" placeholder="Destino" className="form-select">
              {
                places[currentOrigin].destinations.map((dest) => (
                  <option value="valor1">{dest}</option>
                ))

              }
            </select>
            <select name="select" placeholder="Destino" className="form-select">
              {
                plans.map((plan) => (
                  <option value="valor1">{plan}</option>
                ))

              }
            </select>

             <input 
             type="number" 
             placeholder="Tempo de duração" 
             value={duration}
             onChange={e => setDuration(e.target.value)}
             className="form-input"/>
 
      
             <button href="#" className="btn-global">test</button>

           </form>
          
         </section>

      </div>
      

    </>
  );
}

export default App;
