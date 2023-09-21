## Contagem de Produtos em Estoque
#### Um gerente de uma loja de eletrônicos precisa saber quantos produtos estão em estoque para fazer um balanço. Ele possui uma lista com informações sobre cada produto, incluindo o nome e a quantidade em estoque.

#### Segue a lista de produtos:
```
const produtos = [
  { nome: "Smartphone", quantidade: 10 },
  { nome: "Notebook", quantidade: 5 },
  { nome: "TV", quantidade: 15 },
  { nome: "Fones de ouvido", quantidade: 20 },
  { nome: "Tablet", quantidade: 8 },
];
```
#### Para resolver esse problema, crie uma função chamada contagemProdutosEstoque que deve:

#### Receber um array de objetos, onde cada objeto é composto pelos atributos nome e quantidade.
#### Retornar a quantidade total de produtos em estoque.

#### Exemplo de entrada:
```
const produtos = [
  { nome: "Smartphone", quantidade: 10 },
  { nome: "Notebook", quantidade: 5 },
  { nome: "TV", quantidade: 15 },
  { nome: "Fones de ouvido", quantidade: 20 },
  { nome: "Tablet", quantidade: 8 },
];

```
#### Exemplo de saída:
```
58
```