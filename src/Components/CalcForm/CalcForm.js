import React from 'react'
import './calcform.css';

function CalcForm({calculateNoPlan, calculatePlan, handleChangeOrigin, handleChangeDest, handleChangePlan, handleChangeDuration, places, currentOrigin, plans, duration}) {

    return (
        <form onSubmit={(e) => {
            calculateNoPlan(e);
            calculatePlan(e);
          }}>
             
          <select placeholder="Origem" required onChange={e => handleChangeOrigin(e.target.selectedIndex)}
             className="form-select">
                
             {
               places.map((place) => {

                 return (
                   <option value="valor1">{place.origin}</option> 
                 )

               } )
             }
             
             <option value="" disabled selected hidden>Origem</option>
           </select>
           
           <select placeholder="Destino" required onChange={e => handleChangeDest(e.target.selectedIndex)} className="form-select">
              
             {
               places[currentOrigin].destinations.map((dest) => (
                 <option value="valor1">{dest}</option>
               ))

             }
             <option value="" disabled selected hidden>Destino</option>
           </select>
     
           <select  placeholder="Plano" required onChange={e => handleChangePlan(e.target.selectedIndex)} className="form-select">
           
             {
               plans.map((plan) => (
                 <option value="valor1">{plan}</option>
               ))

             }
             <option value="" disabled selected hidden>Plano</option>
           </select>

            <input 
            type="number" 
            placeholder="Tempo de duração" 
            value={duration}
            onChange={e => handleChangeDuration(e.target.value)}
            required
            className="form-input"/>

     
            <input type="submit" value="Calcular" className="btn-global" />

          </form>
    )


}

export default CalcForm;