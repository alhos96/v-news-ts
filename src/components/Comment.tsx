import { useState } from "react";
import { Avatar } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

import "./comment.css";
import ActionIcons from "./ActionIcons";
import ToggleButton from "./ToggleButton";
import { ICommentProps } from "../interfaces";

const Comment: React.FC<ICommentProps> = ({
  avatar,
  username,
  date,
  timePosted,
  commentText,
  numberOfComments,
  currentCommentPosition,
}) => {
  const [showMore, setShowMore] = useState(true);

  return (
    <>
      <article aria-label="comment" id="comment-wrapp">
        <div className="bar" id="comment-info-bar">
          <Avatar className="avatar" id="comment-avatar" src={avatar} alt="" />

          <p
            className="username"
            id="comment-username"
            aria-label={username}
            tabIndex={0}
          >
            {username}
          </p>

          <p id="comment-date">
            {date} {timePosted}
          </p>

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
