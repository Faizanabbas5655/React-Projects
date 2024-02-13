import "../styles/App.css";
import { useContext, useRef } from "react";
import { PostContext } from "../store/PostStore";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postListActions } from "../store";
const CreatePost = () => {
  let { handleOnClick } = useContext(PostContext);
  // let { addPost } = useContext(PostContext);

  let userID = useRef();
  let postTitle = useRef();
  let postBody = useRef();
  let postTags = useRef();

  const navigate = useNavigate();
  const addDispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    let userId = userID.current.value;
    let title = postTitle.current.value;
    let body = postBody.current.value;
    let tags = postTags.current.value.split(" ");
    userID.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
    postTags.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        title,
        body,
        reactions: {
          likes: Math.floor(Math.random() * 100),
          dislikes: Math.floor(Math.random() * 10),
        },
        views: Math.floor(Math.random() * 1000),
        tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        post.id = Date.now();
        addDispatch(postListActions.addPost(post));
        navigate("/");
        handleOnClick("Home");
      });
  };

  return (
    <>
      <form className="newPostForm" onSubmit={(event) => handleSubmit(event)}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label items">
            User ID
          </label>
          <input
            ref={userID}
            type="text"
            className="form-control items"
            id="userId"
            placeholder="Enter user ID here..."
          />
          <label htmlFor="Title" className="form-label items">
            Tilte
          </label>
          <input
            ref={postTitle}
            type="text"
            className="form-control items"
            id="Title"
            placeholder="Enter post title here...."
          />
          <label htmlFor="Body" className="form-label items">
            Body
          </label>
          <input
            ref={postBody}
            type="text"
            className="form-control items"
            id="Body"
            placeholder="Enter post content here..."
          />
          <label htmlFor="tags" className="form-label items">
            Tags
          </label>
          <input
            ref={postTags}
            type="text"
            className="form-control items"
            id="tags"
            placeholder="Enter space separated tags here..."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreatePost;

{
  /* <label htmlFor="Reactions" className="form-label items">
  Reactions
</label>
<input
  ref={postReactions}
  type="text"
  className="form-control items"
  id="reactions"
  placeholder="Enter no. of reactions received here..."
/> */
}
