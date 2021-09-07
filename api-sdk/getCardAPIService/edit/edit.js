// Lista com os campos do formulário que serão alterados
var ficha = new java.util.ArrayList();

// Objetos cardFieldVO
var campo1 = new com.fluig.sdk.api.cardindex.CardFieldVO();
var campo2 = new com.fluig.sdk.api.cardindex.CardFieldVO();

// Nome do responsável
campo1.setFieldId("responsavel")
campo1.setValue("João")

// Cargo do responsável
campo2.setFieldId("cargo")
campo2.setValue("Diretor")

// Adiciona os objetos cardFieldVO à lista
ficha.add(campo1)
ficha.add(campo2)

// Executa o serviço para alterar os campos do formulário 
var result = fluigAPI.getCardAPIService().edit(2808, ficha)

log.info("### Retorno do método edit");
log.dir(result);