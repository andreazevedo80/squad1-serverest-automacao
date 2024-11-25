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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('typeNome', (nome) =>{
    cy.get('input[id="nome"]').type(nome);
})
Cypress.Commands.add('typeEmail', (email) =>{
    cy.get('input[id="email"]').type(email);
})
Cypress.Commands.add('typePassword', (senha) =>{
    cy.get('input[id="password"]').type(senha);
})
Cypress.Commands.add('clickCadastrar', () =>{
    cy.get('button[data-testid="cadastrar"]').click();
})
Cypress.Commands.add('clickEntrar', () =>{
    cy.get('button[data-testid="entrar"]').click();
})
Cypress.Commands.add('clickCadastrarProduto', () =>{
    cy.get('button[data-testid="cadastarProdutos"]').click();
})
Cypress.Commands.add('typePreco', (preco) =>{
    cy.get('input[id="price"]').type(preco);
})
Cypress.Commands.add('typeDescricao', (descricao) =>{
    cy.get('textarea[id="description"]').type(descricao);
})
Cypress.Commands.add('typeQuantidade', (quantidade) =>{
    cy.get('input[id="quantity"]').type(quantidade);
})