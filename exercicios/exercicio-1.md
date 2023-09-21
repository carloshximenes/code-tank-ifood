## Produtos em Estoque
#### Uma loja de eletrônicos precisa saber quantos produtos diferentes possui em estoque. Você recebeu uma lista com os dados dos produtos, onde cada produto é representado por um objeto com os atributos nome e quantidade. A quantidade é um número inteiro que representa a quantidade de unidades disponíveis em estoque para cada produto.

#### Exemplo de entrada:
```
const produtos = [
  { nome: "Celular", quantidade: 10 },
  { nome: "Notebook", quantidade: 5 },
  { nome: "TV", quantidade: 3 },
  { nome: "Fone de Ouvido", quantidade: 20 },
  { nome: "Câmera", quantidade: 8 },
];
```

#### Exemplo de saída:
```
Quantidade de produtos em estoque: 5
```
#### Para resolver esse problema, crie uma função chamada quantidadeProdutosEstoque que deve:

- Receber um array de objetos onde cada objeto seja composto pelos atributos nome e quantidade.
- Retornar a quantidade de produtos diferentes em estoque.