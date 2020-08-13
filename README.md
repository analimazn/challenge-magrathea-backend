## Back-end - Challenge Magrathea Labs

```
Nodejs
node: v12.18.1
npm: 6.14.5
```

API para demonstrar Meetups localizados na região de Joinville.

1. [Instalação](#installation)
2. [Criando as tabelas no DB](#init-db)
3. [Inserindo dados no DB](#run-seeds)
4. [Reinicializando o DB](#run-seeds)
5. [Inicializando a aplicação](#run-app)
6. [Estrutura do Projeto](#concept-of-structure)
    1. [Sobre Logos](#logos-folder)
    2. [Sobre Public](#public-folder)
    3. [Sobre Controllers](#controllers-folder)
    4. [Sobre DB](#db-folder)
    5. [Sobre Models](#models-folder)
    6. [Sobre Services](#services-folder)
    7. [Sobre Utils](#utils-folder)
7. [Dependências do projeto](#dependencies)
8. [Dependências de desenvolvimento](#dev-dependencies)


## Instalação

Para instalar as dependências utilize as linhas de comando do [`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
npm install
```

Crie o arquivo `.env` de acordo com o arquivo `.env.example`.

Para esse projeto foi utilizado o banco de dados relacional [PostgreSQL](https://www.postgresql.org), para uso em ambientes de Teste e Produção, e [SQLite](https://www.sqlite.org/index.html), para uso em ambiente de desenvolvimento. Caso ainda não tenha o PostgreSQL instalado, siga o passo-a-passo [aqui](https://www.postgresql.org/docs/10/tutorial-start.html)


## Criando as tabelas no DB

Para criar as tabelas que serão utilizadas no projeto, execute o comando abaixo:

```sh
npx knex migrate:latest
```


## Inserindo dados no DB

Após a criação das tabelas, execute o comando abaixo para inserção dos dados iniciais no banco de dados:

```sh
npx knex seed:run
```


## Reinicializando o DB

Caso seja preciso realizar alguma alteração, execute os comandos abaixo respeitando a ordem:

```sh
npx knex migrate:rollback
npx knex migrate:latest
npx knex seed:run
```


## Inicializando a aplicação

Após instalar e preencher o arquivo `.env`, execute o comando abaixo para iniciar a aplicação localmente:

```sh
npm start
```

O projeto rodará localmente na porta especificada no arquivo `.env`, de acordo com o exemplo `http://localhost:PORT/`. Caso nenhuma porta seja especificada a execução ocorrerá na porta padrão `3000` e você poderá acessar pelo endereço [http://localhost:3000/](http://localhost:3000/).


## Estrutura do projeto

```
├── knexfile.js
├── logos
│   ├── license
│   │   └── license.pdf
│   └── svg
│       ├── agile.svg
│       ├── design-thinking.svg
│       ├── devops.svg
│       ├── elixir.svg
│       ├── golang.svg
│       ├── javascript.svg
│       ├── open-source.svg
│       ├── python.svg
│       ├── react.svg
│       └── software-quality.svg
├── package.json
├── Procfile
├── public
│   └── meetups.json
├── README.md
└── src
    ├── controllers
    │   ├── app.js
    │   ├── events.js
    │   ├── index.js
    │   └── meetups.js
    ├── db
    │   ├── connection.js
    │   ├── db.sqlite
    │   ├── migrations
    │   │   ├── 20200812221250_create_countries.js
    │   │   ├── 20200812221326_create_states.js
    │   │   ├── 20200812221331_create_cities.js
    │   │   ├── 20200812221338_create_addresses.js
    │   │   ├── 20200812221347_create_meetups.js
    │   │   └── 20200812221354_create_events.js
    │   └── seeds
    │       ├── 01_countries.js
    │       ├── 02_states.js
    │       ├── 03_cities.js
    │       ├── 04_addresses.js
    │       ├── 05_meetups.js
    │       └── 06_events.js
    ├── index.js
    ├── models
    │   ├── events.js
    │   ├── index.js
    │   └── meetups.js
    ├── routes.js
    ├── services
    │   ├── events.js
    │   ├── index.js
    │   └── meetups.js
    └── utils
        ├── formatEvent.js
        ├── format.js
        └── formatMeetup.js
```

### Diretório **logos**

O diretório `logos` contém as imagens vetorizadas que serão utilizadas pelos Meetups cadastrados.


### Diretório **public**

O diretório `public` contém um arquivo estático `.json` com as informações dos Meetups para a região de Joinville.


### Diretório **DB**

O diretório DB contém os arquivos necessários para a criação das tabelas e inserção dos dados, de acordo com a biblioteca`knex`.

**migrations**: Arquivos `.js` com a estrutura das tabelas.
**seeds**: Arquivos `.js` que realizam a leitura dos dados do arquivo estático localizado em `/public` e insere-os nas tabelas criadas.


### Diretório **models**

O diretório de `models` contém as queries que serão executadas no banco de dados para filtrar as informações necessárias.


### Diretório **services**

O diretório de `services` disponibiliza os dados retornados pela `model` em uma formatação padronizada.


### Diretório **controllers**

O diretório de `controllers` é responsável por controlar a comunicação entre as requisições feitas do cliente para com a aplicação.
Todas as requisições recebidas possuem um `service` que será responsável por realizar a conexão com o banco de dados e retornar o dado no formato padrão.


### Diretório **utils**

O diretório de `utils` contém funções genéricas que podem auxiliar em pequenas formatações de dados na aplicação.


### Arquivo **routes**

O arquivo de `routes.js` contém todas as rotas disponíveis na aplicação:

- Os métodos disponíveis são ( **GET** )


**GET** /meetups -> Retorna via `.json` todos os meetups cadastrados no banco de dados, de acordo com o seguinte formato:

```
{
  "success" : <type: Boolean>,
  "message" : <type: String>,
  "data" : [
    {
      "id"         : <type: Integer>,
      "name"       : <type: String>,
      "description": <type: String>,
      "url_logo"   : <type: String>,
      "next_event": {
        "id"            : <type: Integer>,
        "title"         : <type: String>,
        "datetime_init" : <type: DateTime_TZ>,
        "datetime_end"  : <type: DateTime_TZ>
      }
    }
  ]
}
```


**GET** /events/past/:meetupId -> Retorna via `.json` os eventos já realizados de um determinado meetup, de acordo com o seguinte formato:

```
{
  "success" : <type: Boolean>,
  "message" : <type: String>,
  "data" : [
    {
      "id"            : <type: Integer>,
      "title"         : <type: String>,
      "datetime_init" : <type: DateTime_TZ>,
      "datetime_end"  : <type: DateTime_TZ>,
      "participants"  : <type: Integer>,
      "meetup_id"     : <type: Integer>,
      "address" {
        "place"         : <type: String>,
        "neighborhood"  : <type: String>,
        "street"        : <type: String>,
        "number"        : <type: Integer>,
        "code"          : <type: String>,
        "city"          : <type: String>,
        "uf"            : <type: String>,
        "country"       : <type: String>
      }
    }
  ]
}
```


**GET** /events/current/:meetupId -> Retorna via `.json` os próximos eventos de um determinado meetup, de acordo com o seguinte formato:

```
{
  "success" : <type: Boolean>,
  "message" : <type: String>,
  "data" : [
    {
      "id"            : <type: Integer>,
      "title"         : <type: String>,
      "datetime_init" : <type: DateTime_TZ>,
      "datetime_end"  : <type: DateTime_TZ>,
      "participants"  : <type: Integer>,
      "meetup_id"     : <type: Integer>,
      "address" {
        "place"         : <type: String>,
        "neighborhood"  : <type: String>,
        "street"        : <type: String>,
        "number"        : <type: Integer>,
        "code"          : <type: String>,
        "city"          : <type: String>,
        "uf"            : <type: String>,
        "country"       : <type: String>
      }
    }
  ]
}
```


## Dependências

- [dotenv](https://ghub.io/dotenv): Carrega variáveis de ambiente a partir de um arquivo `.env` dentro de `process.env`.
- [express](https://ghub.io/express): Framework para servidor web.
- [cors](https://ghub.io/expressjs/cors): CORS é um pacote `node.js` que pode ser utilizado para habilitar conexões para o servidor `express`.
- [moment](https://ghub.io/moment): Biblioteca responsável por validar e manipular datas.
- [pg](https://node-postgres.com/): Cliente PostgreSQL para NodeJS.
- [knex](http://knexjs.org/): Biblioteca para criação de queries SQL.


## Dependências de desenvolvimento

- [nodemon](https://ghub.io/nodemon): Biblioteca responsável por recarregar o servidor a cada atualização feita no projeto.
- [sqlite3](https://www.npmjs.com/package/sqlite3): Cliente SQLite para NodeJS.

