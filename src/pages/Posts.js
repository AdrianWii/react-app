import { useDispatch, useSelector } from "react-redux";
import LikeCounter from "../components/LikeCounter/LikeCounter";
import { useEffect } from "react";
import { fetchPosts } from "../store/postsSlice";

function Posts() {
  const dispatch = useDispatch();
  const { posts, error, status } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  return (
    <>
      <h1>LATEST POSTS</h1>
      <article>
        <div className="posts">
          {status == "loading" && <p>Ładowanie ...</p>}
          {status == "failed" && <p>Błąd: {error}</p>}
          {status == "succeeded" &&
            posts.map((post) => (
              <LikeCounter
                key={post.id}
                color=""
                title={post.title}
                description={post.body}
                count="5"
              ></LikeCounter>
            ))}
        </div>
      </article>
    </>
  );
}

export default Posts;
