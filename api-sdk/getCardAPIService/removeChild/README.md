# Método removeChild do serviço getCardAPIService

O método removeChild deleta os registros de uma linha da tabela pai e filho do formulário.

## Executando o método

Vamos chamar o método removeChild passando para ele o código de registro do formulário e o índice da linha da tabela que desejamos deletar.

| Parâmetro | Tipo    | Descrição                                    | Obrigatório |
| --------- | ------- | -------------------------------------------- | ----------- |
| cardId    | Integer | Código de registro do formulário             | Sim         |
| row       | Integer | Índice da linha da tabela que deseja deletar | Sim         |

```sh
removeChild(cardId, row)
```

```js
// Executa o serviço para deletar os registro da linha na tabela pai e filho
var result = fluigAPI.getCardAPIService().removeChild(2812, 2);
```

[Veja aqui o exemplo completo](removeChild.js)
