import { useContext } from "react";
import { PostContext } from "../store/PostStore";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./Loader";
import { useSelector } from "react-redux";

const PostList = () => {
  let { fetching } = useContext(PostContext);
  let { postList } = useSelector((store) => store.postList);
  // console.log(postList);

  return (
    <>
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};

export default PostList;
