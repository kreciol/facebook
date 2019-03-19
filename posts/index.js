const express = require("express");
const chokidar = require('chokidar');
const fs = require("fs");

chokidar
    .watch('./fakes/posts.json')
    .on('all', (event, path) => {
        try
        {
            console.log(event);
            const fileContent = fs.readFileSync(path).toString();
            this.posts = JSON.parse(fileContent);
            console.log(this.posts);
        }
        catch(err)
        {
            console.log(err);
        }
    });

const app = express();

app.get('/',(req, res) => {
    res.json(this.posts);
});
app.get('/:id',(req, res) => {
    const postId = req.params.id;

    res.json(this.posts.find(p => p.id === postId));
});
app.get('*',(req, res) => res.status(404));

app.listen(3001, () => {
    console.log(`Server was started on http://localhost:3001`);
});