function servicetask7(attempt, message) {
	try {

		var anexos = hAPI.listAttachments(); // Retorna a lista de anexos da solicitação
		var documento = hAPI.getCardValue("documentoDescricao")

		for (var i = 0; i < anexos.size(); i++) {
			var anexo = anexos.get(i);
			// Procura o documento pela descrição informada no campo "Descrição do documento" do formulário 
			if (anexo.getDocumentDescription() == documento) {
				atualizarDocumento(anexo)
			}
		}

	} catch (error) {
		log.error("Houve um erro na atividade de serviço servicetask7");
		throw error;
	}
}

// Objeto com o login e senha do usuário que irá executar o webservice
var Servico = {
	usuario: "sergio.machado",
	senha: "123456"
}


/**
 * Atualiza um documento
 * @param {object} anexo Parâmetro obrigatório, objeto DocumentDto
 * @author Sérgio Machado
 */
function atualizarDocumento(anexo) {
	try {

		/*
		 * É necessário cadastrar o serviço ECMDocumentService no ambiente fluig
		 * Codigo: ECMDocumentService
		 * Descrição: Webservice responsável por realizar operações referentes a documentos do fluig. Pode ser utilizado para criar, alterar, excluir e procurar documentos, entre outros recursos.
		 * URL: http://<SERVER>:<PORT>/webdesk/ECMDocumentService?wsdl
		 * */

		// Determina serviço que será utilizado
		var documentService = ServiceManager.getService('ECMDocumentService');
		// Inicializa serviço
		var documentServiceHelper = documentService.getBean();
		// Instancia classe do serviço                             
		var documentServiceService = documentServiceHelper.instantiate('com.totvs.technology.ecm.dm.ws.ECMDocumentServiceService');
		// Obtem porta de serviço para chamar métodos do serviço
		var documentServicePort = documentServiceService.getDocumentServicePort();
		// Instancia classe de array de DocumentDto
		var document = documentServiceHelper.instantiate('com.totvs.technology.ecm.dm.ws.DocumentDtoArray');
		// Instancia classe de array de anexos. Objetos que representa os anexos físicos
		var attachments = documentServiceHelper.instantiate('com.totvs.technology.ecm.dm.ws.AttachmentArray');
		// Instancia classe de representação física do anexo que compõem um documento
		var attachment = documentServiceHelper.instantiate('com.totvs.technology.ecm.dm.ws.Attachment');
		// Instancia classe de representação de segurança de um documento e suas propriedades
		var security = documentServiceHelper.instantiate('com.totvs.technology.ecm.dm.ws.DocumentSecurityConfigDtoArray');
		// Instancia classe de representação de aprovadores de um documento
		var approvers = documentServiceHelper.instantiate('com.totvs.technology.ecm.dm.ws.ApproverDtoArray');
		// Instancia classe que representa os documentos relacionados com o documento
		var relatedDocuments = documentServiceHelper.instantiate('com.totvs.technology.ecm.dm.ws.RelatedDocumentDtoArray');
		
		// Recupera as informações DocumentDto atuais do documento informando no formulário que vai ser atualizado
		var documentDto = getDocumentDto(Number(hAPI.getCardValue("documentoId")))
		var byteArray = documentoBase64(anexo) // base 64 do novo documento
		
		var descricaoAlteracao = hAPI.getCardValue("documentoAlteracao")

		documentDto.setVersionOption("2")  // Condição de versionamento do documento. 2 Será criado nova versão
		documentDto.setVersionDescription(descricaoAlteracao)
		
		//Arquivo físico
		attachment.setFileName(documentDto.getPhisicalFile());
		attachment.setFilecontent(byteArray);
		attachment.setPrincipal(true);
		attachment.setAttach(false);

		// Adiciona o arquivo físico no objeto DocumentDto
		attachments.getItem().add(attachment)
		// Adiciona o objeto DocumentDto ao objeto DocumentDtoArray
		document.getItem().add(documentDto)

		// Chama o método passando os parâmetros necessários e armazena seu retorno na variável
		var retorno = documentServicePort.updateDocument(Servico.usuario, Servico.senha, 1, document, attachments, security, approvers, relatedDocuments);
	
	} catch (error) {
		log.error("Houve um erro na sua função atualizarDocumento");
		throw error;
	}
}


/*
 * Função para retornar as informações DocumentDto pelo id de um documento
 * É necessário cadastrar o serviço ECMDocumentService no ambiente fluig
 * Codigo: ECMDocumentService
 * Descrição: Webservice responsável por realizar operações referentes a documentos do fluig. Pode ser utilizado para criar, alterar, excluir e procurar documentos, entre outros recursos.
 * URL: http://<SERVER>:<PORT>/webdesk/ECMDocumentService?wsdl
 * */
function getDocumentDto(id) {
	try {
		// Determina serviço que será utilizado
		var documentService = ServiceManager.getService('ECMDocumentService');
		// Inicializa serviço
		var documentServiceHelper = documentService.getBean();
		// Instancia classe do serviço                             
		var documentServiceService = documentServiceHelper.instantiate('com.totvs.technology.ecm.dm.ws.ECMDocumentServiceService');
		// Obtem porta de serviço para chamar métodos do serviço
		var documentServicePort = documentServiceService.getDocumentServicePort();
		
		// Chama o método passando os parâmetros necessários e armazena seu retorno na variável retorno
		var data = documentServicePort.getActiveDocument(Servico.usuario, Servico.senha, 1, id, getValue("WKUser"));

		return data.getItem().get(0)

	} catch (error) {
		log.error(error);
		throw error;
	}
}


/**
 * Retorna o base64 de um arquivo físico de um documento, caso o usuário tenha permissão para acessá-lo.
 * @param {object} documentDto Parâmetro obrigatório, objeto DocumentDto
 * @returns {String} Retorna o base64 do arquivo físico
 * @author Sérgio Machado
 */
function documentoBase64(documentDto) {
	try {
		// Determina serviço que será utilizado
		var documentService = ServiceManager.getService('ECMDocumentService');
		// Inicializa serviço
		var documentServiceHelper = documentService.getBean();
		// Instancia classe do serviço                             
		var documentServiceService = documentServiceHelper.instantiate('com.totvs.technology.ecm.dm.ws.ECMDocumentServiceService');
		// Obtem porta de serviço para chamar métodos do serviço
		var documentServicePort = documentServiceService.getDocumentServicePort();
		// Chama o método passando os parâmetros necessários e armazena seu retorno na variável retorno

		var companyId = documentDto.getCompanyId() // código da empresa
		var documentId = documentDto.getDocumentId() // número do documento
		var colleagueId = getValue("WKUser") // matrícula do usuário
		var documentoVersao = documentDto.getVersion() // número da versão do documento
		var nomeArquivo = documentDto.getPhisicalFile() // nome do arquivo físico

		var result = documentServicePort.getDocumentContent(Servico.usuario, Servico.senha, companyId, documentId, colleagueId, documentoVersao, nomeArquivo);

		return result

	} catch (error) {
		log.error("Houve um erro na sua função documentoBase64");
		throw error;
	}

}