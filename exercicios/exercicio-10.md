## Frequência de Palavras em um Texto
#### Um analista de dados está trabalhando em um projeto de processamento de texto e precisa analisar a frequência de cada palavra em um determinado texto. 

#### Para resolver esse problema, crie uma função chamada frequenciaPalavras que deve:
- Receber uma string contendo um texto.
- Retornar um objeto onde as chaves são as palavras encontradas no texto e os valores são a frequência de cada palavra.
- A frequência de uma palavra é o número de vezes que ela aparece no texto.
- Considere que as palavras são separadas por espaços e que a contagem deve ser case-insensitive, ou seja, "casa" e "CASA" devem ser consideradas a mesma palavra.
- Utilize o método split para separar as palavras e o loop for...of para percorrer o array resultante.

#### Exemplo de entrada:
```
const texto = "O gato preto pulou o muro e o gato branco ficou parado";
```

#### Exemplo de saída:
```
{
    "o": 3,
    "gato": 2,
    "preto": 1,
    "pulou": 1,
    "muro": 1,
    "e": 1,
    "branco": 1,
    "ficou": 1,
    "parado": 1
}
```
#### Escreva sua solução em JavaScript utilizando o método split e o loop for...of.