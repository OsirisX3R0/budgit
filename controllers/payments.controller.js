const prisma = require("../core/prisma");

module.exports = {
  get: async (month, year) =>
    await prisma.payment.findMany({ where: { month, year } }),
  create: async (data) => await prisma.payment.create({ data }),
};
