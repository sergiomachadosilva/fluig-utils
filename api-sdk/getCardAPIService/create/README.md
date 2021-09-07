# Método create do serviço getCardAPIService

O método create cria um novo registro simples de formulário. Diferente do método createItem​ do serviço getCardService, este aqui não é possivel informar metadados para o formulário, apenas campos e valores.

## 01 Passo - Criando uma lista para armazenar os campos do formulário

```js
// Lista com os campos e valores do formulário
var ficha = new java.util.ArrayList();
```

## 02 Passo - Criando novas instâncias de CardFieldVO

```js
// Objetos cardFieldVO
var campo1 = new com.fluig.sdk.api.cardindex.CardFieldVO();
var campo2 = new com.fluig.sdk.api.cardindex.CardFieldVO();
var campo3 = new com.fluig.sdk.api.cardindex.CardFieldVO();
```

O objeto [CardFieldVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFieldVO.html) possui as propriedades fieldId : String e value : String.
Onde fieldId é o name do campo e value o valor do campo.

## 03 Passo - Setando valores para os objetos CardFieldVO

```js
// Setando os names e valores dos campos
campo1.setFieldId("anexo");
campo1.setValue("Meu anexo.pdf");

campo2.setFieldId("texto");
campo2.setValue("Meu nome é Sérgio Machado");

campo3.setFieldId("editor");
campo3.setValue("Texto de exemplo do editor");

// Adiciona os objetos cardFieldVO à lista
ficha.add(campo1);
ficha.add(campo2);
ficha.add(campo3);
```

### Atenção - Adicionando valores em tabelas pai e filho

Caso queria incluir campos em uma tabela pai e filho, inclua três underscore mais o índice da tabela pai e filho.

Suponhamos que os campos acima fossem de uma tabela pai e filho, e quiséssemos adicionar a primeira linha da tabela, ficaria igual ao exemplo abaixo.

```js
campo1.setFieldId("anexo___1");
campo1.setValue("Meu anexo.pdf");

campo2.setFieldId("texto___1");
campo2.setValue("Meu nome é Sérgio Machado");

campo3.setFieldId("editor___1");
campo3.setValue("Texto de exemplo do editor");
```

## 04 Passo - Executando o método

Vamos chamar o método create passando para ele o código do formulário e a lista com os objetos CardFieldVO.

```js
// Chama o serviço e guarda o retorno na variável result
var result = fluigAPI.getCardAPIService().create(2072, ficha);

log.info("### Retorno da variável result");
log.dir(result);
```

O retorno da variável result será um objeto [CardFindFieldVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFindFieldVO.html) com os registros do fomulário criado.

[Veja aqui o exemplo completo](create.js)
