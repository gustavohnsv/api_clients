import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string,
}

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps) {
        if (!id) {
            throw new Error("ID Invalido!");
        }
        const findCustomer = await prismaClient.customers.findFirst({
            where: { id }
        });
        if (!findCustomer) {
            throw new Error("Cliente não encontrado!");
        }
        await prismaClient.customers.delete({
            where: { id: findCustomer.id }
        });
        return { message: "Cliente deletado com sucesso!"};
    }
}

export { DeleteCustomerService }