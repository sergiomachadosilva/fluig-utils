function validateForm(form) {
	var ATIVIDADE = Number(getValue("WKNumState")) ? Number(getValue("WKNumState")) : INICIO;
	var PROXIMATIVIDADE = Number(getValue("WKNextState"))
	var MODE = form.getFormMode()
	var COMPLETETASK = (getValue("WKCompletTask") == "true");
	
	if (!COMPLETETASK || ATIVIDADE == PROXIMATIVIDADE ){
		return;
	}

	var msgErro = "";
	
	
	if(ATIVIDADE == INICIO){
		if (campoVazio(form, "fnRegistroNascimento")) {
			msgErro += "<li style='margin-bottom: 5px;'>Registro de Nascimento</li>";
		} 
		
		var totalDependentes = form.getChildrenIndexes("dependentes");
		for (var i = 0; i < totalDependentes.length; i++) {
			if(campoVazio(form, "dependenteNome___" + totalDependentes[i])){
				msgErro += "<li style='margin-bottom: 5px;'>Informe o campo Nome na linha " +(i+1) + " da tabela</li>";
			}
			if(campoVazio(form, "fnRegistroNascDep___" + totalDependentes[i])){
				msgErro += "<li style='margin-bottom: 5px;'>Informe o campo Registro de Nascimento na linha " +(i+1) + " da tabela</li>";
			}
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
