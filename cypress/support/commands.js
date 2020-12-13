// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => { 
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0o0pOXCsQWjQJbMeC6hHwQjdorOTjFAXNc8MX%2BWMbAJFTkUarMc6koJATBWo7HhK80ZSLq7RD3uzQies0e74IHx2UC7JXGc53zrL%2BL1pkl6234C%2Fib0h75LOx240L49Gc9NTGwoKoQiYqe5JeN%2BCWcA6FK%2BPkHnbu1U0Bb%2FXn8AtqY3bzy6uv1g9jWuIL5NA2S%2FGV522BpdCB4fr8Vk%2B%2BRTOU4gw0xkq0AxqEYm9nB22lrIETLtFa3dumW0qQJ4ymAOVCC0KBlgY%2BSLHNWUVGRz04la7vJcTLNivLe0085bjrEA1%2BGsV1Vj40LyrYK9%2BZFgc9CPNjqob%2FNcF69q9xXAn8Uvg8%2BoxcRNoAk8%2FLrWLTkC82%2BBV5exxVN6MA%2Bpp2R37RWDjOmeBvpEE7zMKeWHZzr42O%2BY2OJG1TyI4qGvlaCxrkP9q43aQM28wzu5AzaerJUOVjwT9wvxTNpvE7hQ%3D000355'
      )
})