const Billers = require("../../../controllers/billers.controller");

module.exports = async (_, res) => {
  try {
    let billers = await Billers.get();

    res.json(billers);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
