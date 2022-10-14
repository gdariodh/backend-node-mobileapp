import bodyParser from "body-parser";
import mongoose from "mongoose";
import Server from "./classes/server";
import defaultRoutes from "./routes/default.routes";
import productRoutes from "./routes/product.routes";

const server = new Server();

server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended: true}));

server.app.use('/', defaultRoutes)
server.app.use('/product', productRoutes)


mongoose.connect('mongodb+srv://user:123@cluster0.6hztveh.mongodb.net/?retryWrites=true&w=majority', (error) => {
    if(error){
        throw error
    }
    console.log('DB ONLINE')
})

server.Start(() => {
    console.log(`Servidor corriendo en puerto: ${server.port}`)
})