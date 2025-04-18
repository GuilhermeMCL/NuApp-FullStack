import { FastifyReply, FastifyRequest } from "fastify";
import { Empresa } from "../models/empresas";

export class EmpresasControllers {
    async criarEmpresas(request: FastifyRequest, reply: FastifyReply) {

        try {
            const empresa = new Empresa(request.body);
            await empresa.save();
            reply.status(201).send({ empresa });
        } catch (error) {
            console.log(error);
            reply.status(500).send({ message: "Erro ao criar empresa" });
        }
    }
}