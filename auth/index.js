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

require("./web/routing/router")(app);

app.listen(process.env.PORT, () => {
    console.log(`Server was started on http://localhost:${process.env.PORT}`);
});