import { AiFillDelete } from "react-icons/ai";
import "../styles/App.css";
import { useContext, useState } from "react";
import { PostContext } from "../store/PostStore";

const Post = ({ post }) => {
  let { deletePost } = useContext(PostContext);

  let [likesCount, setLikesCount] = useState(post.reactions.likes);
  const handleLikes = () => {
    setLikesCount(likesCount + 1);
  };

  let [dislikesCount, setDislikesCount] = useState(post.reactions.dislikes);
  const handleDislikes = () => {
    setDislikesCount(dislikesCount + 1);
  };

  let [viewsCount, setViewsCount] = useState(post.views);
  const handleViews = () => {
    setViewsCount(viewsCount + 1);
  };

  return (
    <div
      className="card post-card"
      style={{ width: "50%", margin: "50px 25%" }}
    >
      <div className="card-body">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-button"
          onClick={() => deletePost(post.id)}
        >
          <AiFillDelete />
          <span className="visually-hidden">unread messages</span>
        </span>
        <h5 className="card-title postHeading">{post.title}</h5>
        <hr className="lineBreak" />
        <p className="card-text postBody">{post.body}</p>
        <hr className="lineBreak" />

        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary post-tags">
            {tag}
          </span>
        ))}
        <hr />
        <div className="postReactions">
          <div>
            <button
              type="button"
              className="btn btn-primary position-relative"
              onClick={handleLikes}
            >
              Likes
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {likesCount}
              </span>
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary position-relative"
              onClick={handleDislikes}
            >
              Dislikes
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {dislikesCount}
              </span>
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary position-relative"
              onClick={handleViews}
            >
              Views
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {viewsCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
