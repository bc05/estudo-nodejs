import http from "http";

import express from 'express';

const app = express();
const server = http.Server(app);
const port = 3000;
const hostname = '127.0.0.1';

app.listen(port, hostname, () => {
    console.log(`Servidor ativo em: ${hostname}:${port}`)
});

export default {server, app};

