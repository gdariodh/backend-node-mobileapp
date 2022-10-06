import Server from "./classes/server";
import defaultRoutes from "./routes/default.routes";

const server = new Server();

server.app.use('/', defaultRoutes)

server.Start(() => {
    console.log(`Servidor corriendo en puerto: ${server.port}`)
})