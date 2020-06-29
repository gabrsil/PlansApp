import React from 'react'
import { shallow, mount } from '../../enzyme-config';
import ResultCards from '../ResultCards/ResultCards'


const formatCurrencyBr = (number) => Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(number);


describe('<ResultCards />', () => {
    it('must show the Result Value on left card', () => {
    
      const priceWithoutPlan = 35.90;
      const priceWPlan = 25.30;
      
      // eslint-disable-next-line react/react-in-jsx-scope
      const wrapper = mount(<ResultCards priceWithoutPlan ={priceWithoutPlan} priceWPlan = {priceWPlan} />);

      expect(wrapper
        .find('.result-info-txt')
        .find('h1')
        .at(0)
        .text())
        .toEqual(formatCurrencyBr(priceWithoutPlan));
        
    });
 

    it('must show the Result Value on right card', () => {
    
        const priceWithoutPlan = 35.90;
        const priceWPlan = 25.30;
        
        // eslint-disable-next-line react/react-in-jsx-scope
        const wrapper = mount(<ResultCards priceWithoutPlan ={priceWithoutPlan} priceWPlan = {priceWPlan} />);
     
        expect(wrapper
            .find('.result-info-txt')
            .find('h1')
            .at(1)
            .text())
            .toEqual(formatCurrencyBr(priceWPlan));
          
      });

}) 