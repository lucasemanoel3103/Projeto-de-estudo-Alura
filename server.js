import express from 'express';
import routes from './src/routes/postsRoutes.js';

const posts = [
    { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Gato tomando sol", imagem: "https://placecats.com/millie/300/150" },
    { id: 3, descricao: "Paisagem incrível", imagem: "https://placecats.com/millie/300/150" },
];

const app = express();
routes(app)


app.listen(3000, () => {
    console.log('Servidor escutando...');
});

 