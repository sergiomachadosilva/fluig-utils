//input: 30/02/2020 output; false
//input: 31/11/2020 output; false
//input: 31/10/2020 output; true
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