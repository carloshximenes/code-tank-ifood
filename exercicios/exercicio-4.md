## Remover Feedbacks Duplicados

#### Um consultor de marketing sugeriu que uma empresa coletasse feedbacks de seus usuários.
#### Após o fim da coleta eles perceberam que vários usuários reportaram as mesmas sugestões.
#### Segue o modelo coletado:

```
const feedbacks = [
  "Melhorar responsividade do site",
  "Erros confusos",
  "Os botões são intuitivos",
  "Erros confusos",
];
```

- Para resolver esse problema, crie uma função chamada removerFeedbacksDuplicados que deve:

1. Receber um array de string.
2. Retornar esse array sem valores duplicados. 