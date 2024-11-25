// Importar o Faker.js
import { faker } from '@faker-js/faker';

describe('Cenário: Verificar a funcionalidade do Login', () => {
    
    let nome;
    let email;
    let senha;

    before(() => {
       nome = faker.internet.username({firstName: 'Avanti'});
       email = faker.internet.email({firstName: 'Avanti', provider: 'squad01.avanti.dev'});
       senha = faker.internet.password({length: 10, memorable:true, pattern: /[A-Z][0-9]/, prefix: 'Avanti@'});
    
       cy.visit('/cadastrarusuarios');
       cy.typeNome(nome);
       cy.typeEmail(email);
       cy.typePassword(senha);
       cy.clickCadastrar();
       cy.wait(3000);
       cy.url().should('eq', `${Cypress.config('baseUrl')}/home`);
       cy.get('button[data-testid="logout"]').click();
    })
    beforeEach(() => {
       cy.wait(2000);
       cy.visit('/login');
       cy.wait(2000);
    })

    it('CT02-001 - Login com credenciais corretas', () => {

       //Dados de entrada & Passo a Passo
       cy.typeEmail(email);
       cy.typePassword(senha);
       cy.clickEntrar();

       //Resultado Esperado: O usuário deve logar e ser direcionado para Home Page
       cy.wait(4000);
       cy.url().should('eq', `${Cypress.config('baseUrl')}/home`);    
    });

    it('CT02-002 - Login com credenciais incorretas', () => {
       const senhainvalida = 'senhainvalida';

       //Dados de entrada & Passo a Passo
       cy.typeEmail(email);
       cy.typePassword(senhainvalida);
       cy.clickEntrar();

       //Resultado Esperado: O sistema deve exibir uma mensagem indicando “Email e/ou senha inválidos”
       cy.wait(3000);
       cy.get('.alert').contains('Email e/ou senha inválidos').should('be.visible');
    });

   it('CT02-004 - Login com campo de e-mail vazio', () => {

       //Dados de entrada & Passo a Passo
       cy.typePassword(senha);
       cy.clickEntrar();

       //Resultado Esperado: O sistema deve exibir mensagem indicando “Email é obrigatório”
       cy.wait(3000);
       cy.get('.alert').contains('Email é obrigatório').should('be.visible');  
    });

   it('CT02-005 - Login com campo de senha vazio', () => {

       //Dados de entrada & Passo a Passo
       cy.typeEmail(email);
       cy.clickEntrar();

       //Resultado Esperado: O sistema deve exibir mensagem indicando “Password é obrigatório”
       cy.wait(3000);
       cy.get('.alert').contains('Password é obrigatório').should('be.visible');   
    });

   it('CT02-006 - Login com e-mail inválido', () => {
       const emailInvalido = 'emailinvalido@emailinvalido.com.br';

       //Dados de entrada & Passo a Passo
       cy.typeEmail(emailInvalido);
       cy.typePassword(senha);
       cy.clickEntrar();

       //Resultado Esperado: O sistema deve exibir mensagem indicando “Email e/ou senha inválidos”
       cy.wait(3000);
       cy.get('.alert').contains('Email e/ou senha inválidos').should('be.visible');     
    });

});
