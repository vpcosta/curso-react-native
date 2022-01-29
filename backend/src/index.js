const express = require('express');
const cors = require('./cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(7777);

/*  ROTAS E RECURSOS
* Rota: enderço com o caminho completo que esta sendo acessado;
* Recurso: entidade ou tabela consultado no final da rota.
*/

/*  MÉTODOS HTTP
* Get: Buscar  informações no back-end;
* Post: Criar informações no back-end;
* Put: Alterar informações no back-end;
* Delete: Deletar informações no back-end.
*/

/*  TIPOS DE PARÊMETROS 
* Query: são parâmetros nomeados enviados na rota;
* Route: são parâmetros usados para identificar recursos;
* Request Body: Corpo da requisição, usado para criar ou alterar recursos.
*/