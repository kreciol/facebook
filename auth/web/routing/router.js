const express = require("express");
const router = express.Router();

const users = [
    { login: 'user1', password: 'password1' },
    { login: 'user2', password: 'password2' }
]

router.post('/',(req, res) => {
    const user = users.find(u => u.login === req.body.login && u.password === req.body.password)

    res.json({ status: !!user });
});
router.get('*',(req, res) => res.status(404));

module.exports = (app) => {
    app.use(router);
}