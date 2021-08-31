<style>
    table {
        width: 100%;
    }
</style>

# Método createItem​ do serviço getCardService

Criação de um novo registro de formulário.

## Métodos construtor

```js
var cardItemVO = new com.fluig.sdk.api.workflow.CardItemVO();
```

Se você quiser saber o que tem dentro dessa variável cardItemVO, coloque ela para sair no log e execute algum script que rode no lado do servidor.

```js
log.info("### saída do método contrutor cardItemVO");
log.dir(cardItemVO);
```

Sua saída será um objeto igual a este mostrado logo abaixo:

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

```

Para setar valores ou obter valores, use get ou set, para saber mais detalhes acesse esse [link da documentação](https://fluig.totvs.com/api/sdk/com/fluig/sdk/api/workflow/CardItemVO.html).

Em meus testes observei que a maioria dos metadados são opcionais, mas esses três primeiros da tabela abaixo são obrigatórios.

| Método                 | Tipo                      | Descrição                      | Obrigatório |
| ---------------------- | ------------------------- | ------------------------------ | ----------- |
| setParentDocumentId    | Integer                   | Id do formulário               | Sim         |
| setVersion             | Integer                   | Versão do documento            | Sim         |
| setFormData            | List<Map<String,​String>> | Campos e valores do formulário | Sim         |
| setDocumentDescription | String                    | Descrição do documento         | Não         |

[Veja aqui um exemplo completo de utilização](createItem​.js)
