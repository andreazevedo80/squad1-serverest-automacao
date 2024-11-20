describe('Cenário: Verificar a funcionalidade do Cadastro de Produtos', () => {
    it('CT04-001 Cadastro de produto com informações válidas', () => {
        //Pré Condições
        cy.visit('(https://front.serverest.dev/admin/cadastrarprodutos)');

       //Dados de entrada & Passo a Passo
//       cy.get('input[id="nome"]').type('Produto Teste 1');
//      cy.get('input[id="preco"]').type('1510');
//       cy.get('input[id="descricao"]').type('Descrição do Produto 1');
//       cy.get('input[id="quantidade"]').type('100');
//       cy.get('input[id="imagem"]').type('logo.jpg');
//       cy.get('button[data-testeid="cadastrar"]').click();

       //Resultado Esperado
//       cy.url().should('eq', 'https://front.serverest.dev/home');      
    });
//   it('CT04-002 Cadastro de produto sem preencher campos obrigatórios', () => {
         //Pré Condições
//       cy.visit('https://front.serverest.dev/admin/cadastrarprodutos');

       //Dados de entrada & Passo a Passo
//       cy.get('input[id="nome"]').type('');
//       cy.get('input[id="preco"]').type('');
//       cy.get('input[id="descricao"]').type('');
//       cy.get('input[id="quantidade"]').type('100');
//       cy.get('button[data-testeid="cadastrar"]').click();

       //Resultado Esperado: O sistema deve apresentar as seguintes mensagens: “Nome é obrigatório”; “Preço é obrigatório”; “Descrição é obrigatório”; “Quantidade é obrigatório”.
//       cy.url().should('eq', 'https://front.serverest.dev/home');      
//    });

//   it('CT04-003 Cadastro de produto com preço negativo', () => {
 //       //Pré Condições
 //       cy.visit('https://front.serverest.dev/admin/cadastrarprodutos');

       //Dados de entrada & Passo a Passo
//       cy.get('input[id="nome"]').type('Produto Teste');
//       cy.get('input[id="preco"]').type('-50');
//       cy.get('input[id="descricao"]').type('Descrição do Produto Teste');
//       cy.get('input[id="quantidade"]').type('100');
//       cy.get('button[data-testeid="cadastrar"]').click();

       //Resultado Esperado: O sistema deve apresentar a mensagem: “O preço deve ser número positivo”
//       cy.url().should('eq', 'https://front.serverest.dev/home');      
//    });

//   it('CT04-004 Cadastro de produto com quantidade negativa', () => {
 //       //Pré Condições
 //       cy.visit('https://front.serverest.dev/admin/cadastrarprodutos');

       //Dados de entrada & Passo a Passo
//       cy.get('input[id="nome"]').type('Produto Teste');
//       cy.get('input[id="preco"]').type('50');
//       cy.get('input[id="descricao"]').type('Descrição do Produto Teste');
//       cy.get('input[id="quantidade"]').type('-10');
//       cy.get('button[data-testeid="cadastrar"]').click();

       //Resultado Esperado: O sistema deve apresentar a seguinte mensagem: “A quantidade deve ser maior ou igual a 0”
//       cy.url().should('eq', 'https://front.serverest.dev/home');      
//    });

//   it('CT04-006 Cadastro de produto com nome já existente', () => {
 //       //Pré Condições
 //       cy.visit('https://front.serverest.dev/admin/cadastrarprodutos');

       //Dados de entrada & Passo a Passo
//       cy.get('input[id="nome"]').type('Produto Teste');
//       cy.get('input[id="preco"]').type('50');
//       cy.get('input[id="descricao"]').type('Descrição do Produto Teste');
//       cy.get('input[id="quantidade"]').type('10');
//       cy.get('button[data-testeid="cadastrar"]').click();

       //Resultado Esperado: O sistema deve exibir um erro, informando que já existe um produto com esse nome.
//       cy.url().should('eq', 'https://front.serverest.dev/home');      
//    });

});
