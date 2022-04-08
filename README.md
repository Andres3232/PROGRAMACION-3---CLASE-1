CLASE 1

## 1- npm init -y
## 2- npm i @types/node typescript
## 3- npm i -D ts-node
## 4- git init
## 5- tuch .gitignore
## 6- en .gitignore sacamos la carperta node_modules
## 7- creamos carpeta ./scr
## 8- npm i -g typescript
## 9- tsc --init
## 10- editamos tsconfig generado en 9 y seteamos outDir: "./dist" y rootDir: "./src"
## 11- tsc
## 12- agregamos carpeta dist a .gitignore
## 13- git add.
## 14- git commit -m "iniciando servidor web"
## 15-en package.json ''' "scripts": { "dev": "ts-node ./dist/app.js", "start": "node ./dist/app.js", "build": "tsc" }, '''
## 16- npm i express @types/express