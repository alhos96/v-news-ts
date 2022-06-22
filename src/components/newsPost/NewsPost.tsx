import React, { useState } from "react";
import { CommentRounded, CommentsDisabled } from "@mui/icons-material";

import "./news-post.css";
import { INewsPostProps } from "../../interfaces";
import { handleHideClick, handleShowAllClick } from "./newsPostHelpers";
import ArticleBar from "../articleBar/ArticleBar";
import Comment from "../comment/Comment";
import Post from "../post/Post";
import ToggleButton from "../toggleButton/ToggleButton";

const NewsPost: React.FC<INewsPostProps> = (props) => {
  const { barData, postData, commentData } = props; // App.tsx

  let totalNoOfComments = commentData.length;
  const initialNum = 5; // deafult number of comments to show
  const [noOfCommentsVisible, setNoOfCommentsVisible] = useState(initialNum);

  return (
    <article aria-label="news post" id="comment" className="news-post">
      <ArticleBar
        avatar={barData.avatar}
        username={barData.username}
        date={barData.date}
      />

      <Post
        headline={postData.headline}
        postText={postData.postText}
        postPicture={postData.postPicture}
        sharedWith={postData.sharedWith}
        noOfComments={postData.noOfComments}
        noOfLikes={postData.noOfLikes}
      />

      {
        /** When there are more comments than initial value of initialNum display "Show more comments" button
         *
         *  When "Show all comments" is clicked, set noOfCommentsVisible to be equal to all available comments, than "Hide comments" button will be shown.
         *
         * If total amount of comments available is exactly five, no toggle button will be shown.
         */

        noOfCommentsVisible < totalNoOfComments && (
          <>
            <ToggleButton
              icon={<CommentRounded />}
              label="Show all comments"
              clickHandler={() =>
                handleShowAllClick(setNoOfCommentsVisible, totalNoOfComments)
              }
              styles={{ fontSize: "1rem" }}
            />
            <hr className="divider comment-divider"></hr>
          </>
        )
      }

      {noOfCommentsVisible === totalNoOfComments &&
        totalNoOfComments !== initialNum && (
          <>
            <ToggleButton
              icon={<CommentsDisabled />}
              label="Hide comments"
              clickHandler={() =>
                handleHideClick(setNoOfCommentsVisible, initialNum)
              }
              styles={{ fontSize: "1rem" }}
            />
            <hr className="divider comment-divider"></hr>
          </>
        )}

      <div role="feed" aria-label="comments">
        {totalNoOfComments === 0 ? (
          <p>no comments</p>
        ) : (
          // eslint-disable-next-line
          commentData.map((comment, i) => {
            if (i < noOfCommentsVisible)
              // initialy its 5 comments, but when "Show all comments" is clicked, it will be equal to totalNoOfComments
              return (
                <Comment
                  key={i}
                  currentCommentPosition={i}
                  numberOfComments={commentData.length}
                  timePosted="08:3initialNum"
                  avatar={comment.avatar}
                  username={comment.creator}
                  date={comment.date}
                  commentText={comment.commentText}
                />
              );
          })
        )}
      </div>
    </article>
  );
};

export default NewsPost;
