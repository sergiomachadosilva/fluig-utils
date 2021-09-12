# Método findChildByCardIdAndRow do serviço getCardAPIService

O método findChildByCardIdAndRow retorna os registros de uma linha da tabela pai e filho do formulário.

## Executando o método

Vamos chamar o método findChildByCardIdAndRow passando para ele o código de registro do formulário, o índice da linha da tabela e os campos que desejamos retornar, caso queria que retorne todos os campos do índice da tabela, apenas passe a lista vazia como parâmetro.

| Parâmetro | Tipo                | Descrição                                    | Obrigatório |
| --------- | ------------------- | -------------------------------------------- | ----------- |
| cardId    | Integer             | Código de registro do formulário             | Sim         |
| row       | Integer             | Índice da linha da tabela que deseja deletar | Sim         |
| fields    | java.util.ArrayList | Lista com os campos que deja retornar        | Sim         |

```sh
findChildByCardIdAndRow(cardId, row, fields)
```

No exemplo abaixo setamos apenas dois campos que será retornado do índice da tabela pai e filho do formulário.

```js
// Lista de campos que será retornado
var campos = new java.util.ArrayList();
campos.add("produtoNome");
campos.add("produtoValor");

// Executa o serviço
var result = fluigAPI
  .getCardAPIService()
  .findChildByCardIdAndRow(2815, 2, campos);

log.info("### Retorno do método findChildByCardIdAndRow​");
log.dir(result);
```

**Retorno:** A variável result irá retornar os registros do índice da tabela do fomulário.

[Veja aqui o exemplo completo](findChildByCardIdAndRow.js)
