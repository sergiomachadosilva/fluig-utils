# Método remove do serviço getCardAPIService

Deleta um registro de formulário.

## Executando o método

| Parâmetro | Tipo    | Descrição                        | Obrigatório |
| --------- | ------- | -------------------------------- | ----------- |
| cardId    | Integer | Código de registro do formulário | Sim         |

```sh
remove(cardId)
```

```js
try {
  // Executa o serviço para deletar o registro do formulário
  var result = fluigAPI.getCardAPIService().remove(2814);

  log.info("### Retorno do método remove");
  log.dir(result);
} catch (e) {
  log.error("Erro ao tentar deletar o registro do formulário");
  log.dir(e);
}
```

**Retorno:** A variável result irá retornar um boolean true se a rotina for executada com sucesso.
