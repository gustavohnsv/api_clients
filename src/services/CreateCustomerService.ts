import prismaClient from "../prisma";

interface CreateCustomerProps {
    name: string,
    email: string,
    phone: string,
    address: string
}

class CreateCustomerService {
    async execute({ name, email, phone, address }: CreateCustomerProps) {
        if (!name || !email || !phone || !address) {
            throw new Error("Informações faltando!");
        }
        const customer = await prismaClient.customers.create({
            data: {
                name,
                email,
                phone,
                address,
                status: true
            }
        })
        return customer;
    }
}

export { CreateCustomerService }