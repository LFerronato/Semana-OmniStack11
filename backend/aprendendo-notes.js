/*
 * depois da barra: Recursos ex: /user estou usando o recurso usuários
 * Rota / Recurso
 */
/*
 * --Métodos HTTP
 * GET: Busca Informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Atualiza uma informação no back-end
 * DELETE: Deleta uma informação no back-end
 */
/*
 * --Tipos de parâmetros
 * Query Params: Paramentros nomeados enviados na rota após '?' (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, MS SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * (usaremos SQLite*knex >> knexjs.org)
 */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table(user).name("Lucas")
 */
/**
 * ENTIDADES DO BANCO DE DADOS
 * -- ONG
 * -- incident(casos)
 * 
 * FUNCIONALIDADES
 * -- Login de ONG
 * -- Cadastro de ONG
 * -- Logout de ONG
 * -- Cadastrar casos (incidents)
 * -- Deletar casos (incidents)
 * -- Listar casos específicos de uma ONG
 * -- Listar todos os casos
 * -- Entrar em contato com a ONG
 */
/**
 * para criar : npx knex migrate:latest
 * para deletar: npx knex migrate:rollback
 */