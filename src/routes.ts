import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomersController } from "./controllers/ListCustomersController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

export async function routes(fastify: FastifyInstance, option: FastifyPluginOptions) {

    // Rota PRINCIPAL
    // Rota de teste de conexão
    fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
        return { status: "Conexão bem sucedida!" };
    });

    // Rota CUSTOMER
    // Rota para criar um cliente
    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply);
    });
    
    // Rota para listar os clientes
    fastify.get("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().handle(request, reply);
    });

    // Rota para deletar um cliente
    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply);
    });

}