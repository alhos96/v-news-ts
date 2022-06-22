import "./article-bar.css";
import Avatar from "../avatar/Avatar";
import DateTime from "../dateTime/DateTime";
import { IBarData } from "../../interfaces";

const ArticleBar: React.FC<IBarData> = (props) => {
  const { avatar, username, date } = props; // NewsPost.tsx

  return (
    <header className="bar" id="article-header-bar">
      <Avatar src={avatar} translateY={-1} />

      <p
        aria-label={username}
        className="username"
        id="post-username"
        tabIndex={0}
        children={username}
      />

      <DateTime date={date} id="post-date" />
    </header>
  );
};

export default ArticleBar;
