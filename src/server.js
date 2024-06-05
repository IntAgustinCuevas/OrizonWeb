import express from 'express';

const app = express();

const PORT = process.env.Orizon_PORT;

app.listen( PORT , () => {
    console.log(`Server running on Port: ${PORT}`);
})

app.get('/' , (req , res) => {
    res.send("Hola Mundo")
})