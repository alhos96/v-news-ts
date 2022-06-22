import "./date-time.css";

import { IDateTimeProps } from "../../interfaces";
import timeDifferenceCalculator from "./timeDifferenceCalculator";
import formatDate from "./formatDate";

const DateTime: React.FC<IDateTimeProps> = (props) => {
  const { date, id } = props;

  const timeAgo = timeDifferenceCalculator(date);
  const formattedDate = formatDate(date);

  return (
    <p className="date" aria-label={`${timeAgo}`} id={id} tabIndex={0}>
      {formattedDate} {timeAgo}
    </p>
  );
};

export default DateTime;
