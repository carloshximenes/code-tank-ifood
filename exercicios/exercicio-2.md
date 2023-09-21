## Obtendo o primeiro elemento de um dropdown

#### Os componentes de seleção de texto são muito importantes para que o usuário final possa selecionar dados para uma pesquisa, por exemplo. Suponha que você esteja fornecendo uma lista de Imobiliárias para serem exibidas e que o usuário final possa selecionar uma e listar os imóveis disponíveis nela.

#### A lista é a seguinte:

```const imobiliarias = ["Arantes", "Terra Nova", "Ivan", "Seratto", "Azaleia"];```

Agora você precisa sempre trazer o nome da primeira imobiliária, para que ela fique selecionada por padrão no nosso dropdown.

Para resolver esse problema, crie uma função chamada retornarPrimeiraImobiliaria que deve:

Receber um array de strings, onde cada string representa o nome de uma imobiliária.
Retornar uma string que corresponda ao nome da primeira imobiliária da lista.
Utilize a função shift() da API do JavaScript para isso.

#### Exemplo de entrada:

```const imobiliarias = ["Arantes", "Terra Nova", "Ivan", "Seratto", "Azaleia"];```

#### Exemplo de saída:

```Primeira imobiliária: Arantes```