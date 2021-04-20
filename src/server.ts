import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Ola NLW 05"
    });
});

app.post("/users", (request, response) =>{
    return response.json({
        message: "Usuário criado com sucesso !"
    })
})

app.listen(3333, () => console.log("server is running on port 3333"));