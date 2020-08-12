# MinoraApp : Aplicativo exemplo

## Informações do curso
- **IFRN / CNAT / DIATINF / Grupo de software**
- **Curso**: FIC Angular
- **Professor**: Jorgiano
- **Aluno**: Minora
- **Período**: Agosto/2020

## Tarefas

### 01 Primeiro app
**Instruções**:
- [X] Criar projeto Angular base.
- [X] Adicionar `Bootstrap`
- [X] Criar página com 2 componentes diferentes
   - [X] Componente de mensagem de sucesso
      - _Sugestão de texto_: `Operação realizada com sucesso`.
   - [X] Componente de mensagem de alerta
      - _Sugestão de texto_: `Operação não pode ser completada`.
   - _OBS_: Para praticar tente fazer um componente mannualmente e outro usando o `CLI`
- [X] Coloca os dois componentes em `app.component.html`
- [X] Colocar estilos em cada componente.
   - _OBS_: Texto Amarelo/vermelho/verde. Borda, Ícone, etc.
- [X] Usar templates/estilos embutidos e externos.
- [X] Fique a vontade para criar mais componentes. 

### 02 Databinging
**Instruções**:
- [ ] Criar componente Angular em que a classe tenha um atributo chamado `nome`.
- [ ] Criar Input Field com two-way binding de  `nome`.
- [ ] Mostar o valor armazendo no atributo `nome` em um parágrafo usando string interpolation.
- [ ] Adicionar um botão que só pode estar habilitado se `nome` não for vazio.
- [ ] Ao clicar no botão, o atributo `nome` deve ser reiniciado, recebendo uma string vazia.
     - _Sugestão_: Mostrar mensagem informando que nome foi adicionar (com JS alert, por exemplo)
