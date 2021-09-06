// Lista com os campos e valores do formulário
var ficha = new java.util.ArrayList();

// Objetos cardFieldVO
var campo1 = new com.fluig.sdk.api.cardindex.CardFieldVO();
var campo2 = new com.fluig.sdk.api.cardindex.CardFieldVO();
var campo3 = new com.fluig.sdk.api.cardindex.CardFieldVO();

// Setando os names e valores dos campos
campo1.setFieldId("anexo")
campo1.setValue("Meu anexo.pdf")

campo2.setFieldId("texto")
campo2.setValue("Meu nome é Sérgio Machado")

campo3.setFieldId("editor")
campo3.setValue("Texto de exemplo do editor")

// Adiciona os objetos cardFieldVO à lista
ficha.add(campo1)
ficha.add(campo2)
ficha.add(campo3)


// Chama o serviço e guarda o retorno na variável result
var result = fluigAPI.getCardAPIService().create(2072, ficha)

log.info("### Retorno da variável result");
log.dir(result);