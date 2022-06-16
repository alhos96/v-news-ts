import { ThumbUp, Comment, Share } from "@mui/icons-material";

import "./post.css";
import { IPostData } from "../interfaces";
import SharedWith from "./SharedWith";
import ActionIcons from "./ActionIcons";

const Post: React.FC<IPostData> = ({
  headline,
  postText,
  postPicture,
  sharedWith,
}) => {
  return (
    <>
      <div id="news-post-content">
        {headline && (
          <h5 id="post-headline" tabIndex={0}>
            {headline && headline}
          </h5>
        )}

        {postPicture && (
          <img
            id="post-picture"
            aria-label="post image"
            src={postPicture}
            aria-hidden="true"
            alt="post"
          />
        )}

        <p id="post-content" tabIndex={0}>
          {postText}
        </p>

        <div className="bar" id="post-actions">
          <SharedWith sharedWith={sharedWith} />

          <ActionIcons
            icons={[
              { icon: <ThumbUp />, label: "like" },
              { icon: <Comment />, label: "comment" },
              { icon: <Share />, label: "share" },
            ]}
          />
        </div>
      </div>
      <hr className="divider post-divider" />
    </>
  );
};

export default Post;
