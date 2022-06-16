import { Avatar } from "@mui/material";

import "./article-bar.css";
import { IBarData } from "../interfaces";

const ArticleBar: React.FC<IBarData> = ({
  avatar,
  username,
  date,
  timePosted = "07:45",
}) => {
  return (
    <header className="bar" id="article-header-bar">
      <Avatar
        id="logged-in-user-avatar"
        className="avatar"
        alt=""
        src={avatar}
      />

      <p
        aria-label={username}
        className="username"
        id="post-username"
        tabIndex={0}
      >
        {username}
      </p>

      {/** set aria label to be how long agp was post created */}
      <p
        aria-label={`time posted ${date} ${timePosted}`}
        id="post-date"
        tabIndex={0}
      >
        {date} {timePosted}
      </p>
    </header>
  );
};

export default ArticleBar;
