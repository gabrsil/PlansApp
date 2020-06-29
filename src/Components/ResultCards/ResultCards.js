import React from 'react';
import './resultcards.css'


function ResultCards ({priceWithoutPlan, priceWPlan}) {



    return (
            <section className="result-info">

              <article className="result-card">
                
                <h1>Sem o Plano</h1>
                <section className="result-info-txt">
            
                  <h1>{
                     priceWithoutPlan === 0 ? Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(0) :  
                   priceWithoutPlan ? Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(priceWithoutPlan)  : '...'
                  }
                </h1>
                    
                  

                </section>
              </article>

              <article className="result-card">
              <h1>Com o Plano</h1>
                <section className="result-info-txt">
                <h1>
                  { priceWPlan === 0 ? Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(0) :  
                   priceWPlan ? Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(priceWPlan)  : '...'}
                
                </h1>
                </section>
                </article>

         </section>
    )

}

export default ResultCards;