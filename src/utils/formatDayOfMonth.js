const formatDayOfMonth = (dom) => {
  switch (dom) {
    case "firstbusiness":
      return "First Business";
    case "lastbusiness":
      return "Last Business";
    case "firstfriday":
      return "First Friday";
    case "lastfriday":
      return "Last Friday";
    case "secondwed":
      return "Second Wednesday";
    case "thirdwed":
      return "Third Wednesday";
    case "fourthwed":
      return "Fourth Wednesday";
    default:
      return "Specific";
  }
};

export default formatDayOfMonth;
