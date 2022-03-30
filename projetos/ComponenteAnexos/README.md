# Projeto com componente personalizado para upload de anexos no Fluig

Com essa solução o usuário será capaz de realizar o upload, download, visualizar e exluir de uma solicitação de forma simples no Fluig, sem que seja necessário acessar a aba de anexos, tudo será feito através de eventos de click em botões específicos para cada anexo, incluindo até mesmo as tabelas pai e filho.

![Animação](https://github.com/sergiomachadosilva/fluig-utils/blob/main/projetos/ComponenteAnexos/animacaoProjeto.gif)
![Print 01](https://github.com/sergiomachadosilva/fluig-utils/blob/main/projetos/ComponenteAnexos/print_01.png)

### Alguns comportamentos padrões:

- O botão de upload fica se alternando com o botão de excluir, assim só será possivel substituir o anexo se antes o usuário remover o anexo existente;
- O botão de download só aparece se o formulário estiver em modo ADD;
- Em modo de visualização o botão de upload/excluir é removido;
- Em modo de visualização o botão de visualizar anexo apenas ficará visível se houver anexo;
- Na tabela pai e filho ao remover uma linha e caso exista anexo, o mesmo também será removido;
- Para o campo Registro de Nascimento em dados da solicitação, se o campo com o nome do arquivo físico estiver preenchido e ele não existir na aba de anexos do Fluig. Será disparado um alerta pelo _beforeSendValidate_ ao tentar enviar a solicitação.
