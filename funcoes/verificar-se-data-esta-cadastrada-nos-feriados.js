/**
 * Verifica se a data informada é um feriado
 * @param {String} dia Parâmetro obrigatório, dia do mês
 * @param {String} mes Parâmetro obrigatório, mês do ano, 01 para janeiro
 * @param {String} ano Parâmetro obrigatório, ano com 4 dígitos
 * @example 
 * consultarFeriado(25, 12, 2020) - Retorna true (natal)
 * @returns {boolean} Retorna true se a data exitir no cadastro de feriados
 * @author Sérgio Machado
 */
function consultarFeriado(dia, mes, ano) {
    var c0 = DatasetFactory.createConstraint("companyId", getValue("WKCompany"), getValue("WKCompany"), ConstraintType.MUST); // Código da Empresa
    var c1 = DatasetFactory.createConstraint("holidayYear", ano, ano, ConstraintType.SHOULD); // Ano
    var c2 = DatasetFactory.createConstraint("holidayYear", 0, 0, ConstraintType.SHOULD); // Ano Recorrente
    var c3 = DatasetFactory.createConstraint("holidayMonth", mes, mes, ConstraintType.MUST) // Mês
    var c4 = DatasetFactory.createConstraint("holidayDay", dia, dia, ConstraintType.MUST) // Dia

    var constraints = new Array(c0, c1, c2, c3, c4);
    var dataset = DatasetFactory.getDataset("holiday", null, constraints, null);

    if (dataset.getRowsCount() > 0) {
        return true;
    }
    return false
}