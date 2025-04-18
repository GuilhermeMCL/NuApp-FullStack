
import fastify from 'fastify'
import { env } from './env'

export const app = fastify();

app
    .listen({
        host: '0.0.0.0',
        port: env.PORT,
    })
    .then(() => {
        console.log('🚀 Server is running on http://localhost:', env.PORT)
    })