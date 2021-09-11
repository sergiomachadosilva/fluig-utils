try {
    // Lista com os campos e valores da tabela pai e filho
    var ficha = new java.util.ArrayList();

    // Objetos cardFieldVO
    var campo1 = new com.fluig.sdk.api.cardindex.CardFieldVO();
    var campo2 = new com.fluig.sdk.api.cardindex.CardFieldVO();
    var campo3 = new com.fluig.sdk.api.cardindex.CardFieldVO();
    var campo4 = new com.fluig.sdk.api.cardindex.CardFieldVO();

    // Nome do produto
    campo1.setFieldId("produtoNome___2")
    campo1.setValue("Carregador")

    // Valor do produto
    campo2.setFieldId("produtoValor___2")
    campo2.setValue("99.90")

    // Quantidade do produto
    campo3.setFieldId("produtoQuantidade___2")
    campo3.setValue("10")

    // Garantia do produto
    campo4.setFieldId("produtoGarantia___2")
    campo4.setValue("24 meses")

    // Adiciona os objetos cardFieldVO à lista
    ficha.add(campo1)
    ficha.add(campo2)
    ficha.add(campo3)
    ficha.add(campo4)

    // Executa o serviço para alterar os registro na tabela pai e filho
    var result = fluigAPI.getCardAPIService().editChild(2812, 2, ficha)

} catch (e) {
    log.error("Erro ao tentar alterar os registros da tabela pai e filho do formulário");
    log.dir(e);
}