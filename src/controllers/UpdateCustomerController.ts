import { FastifyRequest, FastifyReply } from 'fastify'
import { UpdateCustomerService } from '../services/UpdateCustomerService'

class UpdateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string };
        const { name, email, phone, address } = request.body as { name: string, email: string, phone: string, address: string }
        console.log(id, name, email, phone, address);
        const updateCustomerService = new UpdateCustomerService();
        const customer = await updateCustomerService.execute({ id, name, email, phone, address });
        reply.status(200).send(customer); // talvez 202
    }
}

export { UpdateCustomerController }