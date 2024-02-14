# Aplicativo de Teste A/B Vue.js

Este é um aplicativo simples desenvolvido em Vue.js que demonstra o uso do teste A/B para exibir diferentes versões de boas-vindas aos usuários.

## Funcionalidades

O aplicativo possui as seguintes funcionalidades:

- Exibição de uma mensagem de boas-vindas personalizada aos usuários.
- Utilização do teste A/B para testar duas variações diferentes de boas-vindas.
- As variações são controladas por uma distribuição de probabilidades definida pelo desenvolvedor.

## Tecnologias Utilizadas

- [Vue.js](https://vuejs.org/): Framework JavaScript progressivo para construção de interfaces de usuário.
- [Vue-a2b](https://github.com/nkoehring/vue-a2b): Biblioteca para realização de testes A/B em aplicações Vue.js.

## Instalação e Execução

Para executar o aplicativo localmente, siga estas etapas:

1. Clone este repositório para o seu ambiente local.
2. Certifique-se de ter o Node.js instalado em seu sistema.
3. Abra o terminal na pasta raiz do projeto.
4. Execute o comando `npm install` para instalar as dependências.
5. Após a instalação, execute o comando `npm run serve` para iniciar o servidor de desenvolvimento.
6. Acesse o aplicativo em seu navegador através do endereço `http://localhost:8080` (ou outro endereço indicado no terminal).

## Estrutura do Projeto

- `components/`: Pasta que contém os componentes Vue utilizados na aplicação.
- `assets/`: Pasta que armazena os recursos estáticos, como imagens e ícones.
- `App.vue`: Arquivo principal do aplicativo Vue.js.
- `README.md`: Este arquivo de documentação.

## Como Funciona

O aplicativo exibe uma mensagem de boas-vindas aos usuários. A mensagem exibida é controlada por um teste A/B, que determina qual variação será mostrada com base em uma distribuição de probabilidades definida pelo desenvolvedor.

O teste A/B é inicializado no script do Vue com a função `abtest()` do pacote `vue-a2b`. Este teste recebe um nome identificador e um objeto contendo as variações e suas respectivas probabilidades. No caso deste aplicativo, as variações são "general" e "support", cada uma com 50% de chance de serem exibidas.

Os componentes `TheWelcomeGeneral` e `TheWelcomeSupport` representam as diferentes variações de boas-vindas e são renderizados condicionalmente com base no resultado do teste A/B.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema, tiver alguma ideia para melhorar o aplicativo ou quiser adicionar novos recursos, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
