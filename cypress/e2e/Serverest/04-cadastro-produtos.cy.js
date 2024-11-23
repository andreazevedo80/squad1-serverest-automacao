// Importar o Faker.js
import { faker } from '@faker-js/faker';

describe('Cenário: Verificar a funcionalidade do Cadastro de Produtos', () => {
    let nome;
    let email;
    let senha;


    before(() => {
       nome = faker.internet.username({firstName: 'Avanti'});
       email = faker.internet.email({firstName: 'Avanti', provider: 'squad01.avanti.dev'});
       senha = faker.internet.password({length: 10, memorable:true, pattern: /[A-Z][0-9]/, prefix: 'Avanti@'});

       cy.visit('/cadastrarusuarios');
       cy.typeNome(nome);
       cy.get('input[id="email"]').type(email);
       cy.get('input[id="password"]').type(senha);
       cy.get('#administrador').check();
       cy.get('button[data-testid="cadastrar"]').click();
       cy.wait(3000);
       cy.url().should('eq', `${Cypress.config('baseUrl')}/admin/home`);
       cy.get('button[data-testid="logout"]').click();
    })

    beforeEach(() => {
       cy.wait(2000);
       cy.visit('/login');
       cy.wait(2000);
       cy.get('input[id="email"]').type(email);
       cy.get('input[id="password"]').type(senha);
       cy.get('button[data-testid="entrar"]').click();
       cy.wait(2000);
       cy.get('a[data-testid="cadastrar-produtos"]').click();
       cy.wait(1000);
    })
    

    it('CT04-001 - Cadastro de produto com informações válidas', () => {
       const nomeProduto = faker.commerce.productName();
       const preco = faker.commerce.price({min: 1, max: 10000, dec: 0 });
       const descricao = faker.commerce.productDescription();
       const quantidade = faker.number.binary({min: 1, max: 1000});

       //Dados de entrada & Passo a Passo
       cy.get('input[id="nome"]').type(nomeProduto);
       cy.get('input[id="price"]').type(preco);
       cy.get('textarea[id="description"]').type(descricao);
       cy.get('input[id="quantity"]').type(quantidade);
       cy.get('input[id="imagem"]').selectFile('cypress/fixtures/logo.jpg');
       cy.get('button[data-testid="cadastarProdutos"]').click();

       //Resultado Esperado
       cy.wait(3000);
       cy.url().should('eq', `${Cypress.config('baseUrl')}/admin/listarprodutos`);
       cy.wait(1000);
       cy.contains(nomeProduto).should('be.visible');
    });

   it('CT04-002 - Cadastro de produto sem preencher campos obrigatórios', () => {

       //Dados de entrada & Passo a Passo
       cy.get('button[data-testid="cadastarProdutos"]').click();

       //Resultado Esperado: O sistema deve apresentar as seguintes mensagens: “Nome é obrigatório”; “Preço é obrigatório”; “Descrição é obrigatório”; “Quantidade é obrigatório”.
       cy.wait(3000)  
       cy.get('.alert').contains('Nome é obrigatório').should('be.visible');
       cy.get('.alert').contains('Preco é obrigatório').should('be.visible'); 
       cy.get('.alert').contains('Descricao é obrigatório').should('be.visible'); 
       cy.get('.alert').contains('Quantidade é obrigatório').should('be.visible');
    });

   it('CT04-003 - Cadastro de produto com preço negativo', () => {

       const nomeProduto = faker.commerce.productName();
       const preco = ('-50');
       const descricao = faker.commerce.productDescription();
       const quantidade = faker.number.binary({min: 1, max: 1000});

       //Dados de entrada & Passo a Passo
       cy.get('input[id="nome"]').type(nomeProduto);
       cy.get('input[id="price"]').type(preco);
       cy.get('textarea[id="description"]').type(descricao);
       cy.get('input[id="quantity"]').type(quantidade);
       cy.get('button[data-testid="cadastarProdutos"]').click();

       //Resultado Esperado: O sistema deve apresentar a mensagem: “O preço deve ser um número positivo”
       cy.wait(3000);
       cy.get('.alert').contains('Preco deve ser um número positivo').should('be.visible');
       
    });

   it('CT04-004 - Cadastro de produto com quantidade negativa', () => {
       const nomeProduto = faker.commerce.productName();
       const preco = faker.commerce.price({min: 1, max: 10000, dec: 0 });
       const descricao = faker.commerce.productDescription();
       const quantidade = ('-50');

       //Dados de entrada & Passo a Passo
       cy.get('input[id="nome"]').type(nomeProduto);
       cy.get('input[id="price"]').type(preco);
       cy.get('textarea[id="description"]').type(descricao);
       cy.get('input[id="quantity"]').type(quantidade);
       cy.get('button[data-testid="cadastarProdutos"]').click();

       //Resultado Esperado: O sistema deve apresentar a seguinte mensagem: “Quantidade deve ser maior ou igual a 0”
       cy.wait(3000);
       cy.get('.alert').contains('Quantidade deve ser maior ou igual a 0').should('be.visible');
            
    });

   it('CT04-006 - Cadastro de produto com nome já existente', () => {
       const nomeProduto = faker.commerce.productName();
       const preco = faker.commerce.price({min: 1, max: 10000, dec: 0 });
       const descricao = faker.commerce.productDescription();
       const quantidade = faker.number.binary({min: 1, max: 1000});

       //// Pré-requisito: Cadastro Produto
       cy.get('input[id="nome"]').type(nomeProduto);
       cy.get('input[id="price"]').type(preco);
       cy.get('textarea[id="description"]').type(descricao);
       cy.get('input[id="quantity"]').type(quantidade);
       cy.get('button[data-testid="cadastarProdutos"]').click();
       cy.wait(3000);
       cy.url().should('eq', `${Cypress.config('baseUrl')}/admin/listarprodutos`);
       cy.wait(1000);
       cy.contains(nomeProduto).should('be.visible');
       cy.wait(1000);

       //Dados de entrada & Passo a Passo
       cy.get('a[data-testid="cadastrar-produtos"]').click();
       cy.wait(2000);
       cy.get('input[id="nome"]').type(nomeProduto);
       cy.get('input[id="price"]').type(preco);
       cy.get('textarea[id="description"]').type(descricao);
       cy.get('input[id="quantity"]').type(quantidade);
       cy.get('button[data-testid="cadastarProdutos"]').click();

       //Resultado Esperado: O sistema deve exibir um erro, informando que já existe um produto com esse nome.
       cy.wait(3000);
       cy.get('.alert').contains('Já existe produto com esse nome').should('be.visible');
                 
    });

});
