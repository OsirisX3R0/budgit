const Billers = require("../../../controllers/billers.controller");

module.exports = async (req, res) => {
  try {
    let biller = await Billers.update(+req.query.id, req.body);

    return res.json(biller);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
