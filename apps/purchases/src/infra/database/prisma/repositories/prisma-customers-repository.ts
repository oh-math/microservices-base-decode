import { CustomersRepository } from "../../../../application/repositories/customers-repository";
import { Customer } from "../../../../domain/customer";
import { prisma } from "../prisma";

export class PrismaCustomersRepository implements CustomersRepository {
  async create(customer: Customer) {
    const { email, id, name } = customer;

    await prisma.customer.create({
      data: {
        id,
        name,
        email,
      },
    });
  }
}
