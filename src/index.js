import server from "./server";
import routes from "./routes";

server.app.use(routes);

server.server.listen();