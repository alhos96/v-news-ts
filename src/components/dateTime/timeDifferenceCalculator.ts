const timeDifferenceCalculator = (date: string) => {
  let timestamp = Date.now() - new Date(date).getTime();

  const differenceInMinutes = Math.floor(timestamp / (1000 * 60));

  const differenceInHours = Math.floor(timestamp / (1000 * 60 * 60));

  const differenceInDays = Math.floor(timestamp / (1000 * 60 * 60 * 24));

  const differenceInMonths = Math.floor(timestamp / (1000 * 60 * 60 * 24 * 30));

  const differenceInYears = Math.floor(timestamp / (1000 * 60 * 60 * 24 * 365));

  const timeAgo = () => {
    if (differenceInHours < 1) {
      if (differenceInMinutes < 1) {
        return "just now";
      }
      return `${differenceInMinutes} minutes ago`;
    } else if (differenceInHours < 24) {
      return `${differenceInHours} hours ago`;
    } else if (differenceInHours > 24) {
      if (differenceInHours > 730) {
        if (differenceInHours > 8760) {
          return `${differenceInYears} years ago`;
        }
        return `${differenceInMonths} months ago`;
      }
      return `${differenceInDays} days ago`;
    } else {
      return "";
    }
  };

  return timeAgo();
};

export default timeDifferenceCalculator;
