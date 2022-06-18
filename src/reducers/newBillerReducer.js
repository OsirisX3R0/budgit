export const defaultBiller = {
  name: "",
  category: "",
  frequency: "monthly",
  next_due_date: "",
  default_amount: null,
};

export const newBillerReducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.name };
    case "CATEGORY":
      return { ...state, category: action.category };
    case "FREQ":
      return { ...state, frequency: action.frequency };
    case "DUE":
      return {
        ...state,
        next_due_date: action.next_due_date.toDate(),
      };
    case "DEFAULT":
      return { ...state, default_amount: +action.default_amount };
    case "EDIT":
      return action.biller;
    case "RESET":
      return defaultBiller;
    default:
      return state;
  }
};
