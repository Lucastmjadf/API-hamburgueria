# API-hamburgueria
 O projeto é um gerenciador de pedidos de maneira eficiente por meio de uma API RESTful.
 
API-hamburgueria
Este é o projeto [Nome do Projeto], uma API RESTful para gerenciamento de pedidos.

Instalação
Para instalar as dependências do projeto, execute o seguinte comando:

npm install
Utilização
Para executar a aplicação, execute o seguinte comando:

npm start
A API estará disponível em http://localhost:3000. As rotas disponíveis são:

GET /order: lista todos os pedidos já feitos.

PUT /order/:id: altera um pedido existente.

DELETE /order/:id: deleta um pedido específico.

GET /order/:id: retorna um pedido específico.

PATCH /order/:id: altera o status de um pedido recebido pelo id para "Pronto".
