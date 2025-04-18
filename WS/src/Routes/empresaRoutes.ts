import { EmpresasControllers } from "@/controllers/empresasControllers";
import { FastifyInstance } from "fastify";


const empresasControlers = new EmpresasControllers();

export async function empresasRoutes(app: FastifyInstance) {
    app.post("/empresas", empresasControlers.criarEmpresas);

}