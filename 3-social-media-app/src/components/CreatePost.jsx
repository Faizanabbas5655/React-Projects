import "../styles/App.css";
import { Form, redirect } from "react-router-dom";
const CreatePost = () => {
  // let { handleOnClick } = useContext(PostContext);
  // let { addPost } = useContext(PostContext);

  // let userID = useRef();
  // let postTitle = useRef();
  // let postBody = useRef();
  // let postTags = useRef();

  // const navigate = useNavigate();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   let userId = userID.current.value;
  //   let title = postTitle.current.value;
  //   let body = postBody.current.value;
  //   let tags = postTags.current.value.split(" ");
  //   userID.current.value = "";
  //   postTitle.current.value = "";
  //   postBody.current.value = "";
  //   postTags.current.value = "";
  // };

  return (
    <>
      <Form method="POST" className="newPostForm">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label items">
            User ID
          </label>
          <input
            action="userId"
            type="text"
            className="form-control items"
            id="userId"
            placeholder="Enter user ID here..."
          />
          <label htmlFor="Title" className="form-label items">
            Tilte
          </label>
          <input
            name="title"
            type="text"
            className="form-control items"
            id="Title"
            placeholder="Enter post title here...."
          />
          <label htmlFor="Body" className="form-label items">
            Body
          </label>
          <input
            name="body"
            type="text"
            className="form-control items"
            id="Body"
            placeholder="Enter post content here..."
          />
          <label htmlFor="tags" className="form-label items">
            Tags
          </label>
          <input
            name="tags"
            type="text"
            className="form-control items"
            id="tags"
            placeholder="Enter space separated tags here..."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </>
  );
};

export async function createPostAction(data, addPost, handleOnClick) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      post.id = Date.now();
      addPost(post);
      handleOnClick("Home");
    });
  return redirect("/");
}

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
