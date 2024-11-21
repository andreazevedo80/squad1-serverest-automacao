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
    
       cy.visit('https://front.serverest.dev/cadastrarusuarios');
       cy.get('input[id="nome"]').type(nome);
       cy.get('input[id="email"]').type(email);
       cy.get('input[id="password"]').type(senha);
       cy.get('button[data-testid="cadastrar"]').click();
       cy.wait(3000);
       cy.url().should('eq', 'https://front.serverest.dev/home');
       cy.get('button[data-testid="logout"]').click();
    })
    beforeEach(() => {
       cy.wait(2000);
       cy.visit('https://front.serverest.dev/login');
       cy.wait(2000);
    })

    it('CT02-001 Login com credenciais corretas', () => {

       //Dados de entrada & Passo a Passo
       cy.get('input[id="email"]').type(email);
       cy.get('input[id="password"]').type(senha);
       cy.get('button[data-testid="entrar"]').click();

       //Resultado Esperado: O usuário deve logar e ser direcionado para Home Page
       cy.wait(4000);
       cy.url().should('eq', 'https://front.serverest.dev/home');    
    });

    it('CT02-002 Login com credenciais incorretas', () => {
       const senhainvalida = 'senhainvalida';

       //Dados de entrada & Passo a Passo
       cy.get('input[id="email"]').type(email);
       cy.get('input[id="password"]').type(senhainvalida);
       cy.get('button[data-testid="entrar"]').click();

       //Resultado Esperado: O sistema deve exibir uma mensagem indicando “Email e/ou senha inválidos”
       cy.wait(3000);
       cy.get('.alert').contains('Email e/ou senha inválidos').should('be.visible');
    });

   it('CT02-004 Login com campo de e-mail vazio', () => {

       //Dados de entrada & Passo a Passo
       cy.get('input[id="password"]').type(senha);
       cy.get('button[data-testid="entrar"]').click();

       //Resultado Esperado: O sistema deve exibir mensagem indicando “Email é obrigatório”
       cy.wait(3000);
       cy.get('.alert').contains('Email é obrigatório').should('be.visible');  
    });

   it('CT02-005 Login com campo de senha vazio', () => {

       //Dados de entrada & Passo a Passo
       cy.get('input[id="email"]').type(email);
       cy.get('button[data-testid="entrar"]').click();

       //Resultado Esperado: O sistema deve exibir mensagem indicando “Password é obrigatório”
       cy.wait(3000);
       cy.get('.alert').contains('Password é obrigatório').should('be.visible');   
    });

   it('CT02-006 Login com e-mail inválido', () => {
       const emailInvalido = 'emailinvalido@emailinvalido.com.br';

       //Dados de entrada & Passo a Passo
       cy.get('input[id="email"]').type(emailInvalido);
       cy.get('input[id="password"]').type(senha);
       cy.get('button[data-testid="entrar"]').click();

       //Resultado Esperado: O sistema deve exibir mensagem indicando “Email e/ou senha inválidos”
       cy.wait(3000);
       cy.get('.alert').contains('Email e/ou senha inválidos').should('be.visible');     
    });

});
