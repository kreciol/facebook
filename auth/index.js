const express = require("express");
const bodyParser = require('body-parser')
const cors = require("cors")

require('dotenv').config({ path: './config/auth.env' });

const users = [
    { login: 'user1', password: 'password1' },
    { login: 'user2', password: 'password2' }
]

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/',(req, res) => {
    const user = users.find(u => u.login === req.body.login && u.password === req.body.password)

    res.json({ status: !!user });
});
app.get('*',(req, res) => res.status(404));

app.listen(process.env.PORT, () => {
    console.log(`Server was started on http://localhost:${process.env.PORT}`);
});