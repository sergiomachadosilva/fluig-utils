function validateForm(form) {
	var modo = form.getFormMode();

	var msgErro = "";

	if (modo == "ADD") {
		if (campoVazio(form, "documentoId") || campoVazio(form, "documentoDescricao") || campoVazio(form, "documentoAlteracao")) {
			msgErro += "<li style='margin-bottom: 5px;'>Preencha todos os campos</li>";
		}
	}

	if (msgErro != "") {
		msgErro = "<ul style='padding-left: 17px;color: red;list-style: disc;'>" + msgErro + "</ul><br/>";
		exibirMensagem(form, "Favor informar os campos obrigatórios:<br/><br/>" + msgErro);
	}

}

function campoVazio(form, fieldname) {
	if ((form.getValue(fieldname) == null) || (form.getValue(fieldname) == undefined) || (form.getValue(fieldname).trim() == "")) {
		return true;
	}
	return false;
}

function exibirMensagem(form, mensagem) {
	var mobile = form.getMobile() != null && form.getMobile();

	if (mobile) {
		throw mensagem;
	} else {
		throw "<br/><strong>Atenção:</strong> " + mensagem;
	}
}
