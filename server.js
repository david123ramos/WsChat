import {WebSocketServer} from "ws";

const port = process.env.PORT || 8080;
const wss =  new WebSocketServer({port});

/**
 * escuta uma nova conexão de algum front-end
 */
wss.on("connection", (client) => {
    client.on("message", broadcast);
});

/**
 * Função q envia msg para todos os usuário ativos
 */
function broadcast(msg) {
    wss.clients.forEach((c) => c.send(msg));
}