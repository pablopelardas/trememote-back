# trememote-back

## Tech Stack

**Server:** NodeJs, Express, Sequelize, Mysql

## Features

- CRUD Users
- CRUD Posts
- Pagination

## Run Locally

Clone the project

```bash
  git clone https://github.com/pablopelardas/trememote-back
```

Go to the project directory

```bash
  cd trememote-back
```

Install dependencies in both folders (API and CLIENT)

```bash
  npm install
```

Create MYSQL databases

Config .env
```
DB_USER=
DB_PASSWORD=
DB_PORT=
DB_DATABASE=
DB_HOST=
PORT=
CLIENT= client_url
ACCESS_TOKEN_SECRET= access_token_secret_for_jwt
REFRESH_TOKEN_SECRET= refresh_token_secret_for_jwt
```

```bash
  npm install
```

Migrations and Seeders
```
npx sequelize-cli db:migrate:all
npx sequelize-cli db:seed:all
```

Start the server

```bash
  npm run dev
```
