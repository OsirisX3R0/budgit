export const defaultSchedule = {
  frequency: null,
  amount: null,
  day_of_week: null,
  day_of_month: null,
  day: null,
  next_due_date: null,
  first_date: null,
  second_date: null,
};

export const newScheduleReducer = (state, action) => {
  switch (action.type) {
    case "FREQ":
      let amount = state.amount;
      return {
        ...defaultSchedule,
        amount,
        frequency: action.frequency,
      };
    case "AMOUNT":
      return { ...state, amount: +action.amount };
    case "DOW":
      return { ...state, day_of_week: action.day_of_week };
    case "DOM":
      return { ...state, day_of_month: action.day_of_month };
    case "DAY":
      return { ...state, day: action.day };
    case "NEXT":
      return {
        ...state,
        next_due_date: action.next_due_date.toDate(),
      };
    case "FIRST":
      return {
        ...state,
        first_date: action.first_date.toDate(),
      };
    case "SECOND":
      return {
        ...state,
        second_date: action.second_date.toDate(),
      };
    case "EDIT":
      return action.schedule;
    case "RESET":
      return defaultSchedule;
    default:
      return state;
  }
};
