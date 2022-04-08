CLASE 1

npm init -y
npm i @types/node typescript
npm i -D ts-node
git init
tuch .gitignore
en .gitignore sacamos la carperta node_modules
creamos carpeta ./scr
npm i -g typescript
tsc --init
editamos tsconfig generado en 9 y seteamos outDir: "./dist" y rootDir: "./src"
tsc
agregamos carpeta dist a .gitignore
git add.
git commit -m "iniciando servidor web"
en package.json ''' "scripts": { "dev": "ts-node ./dist/app.js", "start": "node ./dist/app.js", "build": "tsc" }, '''
npm i express @types/express