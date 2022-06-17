import { Avatar } from "@mui/material";

import "./article-bar.css";
import TimePosted from "./TimePosted";
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
        children={username}
      />

      <TimePosted date={date} timePosted={timePosted} />
    </header>
  );
};

export default ArticleBar;
