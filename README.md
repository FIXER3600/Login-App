# Projeto de Tela de Login e Redefinição de Senha

Este projeto consiste em duas telas desenvolvidas para uma aplicação web: uma **Tela de Login** e uma **Tela de Redefinição de Senha**. O design segue as especificações fornecidas, utilizando cores, fontes e ícones fornecidos no layout do Figma (https://www.figma.com/design/rV6DpvdAcAAgTqMTj1R6nr/Teste-de-conhecimentos?node-id=1-432&node-type=frame&t=7XU44cdFukgeeR2v-0).

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Layout do Projeto](#layout-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Executar](#como-executar)
- [Validações](#validações)
- [Imagens do Projeto](#imagens-do-projeto)

---

## Descrição do Projeto

O projeto consiste em:

1. **Tela de Login**:
   - Campos para inserção de email e senha.
   - Botão para submeter as credenciais.
   - Link "Esqueceu a senha?" para redirecionar o usuário à tela de redefinição de senha.

2. **Tela de Redefinição de Senha**:
   - Campos para inserção de nova senha e confirmação da nova senha.
   - Botão para salvar a nova senha.

## Layout do Projeto

O layout segue o design fornecido no [Figma](#). As cores, fontes e elementos visuais seguem exatamente as especificações:

- **Cores**:
  - Cinza: `#718096`
  - Azul: `#007AF5`
  - Preto: `#000000`
  - Branco: `#FFFFFF`

- **Fontes**:
  - Visby
  - Inter

## Funcionalidades

- Formulários responsivos e usáveis para desktop e mobile.
- Validações de formulários:
  - Verificação de campos obrigatórios.
  - Validação de formato de email.
  - Validação de correspondência entre as senhas (na tela de redefinição).
- Links funcionais de navegação entre a tela de login e a tela de redefinição de senha.

## Tecnologias Utilizadas

- **HTML5** para a estrutura básica do projeto.
- **CSS3** para a estilização e responsividade.
- **JavaScript** para validações e interatividade.
- **React (opcional)** ou **NextJS** como framework para gerenciamento de componentes e renderização (se implementado).
- **Chakra UI (opcional)** para a estilização de componentes de forma eficiente.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) com npm ou yarn (caso esteja usando React/Next.js)

## Instalação

Siga os passos abaixo para clonar o repositório e configurar o ambiente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/projeto-tela-login.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd projeto-tela-login
   ```

3. Se estiver usando React ou Next.js, instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

## Como Executar

Para rodar o projeto localmente:

### Caso seja um projeto React/Next.js:

1. Execute o servidor de desenvolvimento:
   ```bash
   npm start
   # ou
   yarn start
   ```

2. Acesse o projeto no navegador:
   ```
   http://localhost:3000
   ```

### Caso seja apenas HTML, CSS e JavaScript:

1. Abra o arquivo `index.html` no seu navegador preferido.

## Validações

As seguintes validações foram implementadas nos formulários:

### Tela de Login:
- **Email**: O campo de email deve conter um formato válido, como `exemplo@dominio.com`.
- **Senha**: O campo de senha deve ser preenchido (sem validação de complexidade nesse campo).

### Tela de Redefinição de Senha:
- **Nova senha**: Deve conter pelo menos 6 caracteres, com no mínimo uma letra, um número e um caractere especial.
- **Confirmar senha**: Deve coincidir com o campo de nova senha.

## Imagens do Projeto

### Tela de Login
![Tela de Login](path/to/login-screenshot.png)

### Tela de Redefinição de Senha
![Tela de Redefinição de Senha](path/to/reset-password-screenshot.png)

---

## Observações

- O projeto foi desenvolvido dentro do prazo de 1h30, priorizando a implementação de boas práticas de código e a fidelidade ao design.
- O back-end não foi implementado, mas os formulários estão preparados para integrações futuras.

---

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades. Para isso, siga os passos:

1. Faça um **fork** do projeto.
2. Crie uma nova branch: `git checkout -b feature/nova-feature`.
3. Faça o commit das suas alterações: `git commit -m 'Adiciona nova feature'`.
4. Envie para o repositório original: `git push origin feature/nova-feature`.
5. Abra um **Pull Request**.

---
