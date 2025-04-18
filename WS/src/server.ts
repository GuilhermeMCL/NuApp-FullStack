
import fastify from 'fastify'
import { env } from './env'
import { connectDB } from './lib/databse';
import { empresasRoutes } from './Routes/empresaRoutes';

export const app = fastify();

app.register(connectDB)
app.register(empresasRoutes)

app
    .listen({
        host: '0.0.0.0',
        port: env.PORT,
    })
    .then(() => {
        console.log('🚀 Server is running on http://localhost:', env.PORT)
    })