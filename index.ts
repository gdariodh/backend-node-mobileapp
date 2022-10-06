import mongoose from "mongoose";
import Server from "./classes/server";
import defaultRoutes from "./routes/default.routes";
import productRoutes from "./routes/product.routes";

const server = new Server();

server.app.use('/', defaultRoutes)
server.app.use('/product', productRoutes)


mongoose.connect('mongodb://localhost:27017/backend-mobile-ionic', (error) => {
    if(error){
        throw error
    }
    console.log('DB ONLINE')
})

server.Start(() => {
    console.log(`Servidor corriendo en puerto: ${server.port}`)
})