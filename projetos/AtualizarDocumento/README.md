# Atualizar documento através do webservice ECMDocumentService

Este projeto simples tem como objetivo demonstrar como podemos utilizar os métodos **getActiveDocument**, **getDocumentContent** e **updateDocument** do serviço ECMDocumentService para atualizarmos um documento existente no GED.

Bastante útil caso você tenha um processo de elaboração de documentos, onde precisa atualizar este documento incremetando sua versão, para caso queira restaurar para uma versão anterior posteriormente.

#### É necessário cadastrar o serviço ECMDocumentService no ambiente fluig

**Codigo:** ECMDocumentService

**Descrição:** Webservice responsável por realizar operações referentes a documentos do fluig. Pode ser utilizado para criar, alterar, excluir e procurar documentos, entre outros recursos.

**URL:** http://SERVER:PORT/webdesk/ECMDocumentService?wsdl

## Formulário

![Formulário](https://github.com/sergiomachadosilva/fluig-utils/blob/main/projetos/AtualizarDocumento/formulario.png)

## Diagrama

![Diagrama](https://github.com/sergiomachadosilva/fluig-utils/blob/main/projetos/AtualizarDocumento/diagrama.png)
