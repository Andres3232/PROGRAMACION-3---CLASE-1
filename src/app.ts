import express from 'express';

const PORT = process.env.PORT || 3000;
const server = express();

server.get("/", (req, res) => {
    res.send("hola mundo")
})

server.listen(PORT, () => {
    console.log(`Servidor a la escucha en puerto ${PORT}`)
})