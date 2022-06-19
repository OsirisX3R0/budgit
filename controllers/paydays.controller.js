const prisma = require("../core/prisma");

module.exports = {
  get: async (month, year) =>
    await prisma.payday.findMany({ where: { month, year } }),
  create: async (data) => await prisma.payday.create({ data }),
  addPayments: async (id, payments) =>
    await prisma.payday.update({ where: { id }, data: { payments } }),
};
