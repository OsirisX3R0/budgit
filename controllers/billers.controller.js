const prisma = require("../core/prisma");

module.exports = {
  get: async () => await prisma.biller.findMany(),
  create: async (data) => await prisma.biller.create({ data }),
  update: async (id, data) =>
    await prisma.biller.update({ where: { id }, data }),
};
