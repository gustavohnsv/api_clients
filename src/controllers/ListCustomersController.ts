import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from "../services/ListCustomersService";

class ListCustomersController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustomersService = new ListCustomersService();
    const customers = await listCustomersService.execute();
    reply.status(200).send(customers); // talve 202
  }
}

export { ListCustomersController }