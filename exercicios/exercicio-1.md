## Quantidade de Alunos Aprovados

Ao final do curso de JavaScript, os alunos devem receber suas notas e saber se foram aprovados ou não. Antes de publicar as notas, o professor deseja saber quantos alunos passaram.
Você recebeu uma lista com os dados dos alunos, onde cada aluno é representado por um objeto com os atributos nome e nota. A nota é um número inteiro que varia de 0 a 100.
Para ser aprovado, o aluno deve ter uma nota maior ou igual a 70.

#### Exemplo de entrada:

```
const alunos = [
  { nome: "João", nota: 80 },
  { nome: "Maria", nota: 65 },
  { nome: "Pedro", nota: 90 },
  { nome: "Ana", nota: 75 },
  { nome: "Carlos", nota: 60 },
];
```
#### Exemplo de saída:
```
Quantidade de alunos aprovados: 3
```

- Para resolver esse problema, crie uma função chamada quantidadeAprovados que deve:

1. Receber um array de objetos onde cada objeto seja composto pelos atributos nome e nota.
2. Retornar a quantidade de alunos aprovados.