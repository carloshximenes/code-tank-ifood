## Organizar Tarefas
#### Você está desenvolvendo um aplicativo de gerenciamento de tarefas e precisa implementar a funcionalidade de organizar as tarefas em ordem de prioridade. Cada tarefa é representada por um objeto com os atributos nome e prioridade. A prioridade é um número inteiro que varia de 1 a 5, sendo 1 a mais alta prioridade e 5 a mais baixa prioridade.

#### Exemplo de entrada:
```
const tarefas = [
  { nome: "Estudar para a prova", prioridade: 3 },
  { nome: "Fazer compras", prioridade: 5 },
  { nome: "Preparar apresentação", prioridade: 2 },
  { nome: "Limpar a casa", prioridade: 4 },
  { nome: "Resolver pendências no trabalho", prioridade: 1 },
];
```

#### Exemplo de saída:
```
[
  { nome: "Resolver pendências no trabalho", prioridade: 1 },
  { nome: "Preparar apresentação", prioridade: 2 },
  { nome: "Estudar para a prova", prioridade: 3 },
  { nome: "Limpar a casa", prioridade: 4 },
  { nome: "Fazer compras", prioridade: 5 },
]
```
#### Para resolver esse problema, crie uma função chamada organizarTarefas que deve:
- Receber um array de objetos onde cada objeto seja composto pelos atributos nome e prioridade.
- Retornar esse array com as tarefas organizadas em ordem crescente de prioridade.