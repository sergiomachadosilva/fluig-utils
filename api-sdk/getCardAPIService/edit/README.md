# Método edit do serviço getCardAPIService

O método edit altera os valores dos campos de um registro de formulário.

Em meus testes eu percebi uma desvantagem, **caso seu registro de formulário tenha uma ou mais tabelas, elas serão todas limpas**. Já com os campos normais apenas serão alterados os campos informados, diferente do webservice que limpa todos os campos que você não informar.

## 01 Passo - Criando uma lista para armazenar os campos da tabela pai e filho

```js
// Lista com os campos do formulário que serão alterados
var ficha = new java.util.ArrayList();
```

## 02 Passo - Criando novas instâncias de CardFieldVO

```js
// Objetos cardFieldVO
var campo1 = new com.fluig.sdk.api.cardindex.CardFieldVO();
var campo2 = new com.fluig.sdk.api.cardindex.CardFieldVO();
```

O objeto [CardFieldVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFieldVO.html) possui as propriedades fieldId : String e value : String.
Onde fieldId é o name do campo e value o valor do campo.

## 03 Passo - Setando valores para os objetos CardFieldVO

```js
// Nome do responsável
campo1.setFieldId("responsavel");
campo1.setValue("João");

// Cargo do responsável
campo2.setFieldId("cargo");
campo2.setValue("Diretor");

// Adiciona os objetos cardFieldVO à lista
ficha.add(campo1);
ficha.add(campo2);
```

## 04 Passo - Executando o método

Vamos chamar o método edit passando para ele o código de registro do formulário e a lista com os objetos CardFieldVO.

```js
// Executa o serviço para alterar os campos do formulário
var result = fluigAPI.getCardAPIService().edit(2808, ficha);

log.info("### Retorno do método edit");
log.dir(result);
```

O retorno da variável result será um objeto [CardFindFieldVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFindFieldVO.html) com os registros do fomulário editado.

[Veja aqui o exemplo completo](edit.js)
