import { useContext } from "react";
import { PostContext } from "../store/PostStore";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  let { postList, addInitialPosts } = useContext(PostContext);

  const handleButtonClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPosts(data.posts));
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onButtonClick={handleButtonClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
      ;
    </>
  );
};

export default PostList;
