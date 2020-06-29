

describe('App Main Page', () => {
    it('Should calculate correct value with origin 11 and destination 16', () => {
        cy.visit('localhost:3000');
        
        cy.get('select[name="origin"]').select('011') 
        cy.get('select[name="destination"]').select('016') 
        cy.get('select[name="plan"]').select('FaleMais 30') 
        cy.get('.form-input').type(20.00);
        cy.get('.btn-global').click()

        expect(cy.get('.result-info-txt > h1').eq(0).contains('38,00'))
        expect(cy.get('.result-info-txt > h1').eq(1).contains('0,00'))
    })

    it('Should calculate correct value with origin 11 and destination 17', () => {
        cy.visit('localhost:3000');
        
        cy.get('select[name="origin"]').select('011') 
        cy.get('select[name="destination"]').select('017') 
        cy.get('select[name="plan"]').select('FaleMais 60') 
        cy.get('.form-input').type(80.00);
        cy.get('.btn-global').click()

        expect(cy.get('.result-info-txt > h1').eq(0).contains('136,00'))
        expect(cy.get('.result-info-txt > h1').eq(1).contains('37,40'))
    })

    it('Should calculate correct value with origin 18 and destination 11', () => {
        cy.visit('localhost:3000');
        
        cy.get('select[name="origin"]').select('018') 
        cy.get('select[name="destination"]').select('011') 
        cy.get('select[name="plan"]').select('FaleMais 120') 
        cy.get('.form-input').type(200.00);
        cy.get('.btn-global').click()

        expect(cy.get('.result-info-txt > h1').eq(0).contains('380,00'))
        expect(cy.get('.result-info-txt > h1').eq(1).contains('167,20'))
    })


  })