# Projeto de Desenvolvimento Web: Front-end e Back-end Integrados 🚀

Este repositório contém uma aplicação web desenvolvida para demonstrar a aplicação prática dos conceitos aprendidos em **desenvolvimento Front-end** e **Back-end**. O projeto foi realizado em **duas etapas**, cada uma com foco em uma parte específica do desenvolvimento web, culminando na integração completa entre as duas camadas.  

## Etapa 1: Desenvolvimento do Front-end  
Nesta etapa, foi criada uma **landing page** funcional e estilizada utilizando as seguintes tecnologias:  
- **HTML**: Para a estrutura da página.  
- **CSS**: Para estilização e design responsivo.  
- **JavaScript**: Para interatividade e validações.  

### Funcionalidades do Front-end:  
- **Cabeçalho** com título e subtítulo estilizados.  
- **Formulário interativo** com os campos:  
  - Nome (texto).  
  - E-mail (campo de e-mail).  
  - Mensagem (texto longo).  
  - Botão de envio com confirmação de sucesso.  
- **Imagens ilustrativas** para enriquecimento visual.  
- **Tabela** com descrição dos tipos de consultoria oferecidos (3 linhas e 2 colunas).  
- Estilizações personalizadas, incluindo:  
  - Cabeçalho com cores e tamanhos ajustados.  
  - Fundo colorido ou com imagem de background.  
  - Campos do formulário estilizados (bordas, alinhamento, cores).  
- Mensagem de confirmação ao enviar o formulário (implementada com JavaScript).  

### Arquivos do Front-end:  
- `index.html`: Estrutura principal da página.  
- `styles.css`: Estilos aplicados à página.  
- `script.js`: Funções de interatividade e validação.  

## Etapa 2: Desenvolvimento do Back-end  
Nesta etapa, o projeto foi expandido para incluir uma **API básica** utilizando **Node.js** e **Express** para integração com o Front-end.  

### Funcionalidades do Back-end:  
- Configuração de um servidor para:  
  - Servir os arquivos estáticos do Front-end (copiados para a pasta `public`).  
  - Criar um **endpoint `/api/formulario`** para receber os dados enviados pelo formulário.  
- Integração do formulário com o Back-end usando a **API Fetch** para enviar os dados via método **POST**.  
- Testes realizados com **Postman** para verificar o funcionamento do endpoint.  
- Exibição dos dados enviados no console do servidor.  

### Arquivos do Back-end:  
- `server.js`: Configuração do servidor Express e dos endpoints.  
- **Dependências utilizadas**:  
  - `express`  
  - `cors`  

## Estrutura do Repositório  
```plaintext
/
├── consultoria-back-end/
│   ├── public/
│   │   ├── index.html
│   │   ├── styles.css
│   │   ├── script.js
│   ├── server.js
│   ├── package.json

