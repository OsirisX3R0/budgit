const prisma = require("../core/prisma");

module.exports = {
  get: async () => await prisma.biller.findMany(),
  create: async (biller) => await prisma.biller.create(biller),
};
