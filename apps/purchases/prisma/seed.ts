import { prisma } from "../src/infra/database/prisma/prisma";

const TEST_UUID = "99f07341-3e8c-451f-80dd-705b20f23bec";

async function main() {
  const product = await prisma.product.create({
    data: {
      id: TEST_UUID,
      title: "Test Course",
    },
  });
  console.log(product);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
