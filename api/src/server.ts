import express, { response } from 'express';

const app = express();

/**
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica
 */

app.get("/", (request, response) => {
    //return response.send("Olá pessoal")
    return response.json({message: "Olá mundo"});
});

app.post("/", (request, response) => {
    return response.json({message: "Os dados foram salvos com sucesso."});
});

app.listen(3333, () => console.log("Server is running..."));