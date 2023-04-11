"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../src/infra/database/prisma/prisma");
const TEST_UUID = "99f07341-3e8c-451f-80dd-705b20f23bec";
async function main() {
    const product = await prisma_1.prisma.product.create({
        data: {
            id: TEST_UUID,
            title: "Test Course",
        },
    });
    console.log(product);
}
main()
    .then(async () => {
    await prisma_1.prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma_1.prisma.$disconnect();
    process.exit(1);
});
