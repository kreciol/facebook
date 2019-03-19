const express = require("express");
const cors = require("cors");

const app = express();

const posts = [
    { id: 'yfiueyifyieudeerwy', body: 'post 1' },
    { id: 'daijdioasjdoijasoi', body: 'post 2' },
    { id: 'hdaushdisdddeuashd', body: 'post 3' },
];

app.use(cors());
app.get('/posts',(req, res) => res.json(posts));
app.get('/posts/:id',(req, res) => {
    const postId = req.params.id;

    res.json(posts.find(p => p.id === postId));
});
app.get('*',(req, res) => res.end('error'));

app.listen(3000, () => {
    console.log(`Server was started on http://localhost:3000`);
});