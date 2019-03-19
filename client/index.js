const express = require("express");
const cors = require("cors");
const fetch = require('node-fetch');

const app = express();

app.use(cors());
app.get('/posts', async (req, res) => {
    const response = await fetch("http://localhost:3001/");
    const json = await response.json();  
    res.json(json);
});
app.get('/posts/:id',async (req, res) => {
    const postId = req.params.id;

    const response = await fetch("http://localhost:3001/" + postId);
    const json = await response.json();  
    res.json(json);
});
app.get('*',(req, res) => res.end('error'));

app.listen(3000, () => {
    console.log(`Server was started on http://localhost:3000`);
});