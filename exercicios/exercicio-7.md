## Respostas Automáticas
#### Por questões de agilidade no processo de atender os usuários, uma empresa está estudando utilizar um chatbot nos seus canais de atendimento. Para isso, quer testar respostas simples através das perguntas do usuário.

#### Os casos mais básicos para começar seriam esses:
```
Usuário: "Qual é o horário de funcionamento?"
Chatbot: "Nosso horário de funcionamento é de segunda a sexta, das 9h às 18h."
```
```
Usuário: "Como faço para entrar em contato?"
Chatbot: "Você pode entrar em contato conosco pelo telefone (XX) XXXX-XXXX ou pelo e-mail contato@empresa.com."
```
```
Usuário: "Onde fica a loja física?"
Chatbot: "Nossa loja física está localizada na Rua Principal, número 123, na cidade X."
```
#### Caso o usuário não digite nenhuma das alternativas acima, o sistema deverá responder: "Desculpe, não entendi sua pergunta. Pode tentar novamente?"

#### Para resolver esse problema, crie uma função chamada respostasAoUsuário que deve:
- Receber uma string contendo a pergunta do usuário.
- Retornar a resposta adequada de acordo com o esquema mostrado acima (string).
- Utilize a estrutura switch no seu desenvolvimento.

#### Exemplo de entrada:
```
const pergunta = "Qual é o horário de funcionamento?";
```

#### Exemplo de saída:
```
"Nosso horário de funcionamento é de segunda a sexta, das 9h às 18h."
```

