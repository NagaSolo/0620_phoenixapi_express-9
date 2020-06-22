*to be moved to wiki*

### Overview

- June 20th, 2020 project/craft/product
- 0620_phoenixapi_express-9
- contact list API using expressjs@v12.16.3, mongodb

### User Stories
- user can view name of contacts, email, descriptions, mobile number
- user can add their own contact

### Workflow/Progress

swagger:
- `contactdb_schema` -> `WIP`
- deciding tables to be defined -> `WIP`
    - early collections definition -> `DONE`
- create an API specs using `editor.swagger.io` -> `NEXT`
- download created API -> `NEXT`

nodejs packages:
- (wsl) `npm init` project -> `DONE`
- create `.gitignore`, to exclude `npm_modules` -> `DONE`
- (wsl) `npm` `i` `-s` `express` `body-parser` -> `DONE`
- (wsl) install mongoose, `npm i -s mongoose` -> `DONE`
- (wsl) install `express-handlebars`, to handle views -> `DONE`
- (vscode) put `body-parser` to parse json body -> `NEXT`
- (vscode) put `cors`, `npm i -s cors`, cross domain module -> `NEXT`
- (wsl) `npm` `i` `-s` `co` `config` `lodash` -> `NEXT`

separation of concern:
- (vscode) put PORT configuration into config folder -> `NEXT`
- (cmd) start mongo service `.\Program Files\MongoDB\Server\4.2\bin\mongo.exe` -> `NEXT`
    - (script) create bat script(windows) for easy start mongod -> `start-mongod.bat`
        - (inside bat) `start "" "C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath c:\data\db`
    `OR`
    - (Mongodb Compass) -> connect to existing db / or create new db
- (cmd) get mongo port connection, put it to `config/parameters` -> `DONE`
- (vscode) put MongoDB URL configuration into config folder parameters -> `DONE`
- (vscode) define model using `mongoose` Schema -> `WIP`
- (vscode) create routes at `index.js`, as defined at `swagger.yaml` -> `NEXT`
- (vscode) create controller function for every routes -> `NEXT`
- (vscode) also create a service to interact with db -> `NEXT`

- `config\` folder -> PORT and mongodb connection
- `models\` folder -> data models
- `views\` folder -> view template
- `routes\` folder -> routes to resources

### Testing
- `npm run dev` -> run development using `nodemon`
- `npm start`
- (deprecated) start `mongod.exe` -> `.\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath=c:\data\db`, `mongodb compass` for interactivity
- (cmd) `.\start-mongod.bat`
- `postman` to test routes

##### **v36.00 v38.40**
##### v39.16 mongoose to mongo conn
##### v41.50 define models
##### v50 using `co` module at `helpers`

##### russian guide
##### v20.31 express handlebars
