try {
    // Executa o serviço para deletar os registro da linha na tabela pai e filho
    var result = fluigAPI.getCardAPIService().removeChild(2812, 2);
} catch (e) {
    log.error("Erro ao tentar deletar os registros da linha 2 da tabela pai e filho do formulário");
    log.dir(e);
}