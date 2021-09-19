/**
 * Verifica se a data informada é um feriado
 * @param {String} data Parâmetro obrigatório, data no formato dd/MM/yyyy
 * @example 
 * consultarFeriado("25/12/2021") - Retorna "Natal"
 * @returns {String} Nome do feriado caso ele exista
 * @returns {boolean} false caso o feriado não exista
 * @author Sérgio Machado
 */

function consultarFeriado(data) {
    var parseDate = new java.text.SimpleDateFormat("dd/MM/yyyy").parse(data).getTime();
    var newDate = new Date(parseDate)

    var c0 = DatasetFactory.createConstraint("companyId", getValue("WKCompany"), getValue("WKCompany"), ConstraintType.MUST); // Código da Empresa
    var c1 = DatasetFactory.createConstraint("holidayYear", newDate.getFullYear(), newDate.getFullYear(), ConstraintType.SHOULD); // Ano
    var c2 = DatasetFactory.createConstraint("holidayYear", 0, 0, ConstraintType.SHOULD); // Ano Recorrente
    var c3 = DatasetFactory.createConstraint("holidayMonth", (newDate.getMonth() + 1), (newDate.getMonth() + 1), ConstraintType.MUST) // Mês
    var c4 = DatasetFactory.createConstraint("holidayDay", newDate.getDate(), newDate.getDate(), ConstraintType.MUST) // Dia

    var constraints = new Array(c0, c1, c2, c3, c4);
    var dataset = DatasetFactory.getDataset("holiday", null, constraints, null);

    if (dataset.getRowsCount() > 0) {
        return dataset.getValue(0, "holidayCalendarId");
    }
    return false
}