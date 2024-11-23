# Automação de Testes - Squad 01: Serverest

Este projeto de automação de testes foi desenvolvido como parte do **BootCamp de Quality Assurance - Turma 03**, promovido pelo **Atlântico Avanti**. O objetivo principal foi validar as funcionalidades da aplicação Serverest, aplicando técnicas e práticas de QA aprendidas durante o curso.

## Equipe
O projeto foi elaborado pela equipe **Squad 01 - Serverest**:
- **Alexandre Monteiro Pereira da Silva**
- **André Luiz Leitão de Azevedo**
- **Gabriel dos Passos Santos**
- **João Eduardo Rodrigues de Aguiar**
- **Lucas Honorato do Nascimento**
- **Yan Guimarães Martins**

### Professor
- **Francisco Gutemberg**

### Monitor
- **William Filho**

## Tecnologias e Abordagens Utilizadas
Utilizamos o Cypress como ferramenta de automação de testes (O Cypress foi escolhido como parte do aprendizado no curso).

### Funcionalidades Utilizadas
**1. before** e **beforeEach**:
- **before**: Usado para configurar pré-condições que se aplicam a todos os testes dentro de um cenário, como a criação de usuário de sistema.
- **beforeEach**: Configurado para ações repetitivas antes de cada caso de teste, como realizar o login e acessar páginas específicas.
- **Beneficio**: Reduziu duplicação de código e tornou os testes mais organizados.

**2. Uso do baseURL:**
- Configuramos o baseUrl no arquivo cypress.config.js para evitar repetição da URL base em cada comando cy.visit.
- **Benefício**: Facilita a manutenção do código, já que qualquer mudança no domínio ou caminho base pode ser ajustada em um único lugar.

**3. Reutilização de Código com commands.js**
- Criamos comandos personalizados no arquivo commands.js para ações frequentemente utilizadas.
- **Beneficios**:  Simplificou o código dos testes, tornando-o mais legível e reutilizável.

**4. Geração de dados dinâmicos com Fakes.js**
- Utilizamos a biblioteca Faker.js para gerar dados dinâmicos, como nomes, e-mails e senhas, evitando conflitos ao rodar os testes múltiplas vezes.
- **Benefícios**: Tornou os testes mais independentes.

---

## Pré-requisitos
- Node.js instalado
- Cypress instalado

---

## Como executar os testes

### 1. Clonar o repositório
```bash
git clone https://github.com/andreazevedo80/squad1-serverest-automacao.git
cd squad1-serverest-automacao
```

### 2. Instalar dependências
```bash
npm install @faker-js/faker
```

### 3. Abrir o Cypress

### 4. Selecionar os testes
No Cypress, navegue até o diretório e2e/everest e selecione os seguintes arquivos para execução:

- 01-cadastro-usuarios.cy.js
- 02-login.cy.js
- 04-cadastro-produto.cy.js

### 5. Executar os testes
Escolha o navegador desejado e clique para iniciar os testes.


