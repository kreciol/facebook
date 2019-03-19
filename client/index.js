const express = require("express");
const cors = require("cors");

const app = express();

const posts = [
    { body: 'post 1' },
    { body: 'post 2' },
    { body: 'post 3' },
];

app.use(cors());
app.get('/posts',(req, res) => res.json(posts));
app.get('*',(req, res) => res.end('error'));

app.listen(3000, () => {
    console.log(`Server was started on http://localhost:3000`);
});