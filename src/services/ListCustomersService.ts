import prismaClient from "../prisma";

class ListCustomersService {
    async execute() {
        const customers = await prismaClient.customers.findMany();
        return customers;
    }
}

export { ListCustomersService }