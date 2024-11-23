// Importar o Faker.js
import { faker } from '@faker-js/faker';
import cypressConfig from '../../../cypress.config';

describe('Cenário: Verificar a funcionalidade do Cadastro de Usuários', () => {
       beforeEach(() => {
       cy.visit('/cadastrarusuarios');
       })

    it('CT01-001 - Cadastro de usuários comum com informações válidas', () => {
       //Gerar dados aleatórios
       const nome = faker.internet.username({firstName: 'Avanti'});
       const email = faker.internet.email({firstName: 'Avanti', provider: 'squad01.avanti.dev'});
       const senha = faker.internet.password({length: 10, memorable:true, pattern: /[A-Z][0-9]/, prefix: 'Avanti@'});

       //Dados de entrada & Passo a Passo
       cy.typeNome(nome);
       //cy.get('input[id="nome"]').type(nome);
       cy.get('input[id="email"]').type(email);
       cy.get('input[id="password"]').type(senha);
       cy.get('button[data-testid="cadastrar"]').click();

       //Resultado Esperado: Usuário deve ser logado e direcionado para Home Page de usuário comum
       cy.wait(4000);
       cy.url().should('eq', `${Cypress.config('baseUrl')}/home`); 
    });

   it('CT01-002 - Cadastro de usuários sem preencher campos obrigatórios', () => {
 
       //Dados de entrada & Passo a Passo
       cy.get('button[data-testid="cadastrar"]').click();

       //Resultado Esperado: O sistema deve exibir mensagens separadas indicando que os campos “Nome”, “Email” e “Senha” são obrigatórios.
       cy.wait(3000);
       cy.get('.alert').contains('Nome é obrigatório').should('be.visible');
       cy.get('.alert').contains('Email é obrigatório').should('be.visible');
       cy.get('.alert').contains('Password é obrigatório').should('be.visible');
    });

   it('CT01-003 - Cadastro de usuário com e-mail inválido', () => {
       //Gerar dados aleatórios
       const nome = faker.internet.username({firstName: 'Avanti'});
       const emailInvalido = 'emailinvalido-outlook.com';
       const senha = faker.internet.password({length: 10, memorable:true, pattern: /[A-Z][0-9]/, prefix: 'Avanti@'});

       //Dados de entrada & Passo a Passo
       cy.get('input[id="nome"]').type(nome);
       cy.get('input[id="email"]').type(emailInvalido);
       cy.get('input[id="password"]').type(senha);
       cy.get('button[data-testid="cadastrar"]').click();

       //Resultado Esperado: O sistema deve exibir mensagem indicando “falta um @ no endereço de e-mail...”
       cy.wait(3000);
       cy.get('input[id="email"]')
        .then((input) => {
            const validationMessage = input[0].validationMessage;
            expect(validationMessage).to.include('Inclua um "@" no endereço de e-mail');
        }); 
    });

   it('CT01-004 - Cadastro de usuário com senha fraca', () => {
       //Gerar dados aleatórios
       const nome = faker.internet.username({firstName: 'Avanti'});
       const email = faker.internet.email({firstName: 'Avanti', provider: 'squad01.avanti.dev'});
       const senhaFraca = '123';

       //Dados de entrada & Passo a Passo
       cy.get('input[id="nome"]').type(nome);
       cy.get('input[id="email"]').type(email);
       cy.get('input[id="password"]').type(senhaFraca);
       cy.get('button[data-testid="cadastrar"]').click();

       //Resultado Esperado: O sistema deve destacar o campo “senha” com a mensagem “senha fraca”
       cy.get('.alert').contains('Senha Fraca').should('be.visible');  
    });

   it('CT01-005 - Cadastro de usuário como administrador', () => {
       //Gerar dados aleatórios
       const nome = faker.internet.username({firstName: 'Avanti'});
       const email = faker.internet.email({firstName: 'Avanti', provider: 'squad01.avanti.dev'});
       const senha = faker.internet.password({length: 10, memorable:true, pattern: /[A-Z][0-9]/, prefix: 'Avanti@'});

       //Dados de entrada & Passo a Passo
       cy.get('input[id="nome"]').type(nome);
       cy.get('input[id="email"]').type(email);
       cy.get('input[id="password"]').type(senha);
       cy.get('#administrador').check();
       cy.get('button[data-testid="cadastrar"]').click();

       //Resultado Esperado: Usuário deve ser logado e direcionado para Home Page de usuário Administrador
       cy.wait(3000);
       cy.url().should('eq', `${Cypress.config('baseUrl')}/admin/home`);
       cy.contains(nome).should('be.visible');
    });

   it('CT01-006 - Cadastro de usuário com e-mail já existente', () => {
       //Gerar dados aleatórios
       const nome = faker.internet.username({firstName: 'Avanti'});
       const emailDuplicado = faker.internet.email({firstName: 'Avanti', provider: 'squad01.avanti.dev'});
       const senha = faker.internet.password({length: 10, memorable:true, pattern: /[A-Z][0-9]/, prefix: 'Avanti@'});

       // Pré-requisito: Cadastro do usuário
       cy.get('input[id="nome"]').type(nome);
       cy.get('input[id="email"]').type(emailDuplicado);
       cy.get('input[id="password"]').type(senha);
       cy.get('button[data-testid="cadastrar"]').click();
       cy.wait(3000);
       cy.url().should('eq', `${Cypress.config('baseUrl')}/home`);
       cy.get('button[data-testid="logout"]').click();

       //Dados de entrada & Passo a Passo
       cy.wait(3000);
       cy.visit('/cadastrarusuarios');
       cy.get('input[id="nome"]').type(nome);
       cy.get('input[id="email"]').type(emailDuplicado);
       cy.get('input[id="password"]').type(senha);
       cy.get('button[data-testid="cadastrar"]').click();

       //Resultado Esperado: O sistema deve informar que “Este e-mail já está sendo usado”.
       cy.wait(3000);
       cy.get('.alert').contains('Este email já está sendo usado').should('be.visible');    
    });
});
