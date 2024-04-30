import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, email, phone, address  } = request.body as { name: string, email: string, phone: string, address: string };

        console.log(name, email, phone, address);
        const customerService = new CreateCustomerService();
        const customer = await customerService.execute({ name, email, phone, address});
        reply.status(200).send(customer); // talvez 201
    }
}

export { CreateCustomerController }