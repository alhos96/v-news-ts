import { IDateTimeProps } from "../interfaces";

import "./time-posted.css";

const TimePosted: React.FC<IDateTimeProps> = (props) => {
  const { timePosted, date } = props;

  return (
    <p
      aria-label={`time posted ${date} ${timePosted}`}
      id="post-date"
      tabIndex={0}
      children={`${date} ${timePosted}`}
    />
  );
};

export default TimePosted;
