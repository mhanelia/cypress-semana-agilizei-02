/// <reference types="cypress" />

context('Compra', () => {
    it('Efetuar uma compra de produto', () => {
        cy.visit('/')

        let nomeProduto = 'Faded Short Sleeve T-shirts'

        cy.contains(nomeProduto).trigger('mouseover')

        cy.contains('Faded Short Sleeve T-shirts') //identifica qual elemento baseado no texto
          .parent() // navega até o elemento pai que é o h5
          .siblings('div.button-container') // identifica todos os irmãos do pai ou tios do elemento com a classe button-container 
          .children('a') // identifica todos os filhos com link
          .first() //e pega o primeito item (add to card)
          .click() 

        cy.get(".button-container a[href$='controller=order']").click()  
        
        cy.get(".cart_navigation a[href$='order&step=1']").click() 
        
        cy.get('#email').type('semana-agilizei@mail.com')
        cy.get('#passwd').type('12345')
        cy.get('button#SubmitLogin').click()

        // cy.get('[type=checkbox]#addressesAreEquals')

        
        cy.get('button[name=processAddress]').click()
        cy.get('[type=checkbox]#cgv').check()
        cy.get('button[name=processCarrier').click()
        cy.get('.bankwire').click()
        cy.get('.cart_navigation button[type=submit]')
          .find('span')
          .contains('I confirm my order')
          .click()

        cy.get('.cheque-indent  strong')
          .should('contain.text', 'Your order on My Store is complete')

    })
    
})