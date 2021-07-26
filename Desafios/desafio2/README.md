
# Sobre o Projeto

Esse site teve como base sites geradores de página automática para produtos.
Dessa forma, não é necessário um banco de dados direto, apenas um arquivo JSON com as principais informações de cada produto.

É possível visualizar o site final [http://ecommercecoders.netlify.app](Aqui)


# Observação inicial

Para obter o código em sua máquina, não esqueça de ir até o diretório raiz e rodar:

``
npm install
``js

## Produtos
Para criar mais produtos e relacionar com as categorias, basta inserir tais dados em src/data/products.json

## Funcionalidades

### Adicionando produtos ao Carrinho
Ao clicar nos botões de `add` você poderá adicionar tais produtos no seu carrinho. Guardando no localStorage

### Removendo todo o Carrinho
Em `Produtos` é possível visualizar a quantidade de produtos no seu carrinho. Ao clicar, o botão apaga seus produtos no `Localstorage` e no contador.

### Adicionando Email
Ao adicionar um e-mail e clicar em enviar, o endereço é armazenado no localStorage.

## Scripts Mais Importantes
Existem outros scripts disponíveis para testes e verificações. Tais, são padronizados e podem ser obtidos na documentação oficial do React (especificamente na parte de Create-React-App)

### `yarn start`

Inicia o projeto no modo de desenvolvimento.\
Abra em [http://localhost:3000](http://localhost:3000) para visualizar no Browser.

### `yarn build`

"Builda" o app para produção. Esse comando fora utilizado para o deploy na rede Netlify.
Ao utilizar esse comando, o app estará disponível na pasta `build`.
