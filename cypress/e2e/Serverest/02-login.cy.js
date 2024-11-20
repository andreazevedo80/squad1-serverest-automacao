describe('Cenário: Verificar a funcionalidade do Login', () => {
    it('CT02-001 Login com credenciais corretas', () => {
        //Pré Condições
        cy.visit('https://front.serverest.dev/login');

       //Dados de entrada & Passo a Passo
        cy.get('input[id="email"]').type('avanti01@outlook.com');
       cy.get('input[id="password"]').type('Avanti@123');
       cy.get('button[id="cadastrar"]').click();

       //Resultado Esperado: O usuário deve logar e ser direcionado para Home Page
       cy.url().should('eq', 'https://front.serverest.dev/home');      
    });
 //   it('CT02-002 Login com credenciais incorretas', () => {
 //       //Pré Condições
 //       cy.visit('https://front.serverest.dev/login');

       //Dados de entrada & Passo a Passo
//       cy.get('input[id="email"]').type('avanti01@outlook.com');
//       cy.get('input[id="password"]').type('Avanti1234');
//       cy.get('button[data-testeid="cadastrar"]').click();

       //Resultado Esperado: O sistema deve exibir uma mensagem indicando “Email e/ou senha inválidos”
//       cy.url().should('eq', 'https://front.serverest.dev/home');      
//    });

//   it('CT02-004 Login com campo de e-mail vazio', () => {
 //       //Pré Condições
 //       cy.visit('https://front.serverest.dev/login');

       //Dados de entrada & Passo a Passo
//       cy.get('input[id="email"]').type('');
//       cy.get('input[id="password"]').type('Teste@123');
//       cy.get('button[data-testeid="cadastrar"]').click();

       //Resultado Esperado: O sistema deve exibir mensagem indicando “Email é obrigatório”
//       cy.url().should('eq', 'https://front.serverest.dev/home');      
//    });

//   it('CT02-005 Login com campo de senha vazio', () => {
 //       //Pré Condições
 //       cy.visit('https://front.serverest.dev/login');

       //Dados de entrada & Passo a Passo
//       cy.get('input[id="email"]').type('avanti01@outlook.com');
//       cy.get('input[id="password"]').type('');
//       cy.get('button[data-testeid="cadastrar"]').click();

       //Resultado Esperado: O sistema deve exibir mensagem indicando “Password é obrigatório”
//       cy.url().should('eq', 'https://front.serverest.dev/home');      
//    });

//   it('CT02-006 Login com e-mail inválido', () => {
 //       //Pré Condições
 //       cy.visit('https://front.serverest.dev/login');

       //Dados de entrada & Passo a Passo
//       cy.get('input[id="email"]').type('teste@lol.com.br');
//       cy.get('input[id="password"]').type('Avanti@123');
//       cy.get('button[data-testeid="cadastrar"]').click();

       //Resultado Esperado: O sistema deve exibir mensagem indicando “Email e/ou senha inválidos”
//       cy.url().should('eq', 'https://front.serverest.dev/home');      
//    });

});
