import { ThumbUp, Comment, Share } from "@mui/icons-material";

import "./post.css";
import { IPostData } from "../../interfaces";
import SharedWith from "../sharedWith/SharedWith";
import ActionIcons from "../ActionIcons";

const Post: React.FC<IPostData> = (props) => {
  const {
    headline,
    postText,
    postPicture,
    sharedWith,
    noOfLikes,
    noOfComments,
  } = props; // NrewsPost.tsx

  return (
    <>
      <div id="news-post-content">
        {headline && (
          <h5 id="post-headline" tabIndex={0}>
            {headline}
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
              { icon: <ThumbUp />, label: "like", noOfLikes: noOfLikes },
              {
                icon: <Comment />,
                label: "comment",
                noOfComments: noOfComments,
              },
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
