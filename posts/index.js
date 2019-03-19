const express = require("express");

require('dotenv').config({ path: './config/posts.env' });

const app = express();

require("./web/routing/router")(app);

app.listen(process.env.PORT, () => {
    console.log(`Server was started on http://localhost:${process.env.PORT}`);
});