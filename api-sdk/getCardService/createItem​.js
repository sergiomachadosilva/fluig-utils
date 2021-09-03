var cardItemVO = new com.fluig.sdk.api.workflow.CardItemVO()

// Metadados do formulário
cardItemVO.setParentDocumentId(2072)
cardItemVO.setDocumentDescription("Nome do meu documento")
cardItemVO.setVersion(1000)

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
ficha.add(campo1)
ficha.add(campo2)
ficha.add(campo3)

cardItemVO.setFormData(ficha)

// Chama o serviço e guarda o retorno na variável result
var result = fluigAPI.getCardService().createItem(cardItemVO)

log.info("### Retorno da variável result")
log.dir(result)