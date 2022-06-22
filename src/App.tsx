import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/material";

import NewsPost from "./components/newsPost/NewsPost";
import { IPost } from "./interfaces/index";
import Loader from "./components/Loader";
import DisplayError from "./components/DisplayError";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState<IPost[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get("/posts");
        setPosts(response.data.posts);
        setLoading(false);
      } catch (error) {
        error instanceof Error && setError(true);

        setLoading(false);
      }
    }

    fetchData();

    return () => {};
  }, []);

  if (loading) {
    return <Loader message="Data not available" timeout={30000} />;
  }

  if (error) {
    return <DisplayError message="Something went wrong" />;
  }

  return (
    <Container aria-busy={loading} className="news-stream" role="feed">
      {posts &&
        posts.map((post, i) => {
          return (
            <NewsPost
              key={i}
              barData={{
                avatar: post.avatar,
                username: post.creator,
                date: post.date,
              }}
              postData={{
                headline: post.post_headline,
                postText: post.post_text,
                postPicture: post.post_image,
                sharedWith: post.shared_with,
                noOfLikes: post.likes.length,
                noOfComments: post.comments.length,
              }}
              commentData={post.comments}
            />
          );
        })}
    </Container>
  );
}

export default App;
