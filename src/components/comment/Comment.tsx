import { useState } from "react";
import { Edit, Delete } from "@mui/icons-material";

import "./comment.css";
import ActionIcons from "../ActionIcons";
import Avatar from "../avatar/Avatar";
import ToggleButton from "../toggleButton/ToggleButton";
import DateTime from "../dateTime/DateTime";
import { ICommentProps } from "../../interfaces";

const Comment: React.FC<ICommentProps> = (props) => {
  const {
    avatar,
    username,
    date,
    commentText,
    numberOfComments,
    currentCommentPosition,
  } = props; // NewsPost.tsx

  const [showMore, setShowMore] = useState(true);

  return (
    <>
      <article aria-label="comment" id="comment-wrapp">
        <div className="bar" id="comment-info-bar">
          <Avatar src={avatar} height={2.2} width={2.2} />

          <p
            className="username"
            id="comment-username"
            aria-label={username}
            tabIndex={0}
          >
            {username}
          </p>

          <DateTime date={date} id="comment-date" />

          <ActionIcons
            icons={[
              { icon: <Edit />, label: "edit" },
              { icon: <Delete />, label: "delete" },
            ]}
          />
        </div>

        {/* When showMore is toggled to true element will take a class that sets its overflow to elipsis */}
        <p className={`comment-text`} id={showMore ? "long-comment" : ""}>
          {commentText}
        </p>

        <ToggleButton
          label={showMore ? "Show more" : "Show less"}
          clickHandler={() => setShowMore(!showMore)}
          styles={{ fontSize: "0.9rem" }}
        />
      </article>

      {/**Dont display line on last comment */}
      {currentCommentPosition + 1 !== numberOfComments && (
        <hr className="divider" id="comment-divider" />
      )}
    </>
  );
};

export default Comment;
