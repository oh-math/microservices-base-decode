import { PurchasesRepository } from "../../../../application/repositories/purchases-repository";
import { Purchase } from "../../../../domain/purchase";
import { prisma } from "../prisma";

export class PrismaPurchasesRepository implements PurchasesRepository {
  async create(purchase: Purchase) {
    const { id, createdAt, customerId, productId } = purchase;

    await prisma.purchase.create({
      data: {
        id,
        customerId,
        productId,
        createdAt,
      },
    });
  }
}
