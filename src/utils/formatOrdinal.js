const formatOrdinal = (num) => {
  let last = +`${num}`.slice(-1);

  switch (last) {
    case 1:
      return `${last}st`;
    case 2:
      return `${last}nd`;
    case 3:
      return `${last}rd`;
    default:
      return `${last}th`;
  }
};

export default formatOrdinal;
