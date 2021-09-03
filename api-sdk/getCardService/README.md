# Método createItem​ do serviço getCardService

Criação de um novo registro de formulário.

## 01 Passo - Criando nova instância de CardItemVO

Para criarmos uma nova instância, utilizamos o método construtor CardItemVO().

```js
var cardItemVO = new com.fluig.sdk.api.workflow.CardItemVO();
```

Se você quiser saber o que tem dentro dessa variável cardItemVO, imprima no log em algum script que rode no lado do servidor, como por exemplo, scripts de workflow, eventos de formulários ou um dataset.

```js
log.info("### Retorno do método construtor cardItemVO");
log.dir(cardItemVO);
```

Sua saída será um objeto igual a este mostrado abaixo:

```js
{
	"documentId" : 0,
	"documentDescription" : null,
	"parentDocumentId" : null,
	"privateDocument" : null,
	"tenantId" : null,
	"version" : null,
	"metaListId" : null,
	"inheritSecurity" : false,
	"permissionType" : null,
	"restrictionType" : null,
	"userNotify" : null,
	"colleagueId" : null,
	"additionalComments" : null,
	"keyWord" : null,
	"versionDescription" : null,
	"versionOption" : null,
	"expires" : false,
	"topicId" : null,
	"iconId" : null,
	"imutable" : false,
	"languageId" : null,
	"internalVisualizer" : null,
	"downloadEnabled" : null,
	"updateIsoProperties" : false,
	"documentTypeId" : null,
	"notificationDays" : null,
	"validationStartDate" : null,
	"expirationDate" : null,
	"documentType" : null,
	"permissions" : null,
	"restrictions" : null,
	"publisherApprovers" : null,
	"relatedDocuments" : null,
	"formData" : null,
	"attachments" : null
}
```

## 02 Passo - Setando valores para os metadados do formulário

Para setar ou obter valores use os métodos acessores e modificadores do Java get e set.

Você pode visualizar a lista completa, acessando este [link da documentação](https://fluig.totvs.com/api/sdk/com/fluig/sdk/api/workflow/CardItemVO.html).

Em meus testes observei que a maioria dos metadados são opcionais, mas esses três primeiros da tabela abaixo são obrigatórios.

| Método                 | Tipo                      | Descrição                      | Obrigatório |
| ---------------------- | ------------------------- | ------------------------------ | ----------- |
| setParentDocumentId    | Integer                   | Id do formulário               | Sim         |
| setVersion             | Integer                   | Versão do documento            | Sim         |
| setFormData            | List<Map<String,​String>> | Campos e valores do formulário | Sim         |
| setDocumentDescription | String                    | Descrição do documento         | Não         |

Para este exemplo o id do formulário é 2072 e a versão sempre inicando com 1000.

```js
// Metadados do formulário
cardItemVO.setParentDocumentId(2072);
cardItemVO.setDocumentDescription("Nome do meu documento");
cardItemVO.setVersion(1000);
```

## 03 Passo - Inserindo os campos do formulário

Agora iremos setar o formData que recebe um array de objetos, onde a proprieade **name** é o nome do campo e **value** o valor do campo.

```js
// Lista com os campos e valores do formulário
var ficha = new java.util.ArrayList();

var campo1 = new java.util.HashMap();
campo1.put("name", "anexo");
campo1.put("value", "Meu anexo.pdf");

var campo2 = new java.util.HashMap();
campo2.put("name", "texto");
campo2.put("value", "Meu nome é Sérgio Machado");

var campo3 = new java.util.HashMap();
campo3.put("name", "editor");
campo3.put("value", "Texto de exemplo para o campo editor");

// Adiciona os campos na lista
ficha.add(campo1);
ficha.add(campo2);
ficha.add(campo3);

cardItemVO.setFormData(ficha);
```

## 04 Passo - Executando o método

```js
// Chama o serviço e guarda o retorno na variável result
var result = fluigAPI.getCardService().createItem(cardItemVO);

log.info("### Retorno da variável result");
log.dir(result);
```

[Veja aqui o exemplo completo](createItem​.js)
