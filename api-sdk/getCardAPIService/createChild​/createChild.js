try {
    // Lista com os campos e valores da tabela pai e filho
    var ficha = new java.util.ArrayList();

    // Objetos cardFieldVO
    var campo1 = new com.fluig.sdk.api.cardindex.CardFieldVO();
    var campo2 = new com.fluig.sdk.api.cardindex.CardFieldVO();
    var campo3 = new com.fluig.sdk.api.cardindex.CardFieldVO();
    var campo4 = new com.fluig.sdk.api.cardindex.CardFieldVO();

    // Nome do produto
    campo1.setFieldId("produtoNome")
    campo1.setValue("Teclado")

    // Valor do produto
    campo2.setFieldId("produtoValor")
    campo2.setValue("103.50")

    // Quantidade do produto
    campo3.setFieldId("produtoQuantidade")
    campo3.setValue("01")

    // Garantia do produto
    campo4.setFieldId("produtoGarantia")
    campo4.setValue("12 meses")

    // Adiciona os objetos cardFieldVO à lista
    ficha.add(campo1)
    ficha.add(campo2)
    ficha.add(campo3)
    ficha.add(campo4)

    // Executa o serviço para criar um novo registro na tabela pai e filho
    var result = fluigAPI.getCardAPIService().createChild(2808, ficha)

} catch (e) {
    log.error("Erro ao tentar criar os registros da tabela pai e filho do formulário");
    log.dir(e);
}