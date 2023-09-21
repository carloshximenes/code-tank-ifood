## Clientes com Saldo Devedor
#### A funcionária de um banco percebeu que muitos clientes estão com seus empréstimos atrasados. Para alertá-los e solicitar o pagamento, ela precisa da lista com os nomes desses clientes e, em seguida, enviar para o setor financeiro disparar os e-mails de cobrança. A lista atual é a seguinte:
```
const clientes = [ 
    { nome: 'David', comSaldoDevedor: true},
    { nome: 'Vinoth', comSaldoDevedor: true},
    { nome: 'Divya', comSaldoDevedor: false},
    { nome: 'Ishitha', comSaldoDevedor: false},
    { nome: 'Thomas', comSaldoDevedor: true}
];
```
#### Para resolver esse problema, crie uma função chamada clientesComSaldoDevedor que deve:
- Receber um array de objetos, onde cada objeto é composto pelos atributos nome e comSaldoDevedor.
- Retornar um array contendo somente os clientes com saldo devedor.

#### Exemplo de entrada:
```
const clientes = [ 
    { nome: 'David', comSaldoDevedor: true},
    { nome: 'Vinoth', comSaldoDevedor: true},
    { nome: 'Divya', comSaldoDevedor: false},
    { nome: 'Ishitha', comSaldoDevedor: false},
    { nome: 'Thomas', comSaldoDevedor: true}
];
```

#### Exemplo de saída:
```
[
    { nome: 'David', comSaldoDevedor: true},
    { nome: 'Vinoth', comSaldoDevedor: true},
    { nome: 'Thomas', comSaldoDevedor: true}
]
```
#### Escreva sua solução em JavaScript utilizando a estrutura while.