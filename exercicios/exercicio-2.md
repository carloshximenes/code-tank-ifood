## Obtendo o primeiro elemento de uma lista
#### Você está desenvolvendo um aplicativo de tarefas e precisa implementar a funcionalidade de exibir o nome da primeira tarefa em destaque. Para isso, você recebe um array de tarefas e precisa retornar o nome da primeira tarefa desse array.

#### Exemplo de entrada:
```
const tarefas = ["Estudar", "Fazer compras", "Limpar a casa", "Fazer exercícios"];
```

#### Exemplo de saída:
```
"Estudar"
```
#### Para resolver esse problema, crie uma função chamada obterPrimeiraTarefa que deve:
- Receber um array de strings onde cada string seja o nome de uma tarefa.
- Retornar uma string que seja referente ao nome da primeira tarefa da lista.
- Utilize a função shift() da API do JavaScript para isso.