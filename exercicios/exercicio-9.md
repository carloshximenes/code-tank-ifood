## Calcular Média de Vendas
#### Você está desenvolvendo um sistema para calcular a média de vendas de uma equipe de vendedores. 

#### Para resolver esse problema, crie uma função chamada calcularMediaVendas que deve:
- Receber um array de objetos onde cada objeto representa um vendedor e contém os atributos nome e vendas.
- O atributo vendas é um array que contém as vendas realizadas pelo vendedor em cada mês.
- Retornar um novo array onde cada objeto tenha apenas os atributos nome e mediaVendas.
- O atributo mediaVendas deve ser a média das vendas realizadas pelo vendedor.
- Utilize o loop for...in no seu desenvolvimento.

#### Exemplo de entrada:
```
const vendedores = [ 
    {
      "nome": "João",
      "vendas": [5000, 6000, 7000]
    },
    {
      "nome": "Maria",
      "vendas": [8000, 9000, 10000]
    }        
];
```

#### Exemplo de saída:
```
[
    {
      "nome": "João",
      "mediaVendas": 6000
    },
    {
      "nome": "Maria",
      "mediaVendas": 9000
    }        
]
```
#### Escreva sua solução em JavaScript utilizando o loop for...in.