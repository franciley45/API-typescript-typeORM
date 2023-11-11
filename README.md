#  Para usar essa aplicação, você vai precisar ter instalado na sua máquina o Node.js, banco de MySQL e Git.
# Passos para rodar essa aplicação

1. Clone o projeto do GitHub com o seguinte comando:
```
 git clone git@github.com:franciley45/API-typescript-typeORM.git 
```
2. Entre na pasta API-typescript-typeORM:
```
 cd API-typescript-typeORM
```
3. Instale as dependências:
```
 npm install
```
4. Criar um arquivo .env com as informações do seu banco de dados MySQL, por exemplo:
```
HOST="localhost"
PORT="3306"
USERNAME_MYSQL="root"
PASSWORD="password"
DATABASE="code_drops_crud"
```
5. Suba a aplicação:
```
 npm start
```
Fim. É só utilizar. Se você quiser saber quais rotas existem, é só acessar a documentação dessa API neste link:
```
 https://api-typescript-type-orm-franciley45.vercel.app/docs
```
#
#
#
#
#
# Passos para iniciar um projeto em TypeScript com TypeORM
1. Inicie o projeto:
```
 npx typeorm init --name protect-typeORM --database mysq
```
2. Remova o MySQL do package.json após rodar o comando abaixo:
```
 npm i express cors express-async-errors mysql2
```
3. Instale as dependências de desenvolvimento para trabalhar com TypeScript:
```
npm i @types/express @types/cors ts-node-dev -D
```
4. Mude os scripts no package.json:
```
   "scripts": {
      "build": "tsc",
      "dev:server": "ts-node-dev src/server.ts",
      "typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"
   }
```
5. Apague as pastas entity, migration e index.ts. Após criar a estrutura como está no projeto.
```

```
6. Comando para criar as migrations:
```
npm run typeorm migration:create src/database/migrations/CreateUsersTable
```
7. Comando para rodar as migrations:
```
npm run typeorm -- -d ./src/database/data-source.ts migration:run
```
9. Instale a dependência para criar as seeds. Faça alterações no arquivo data-source.ts como está no projeto:
```
npm i typeorm-extension
```
10. Acrescente o script no package.json:
```
   "scripts": {
      "seed:create": "ts-node ./node_modules/typeorm-extension/bin/cli.cjs seed:create -n",
      "seed": "ts-node ./node_modules/typeorm-extension/bin/cli.cjs seed:run  -d ./src/database/data-source.ts"
   }
```
11. Comando para criar as seeds:
```
npm run seed:create src/database/seeds/UserSeed
```
12. Comando para rodar as seeds:
```
npm run seed
```