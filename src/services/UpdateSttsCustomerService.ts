import prismaClient from "../prisma";

interface UpdateSttsCustomerProps {
    id: string,
}

class UpdateSttsCustomerService{
    async execute({ id }: UpdateSttsCustomerProps) {
        if (!id) {
            throw new Error("ID Invalido!");
        }
        const findCustomer = await prismaClient.customers.findFirst({
            where: { id }
        });
        if (!findCustomer) {
            throw new Error("Cliente não encontrado!");
        }
        const customer = await prismaClient.customers.update({
            where: { id: findCustomer.id },
            data: {
                status: findCustomer.status ? false : true,
                update_at: new Date(Date.now())
            }
        });
        return customer;
    }
}

export { UpdateSttsCustomerService }