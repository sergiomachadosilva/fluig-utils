/**
 * Função para validar data
 * @param {String} dateStr Parâmetro obrigatório, data no formato dd/MM/yyyy
 * @example
 * validarData("30/02/2020") - Retorna false
 * @example
 * validarData("31/10/2020") - Retorna true
 * @returns {boolean} Retorna true se a data for válida
 * @author Sérgio Machado
 */
function validarData(dateStr) {
    var s = dateStr.split('/');
    var d = new Date(+s[2], s[1] - 1, +s[0]);
    if (Object.prototype.toString.call(d) === "[object Date]") {
        if (!isNaN(d.getTime()) && d.getDate() == s[0] && d.getMonth() == (s[1] - 1)) {
            return true;
        }
    }
    return false;
}