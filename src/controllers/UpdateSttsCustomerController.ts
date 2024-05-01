import { FastifyRequest, FastifyReply } from 'fastify'
import { UpdateSttsCustomerService } from '../services/UpdateSttsCustomerService'

class UpdateSttsCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string };
        const updateSttsCustomerService = new UpdateSttsCustomerService();
        const customer = await updateSttsCustomerService.execute({ id });
        reply.status(200).send(customer); // talvez 202
    }
}

export { UpdateSttsCustomerController }