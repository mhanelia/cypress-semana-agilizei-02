/// <reference types="cypress" />

context('Compra', () => {
    it('Efetuar uma compra de produto', () => {
        cy.backgroundLogin()

        cy.visit('/')

        let nomeProduto = 'Faded Short Sleeve T-shirts'

        cy.contains(nomeProduto).trigger('mouseover')

        cy.contains('Faded Short Sleeve T-shirts') //identifica qual elemento baseado no texto
          .parent() // navega até o elemento pai que é o h5
          .siblings('div.button-container') // identifica todos os irmãos do pai ou tios do elemento com a classe button-container 
          .children('a') // identifica todos os filhos com link
          .first() //e pega o primeito item (add to card)
          .click() 

        cy.get('.icon-ok')
          .parent() //h2
          .should('contain.text', 'Product successfully added to your shopping cart')

        cy.get('span#layer_cart_product_title').should('contain.text', nomeProduto)
        
        cy.get(".button-container a[href$='controller=order']").click()  
        
        cy.get(".cart_navigation a[href$='order&step=1']").click() 
        
        // cy.get('#email').type('semana-agilizei@mail.com')
        // cy.get('#passwd').type('12345')
        // cy.get('button#SubmitLogin').click()

        //validando se o endereço de entrega é igual ao da cobrança
        // asserção | atributo | valor  
        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'checked', 'checked')

        
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

        cy.get('div.box').invoke('text').then((text) =>{
          console.log(text)

          // escrita de um arquivo json com o conteudo do pedido
          // caminho do arquivo (sempre a partir da pasta raiz) | conteúdo do arquivo

          cy.writeFile('cypress/fixtures/pedido.json', { id: `${text.match(/[A-Z][A-Z]+/g)[1]}`})

          cy.get(".cart_navigation a[href$='history'").click()
          
          //leitura de um arquivo

          cy.readFile('cypress/fixtures/pedido.json').then((pedido) => {

            cy.get('tr.first_item .history_link a').should('contain.text', pedido.id)
             
          })

          


        })

    })
    
})