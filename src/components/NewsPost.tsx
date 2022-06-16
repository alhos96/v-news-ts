import React, { useState } from "react";
import { CommentRounded, CommentsDisabled } from "@mui/icons-material";

import "./news-post.css";
import { IBarData, IPostData, IComment } from "../interfaces";
import ArticleBar from "./ArticleBar";
import Comment from "./Comment";
import Post from "./Post";
import ToggleButton from "./ToggleButton";

interface IProps {
  barData: IBarData;
  postData: IPostData;
  commentData: IComment[];
}

const NewsPost: React.FC<IProps> = ({ barData, postData, commentData }) => {
  let totalNoOfComments = commentData.length;
  const [noOfCommentsVisible, setNoOfCommentsVisible] = useState(5);

  const handleShowAllCommentsClick = (
    setNoOfCommentsVisible: (arg: number) => void,
    totalNoOfComments: number
  ) => {
    setNoOfCommentsVisible(totalNoOfComments);
  };

  const handleHideComments = (
    setNoOfCommentsVisible: (arg: number) => void
  ) => {
    setNoOfCommentsVisible(5);
  };

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
      />

      {
        /** When there are more comments than initial value of 5 display "Show more comments" button
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
                handleShowAllCommentsClick(
                  setNoOfCommentsVisible,
                  totalNoOfComments
                )
              }
              styles={{ fontSize: "1rem" }}
            />
            <hr className="divider comment-divider"></hr>
          </>
        )
      }

      {noOfCommentsVisible === totalNoOfComments && totalNoOfComments !== 5 && (
        <>
          <ToggleButton
            icon={<CommentsDisabled />}
            label="Hide comments"
            clickHandler={() => handleHideComments(setNoOfCommentsVisible)}
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
              return (
                <Comment
                  key={i}
                  currentCommentPosition={i}
                  numberOfComments={commentData.length}
                  timePosted="08:35"
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
