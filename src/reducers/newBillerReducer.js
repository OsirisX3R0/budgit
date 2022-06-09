export const defaultBiller = {
  name: "",
  category: "",
  day_of_month: "",
  default_amount: "",
};

export const newBillerReducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.name };
    case "CATEGORY":
      return { ...state, category: action.category };
    case "DOM":
      return { ...state, day_of_month: action.day_of_month };
    case "DEFAULT":
      return { ...state, default_amount: action.default_amount };
    case "EDIT":
      return action.biller;
    case "RESET":
      return defaultBiller;
    default:
      return state;
  }
};
