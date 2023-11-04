# Passos para iniciar um projeto em TypeScript com TypeORM


1. iniciar projeto
```
 npx typeorm init --name protect-typeORM --database mysq
```
2. remove o mysql do package.json após roda o comando abaixo
```
 npm i express cors express-async-errors mysql2
```
3. instala as dependecias de desenvolvimento para trabalhar com TypeScript
```
npm i @types/express @types/cors ts-node-dev -D
```
4. mudar o scripts no package.json
```
   "scripts": {
      "build": "tsc",
      "dev:server": "ts-node-dev src/server.ts",
      "typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"
   }
```
5. apagar as pastas entily, migration é index.ts . Após criar a estrutura como esta no projeto.
```

```
6. comando para criar as migrations
```
npm run typeorm migration:create src/database/migrations/CreateUsersTable
```
7. comando para rodar as migrations
```
npm run typeorm -- -d ./src/database/data-source.ts migration:run
```
9. instalar dependecia para criar as seeds faça alterações no arquivo data-source.ts como esta no projeto
```
npm i typeorm-extension
```
10. acrescentar o script no package.json
```
   "scripts": {
      "seed:create": "ts-node ./node_modules/typeorm-extension/bin/cli.cjs seed:create -n",
      "seed": "ts-node ./node_modules/typeorm-extension/bin/cli.cjs seed:run  -d ./src/database/data-source.ts"
   }
```
11. comando para criar as seeds
```
npm run seed:create src/database/seeds/UserSeed
```
11. comando para roda as seeds
```
npm run seed
```