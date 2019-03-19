const express = require("express");
const chokidar = require('chokidar');
const fs = require("fs");

const router = express.Router();

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

router.get('/',(req, res) => {
    res.json(this.posts);
});
router.get('/:id',(req, res) => {
    const postId = req.params.id;

    res.json(this.posts.find(p => p.id === postId));
});
router.get('*',(req, res) => res.status(404));

module.exports = (app) => {
    app.use(router);
}
