import prismaClient from "../prisma";

interface UpdateCustomerProps {
    id: string,
    name: string,
    email: string,
    phone: string,
    address: string
}

class UpdateCustomerService {
    async execute({ id, name, email, phone, address  }: UpdateCustomerProps) {
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
            name: name !== undefined ? name : findCustomer?.name,
            email: email !== undefined ? email : findCustomer?.email,
            phone: phone !== undefined ? phone : findCustomer?.phone,
            address: address !== undefined ? address : findCustomer?.address,
            update_at: new Date(Date.now())
            }
        });
        return customer;
    }
}

export { UpdateCustomerService }