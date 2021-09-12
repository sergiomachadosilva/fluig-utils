try {
    // Lista de campos que será retornado
    var campos = new java.util.ArrayList();
    campos.add("produtoNome");
    campos.add("produtoValor");

    // Executa o serviço
    var result = fluigAPI.getCardAPIService().findChildByCardIdAndRow(2815, 2, campos);

    log.info("### Retorno do método findChildByCardIdAndRow​");
    log.dir(result);

} catch (e) {
    log.error("Erro ao executar o serviço findChildByCardIdAndRow");
    log.dir(e);
}


// ########## EXEMPLOS RETORNANDO TODOS OS CAMPOS da LINHA DA TABELA ##########

try {
    // Lista de campos que será retornado
    var campos = new java.util.ArrayList();

    // Executa o serviço
    var result = fluigAPI.getCardAPIService().findChildByCardIdAndRow(2815, 2, campos);

    log.info("### Retorno do método findChildByCardIdAndRow​");
    log.dir(result);

} catch (e) {
    log.error("Erro ao executar o serviço findChildByCardIdAndRow");
    log.dir(e);
}