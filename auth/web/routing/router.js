const express = require("express");
const router = express.Router();
const crypto = require('crypto');

const salt = 'jfsjfiojeirjoiweuroi34u5897vx98venof4ifu38gy';

const users = [
    { login: 'user1', password: '633b806ee44adf1ea99a47ca66d616a953e0cb66ca186c6a25d53af1e8a2695a' },
    { login: 'user2', password: '4623ee7d6432484f84b6664377ac560a5b69243ff5d7993873fbe8c465ff0149' }
]

function encode(text) {
    return crypto.createHmac('sha256', salt)
                   .update(text)
                   .digest('hex');
}

router.post('/',(req, res) => {
    const user = users.find(u => u.login === req.body.login && u.password === encode(req.body.password))

    res.json({ status: !!user });
});
router.get('*',(req, res) => res.status(404));

module.exports = (app) => {
    app.use(router);
}