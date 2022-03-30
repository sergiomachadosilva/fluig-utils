function enableFields(form){
	var ATIVIDADE = Number(getValue("WKNumState")) ? Number(getValue("WKNumState")) : INICIO;
	var MODE = form.getFormMode()
	
	form.setEnabled("solicitanteCode", false);
	form.setEnabled("solicitanteNome", false);
	form.setEnabled("solicitanteEmail", false);
	form.setEnabled("fdRegistroNascimento", false);
	form.setEnabled("fnRegistroNascimento", false);
	form.setEnabled("fdCpf", false);
	form.setEnabled("fnCpf", false);
		
	form.setEnabled("aprovadorCode", false);
	form.setEnabled("aprovadorNome", false);
	form.setEnabled("aprovadorEmail", false);
	form.setEnabled("fdFoto", false);
	form.setEnabled("fnFoto", false);
	form.setEnabled("fdComprovante", false);
	form.setEnabled("fnComprovante", false);
	
	if(ATIVIDADE != INICIO){
		var totalDependentes = form.getChildrenIndexes("dependentes");
		for (var i = 0; i < totalDependentes.length; i++) {
			form.setEnabled("dependenteCodigo___" + totalDependentes[i], false);
			form.setEnabled("dependenteNome___" + totalDependentes[i], false);
			form.setEnabled("fdRegistroNascDep___" + totalDependentes[i], false);
			form.setEnabled("fnRegistroNascDep___" + totalDependentes[i], false);
		}
	}
		
}