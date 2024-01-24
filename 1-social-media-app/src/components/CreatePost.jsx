import "../styles/App.css";
import { useContext, useRef } from "react";
import { PostContext } from "../store/PostStore";

const CreatePost = () => {
  let { addPost } = useContext(PostContext);

  let userID = useRef();
  let postTitle = useRef();
  let postBody = useRef();
  let postTags = useRef();

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
    addPost(userId, title, body, tags);
  };
  // , parseInt(reactions)
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
