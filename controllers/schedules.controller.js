const prisma = require("../core/prisma");

module.exports = {
  get: async () => await prisma.pay_schedule.findMany(),
  create: async (data) => await prisma.pay_schedule.create({ data }),
  update: async (id, data) =>
    await prisma.pay_schedule.update({ where: { id }, data }),
  delete: async (id) => await prisma.pay_schedule.delete({ where: { id } }),
};
