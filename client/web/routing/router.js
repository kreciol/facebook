const express = require("express");
const fetch = require('node-fetch');

const router = express.Router();

router.get('/posts', async (req, res) => {
    const response = await fetch("http://localhost:3001/");
    const json = await response.json();  
    res.json(json);
});
router.get('/posts/:id',async (req, res) => {
    const postId = req.params.id;

    const response = await fetch("http://localhost:3001/" + postId);
    const json = await response.json();  
    res.json(json);
});
router.get('*',(req, res) => res.end('error'));

module.exports = (app) => {
    app.use(router);
}
