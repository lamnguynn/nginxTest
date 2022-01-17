import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).send({
        "name": "Lam Nguyen",
        "age": 32

    });
})

app.listen(PORT, ()=>{ console.log(`Listening on ${PORT}...`) })