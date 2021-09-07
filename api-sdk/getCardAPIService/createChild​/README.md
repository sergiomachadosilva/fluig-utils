# Método createChild do serviço getCardAPIService

O método createChild cria um novo registro em uma tabela pai e filho do formulário. Sabemos que caso você queria fazer isso em um evento de workflow, poderá usar o hAPI.addCardChild. No entanto, as vezes é preciso adicionar esse registro em outro formulário que não faz parte da solicitação, nesse caso esse método é perfeito.

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

```js
// Nome do produto
campo1.setFieldId("produtoNome");
campo1.setValue("Teclado");

// Valor do produto
campo2.setFieldId("produtoValor");
campo2.setValue("103.50");

// Quantidade do produto
campo3.setFieldId("produtoQuantidade");
campo3.setValue("01");

// Garantia do produto
campo4.setFieldId("produtoGarantia");
campo4.setValue("12 meses");

// Adiciona os objetos cardFieldVO à lista
ficha.add(campo1);
ficha.add(campo2);
ficha.add(campo3);
ficha.add(campo4);
```

## 04 Passo - Executando o método

Vamos chamar o método createChild passando para ele o código de registro do formulário e a lista com os objetos CardFieldVO.

```js
// Executa o serviço para criar um novo registro na tabela pai e filho
var result = fluigAPI.getCardAPIService().createChild(2808, ficha);

log.info("### Retorno do método createChild");
log.dir(result);
```

O retorno da variável result será um objeto [CardChildrenVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardChildrenVO.html) com os registros da linha da tabela pai e filho.

[Veja aqui o exemplo completo](createChild.js)
