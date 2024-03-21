const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const _ = require('lodash');

const server = jsonServer.create();
const port = 3000;

let endpoints = [];
let obj = {};
let files = fs.readdirSync(path.resolve(__dirname, './db/'));

console.log('\nLoading JSON Files...');

files.forEach(file => {
  if (file.indexOf('.json') > -1) {
    let jsonObject = JSON.parse(fs.readFileSync('./db/' + file));

    if (isJson(fs.readFileSync('./db/' + file))) {
      Object.keys(jsonObject).forEach(function(idx) {
        endpoints.push(idx);
      });

      console.log('✔ JSON file loaded: ' + file);
      _.extend(obj, require(path.resolve(__dirname, './db/', file)));
    }
  }
});

const objOrdered = {};
Object.keys(obj)
  .sort()
  .forEach(function(key) {
    objOrdered[key] = obj[key];
  });

const router = jsonServer.router(objOrdered);
const middlewares = jsonServer.defaults();

server.use(
  jsonServer.rewriter({
    /* Boletins Ocorrências - Históricos */
    '/cadastros/ocorrencias/historicos/listAllByIdOcorrencia*': '/historicos/$1',
    '/cadastros/ocorrencias/historicos*': '/historicos/$1',
  }),
);

server.use(middlewares);
server.use(bodyParser.json());
server.use(router);

server.listen(port, () => {
  console.log('\nJSON Server is running at http://localhost:' + port);
  endpoints.sort();
  for (let i = 0; i < endpoints.length; i++) {
    console.info('✔ Endpoint: http://localhost:' + port + '/' + endpoints[i]);
  }
});

function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
