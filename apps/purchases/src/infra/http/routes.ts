import "dotenv/config";

import { Router } from "express";
import { PurchaseProduct } from "../../application/usecases/purchase-product";
import { PrismaCustomersRepository } from "../database/prisma/repositories/prisma-customers-repository";
import { PrismaProductsRepository } from "../database/prisma/repositories/prisma-products-repository";
import { PrismaPurchasesRepository } from "../database/prisma/repositories/prisma-purchases-repository";
import { KafkaMessagingAdapter } from "../messaging/kafka/adapters/kafka-messaging-adapter";

const router = Router();

router.get("/", (req, res) => {
  return res.json({ ok: true });
});

router.post("/purchases", async (request, response) => {
  const { productId, name, email } = request.body;

  const prismaCustomersRepository = new PrismaCustomersRepository();
  const prismaProductsRepository = new PrismaProductsRepository();
  const prismaPurchasesRepository = new PrismaPurchasesRepository();
  const kafkaMessagingAdapter = new KafkaMessagingAdapter();

  const purchaseProductUseCase = new PurchaseProduct(
    prismaCustomersRepository,
    prismaProductsRepository,
    prismaPurchasesRepository,
    kafkaMessagingAdapter
  );

  try {
    await purchaseProductUseCase.execute({
      name,
      email,
      productId,
    });

    return response.status(201).send();
  } catch (err) {
    console.error(err);
    
    return response.status(400).json({
      error: 'Error while creating a new purchase'
    })
  }
});


export default Router().use(router);
