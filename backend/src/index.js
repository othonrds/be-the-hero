const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso ( q a gente quer buscar)
 */

/**
 * Métodos HTTP
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * (Query) Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, Paginação)
  *     ex: /users?name=Othon
  *         /users?page=2&idade=25
  * 
  * Route (Params): Parâmetros utilizados para identifcar recursos (unico recurso)
  *     ex: /users/:id
  * 
  * Request (Body): Corpo da requisição, utilizado para cirar ou alterar recursos
  */



  /**
   * SQL: MySQL , [SQlite], PostgreSQL, Oracle, Mircrosoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */


   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where() - KNEX.JS
    */


app.listen(3333);

