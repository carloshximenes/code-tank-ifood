## Capitalizando Dias de Folga
#### Um sistema recebe os dias da semana que os funcionários de uma padaria escolheram para folgar. Os funcionários não inserem os dias da semana com a primeira letra maiúscula, apenas para fins visuais, o dono da padaria gostaria de mostrar esses dias sempre com a primeira letra em maiúscula.

#### Segue o modelo das solicitações de folga:
```
const folgas = [
  "quinta-Feira",
  "Sexta-feira",
  "sábado",
  "Domingo",
  "segunda",
  "quarta",
  "Quarta-feira",
];
```
#### Para resolver esse problema, crie uma função chamada capitalizeFolgas que deve:

#### Receber um array de strings.
#### Retornar esse array com a primeira letra dos dias da semana em letra maiúscula.
#### Utilize a função map do JavaScript para isso.

#### Exemplo de entrada:
```
const folgas = [
  "quinta-Feira",
  "Sexta-feira",
  "sábado",
  "Domingo",
  "segunda",
  "quarta",
  "Quarta-feira",
];
```
#### Exemplo de saída:
```
[
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
  "Domingo",
  "Segunda",
  "Quarta",
  "Quarta-Feira",
]
```