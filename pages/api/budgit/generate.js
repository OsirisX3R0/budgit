const Billers = require("../../../controllers/billers.controller");
const Schedules = require("../../../controllers/schedules.controller");
const Paydays = require("../../../controllers/paydays.controller");
const dayjs = require("dayjs");

module.exports = async (req, res) => {
  try {
    let billers = await Billers.get(); 
    let schedules = await Schedules.get()

    for(let schedule of schedules) {
      switch(schedule.frequency) {
        case 'semimonthly':
          let paydayFirst = await Paydays.create({
            month: +req.body.month,
            year: +req.body.year,
            day: dayjs(schedule.first_date).date(),
            amount: schedule.amount,
          })
          let paydaySecond = await Paydays.create({
            month: +req.body.month,
            year: +req.body.year,
            day: dayjs(schedule.second_date).date(),
            amount: schedule.amount
          })

          let firstDueDate = dayjs(new Date(paydayFirst.year, paydayFirst.month, paydayFirst.day))
          let beforefirstDueDate = firstDueDate.subtract(5, 'day')
          let secondDueDate = dayjs(new Date(paydaySecond.year, paydaySecond.month, paydaySecond.day))
          let beforesecondDueDate = secondDueDate.subtract(5, 'day')
          let next_due_date = dayjs(new Date(paydayFirst.year, paydayFirst.month, paydayFirst.day)).add(1, 'month')
          
          Paydays.addPayments(paydayFirst.id, billers.reduce((payments, biller) => 
            let lower = dayjs(new Date(paydayFirst.year, paydayFirst.month, paydayFirst.day)).subtract(5, 'day')
            let 
          , []))
      }
    }

    res.json(biller);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
