const prisma = require("../core/prisma");

module.exports = {
  get: async (day, month) =>
    await prisma.payment.findMany({ where: { day, month } }),
};
