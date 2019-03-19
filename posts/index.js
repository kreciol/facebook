const express = require("express");
const posts = require("./fakes/posts")

const app = express();

app.get('/',(req, res) => {
    res.json(posts);
});
app.get('/:id',(req, res) => {
    const postId = req.params.id;

    res.json(posts.find(p => p.id === postId));
});
app.get('*',(req, res) => res.status(404));

app.listen(3001, () => {
    console.log(`Server was started on http://localhost:3001`);
});