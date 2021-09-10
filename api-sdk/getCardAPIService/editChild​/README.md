# Método editChild do serviço getCardAPIService

O método editChild altera os registros de uma tabela pai e filho do formulário.

## 01 Passo - Criando uma lista para armazenar os campos da tabela pai e filho

```js
// Lista com os campos e valores da tabela pai e filho
var ficha = new java.util.ArrayList();
```

## 02 Passo - Criando novas instâncias de CardFieldVO

```js
// Objetos cardFieldVO
var campo1 = new com.fluig.sdk.api.cardindex.CardFieldVO();
var campo2 = new com.fluig.sdk.api.cardindex.CardFieldVO();
var campo3 = new com.fluig.sdk.api.cardindex.CardFieldVO();
var campo4 = new com.fluig.sdk.api.cardindex.CardFieldVO();
```

O objeto [CardFieldVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFieldVO.html) possui as propriedades fieldId : String e value : String.
Onde fieldId é o name do campo e value o valor do campo.

## 03 Passo - Setando valores para os objetos CardFieldVO

**Observação:** Note que ao final do name dos campos foi adicionado três underscore e o índice da linha da tabela que deseja alterar, em nosso iremos alterar os registros da linha 2.

```js
// Nome do produto
campo1.setFieldId("produtoNome___2");
campo1.setValue("Carregador");

// Valor do produto
campo2.setFieldId("produtoValor___2");
campo2.setValue("99.90");

// Quantidade do produto
campo3.setFieldId("produtoQuantidade___2");
campo3.setValue("10");

// Garantia do produto
campo4.setFieldId("produtoGarantia___2");
campo4.setValue("24 meses");

// Adiciona os objetos cardFieldVO à lista
ficha.add(campo1);
ficha.add(campo2);
ficha.add(campo3);
ficha.add(campo4);
```

## 04 Passo - Executando o método

Vamos chamar o método editChild​ passando para ele o código de registro do formulário, o índice da linha da tabela e a lista com os objetos CardFieldVO.

| Parâmetro    | Tipo                | Descrição                                                                           | Obrigatório |
| ------------ | ------------------- | ----------------------------------------------------------------------------------- | ----------- |
| cardId       | Integer             | Código de registro do formulário                                                    | Sim         |
| row          | Integer             | Índice da linha da tabela que deseja editar                                         | Sim         |
| cardFieldVOS | java.util.ArrayList | Lista de objetos CardFieldVO que possui os campos : fieldId : String value : String | Sim         |

```sh
editChild(cardId, row, cardFieldVOS)
```

```js
// Executa o serviço para alterar os registro na tabela pai e filho
var result = fluigAPI.getCardAPIService().editChild(2812, 2, ficha);

log.info("### Retorno do método editChild");
log.dir(result);
```

O retorno da variável result será um objeto [CardChildrenVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardChildrenVO.html) com os registros da linha da tabela pai e filho que foi editada.

[Veja aqui o exemplo completo](editChild​.js)
