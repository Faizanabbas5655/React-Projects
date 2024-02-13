import { createContext, useReducer, useState } from "react";

export let PostContext = createContext({
  postList: [],
  fetching: false,
  setFetch: () => {},
  addPost: () => {},
  deletePost: () => {},
  selectedState: "Home",
  handleOnClick: () => {},
});

const postListReducer = (currVal, action) => {
  let newPostList = currVal;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currVal];
  } else if (action.type === "DELETE_POST") {
    newPostList = currVal.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostContextProvider = ({ children }) => {
  let [fetching, setFetch] = useState(false);

  let [postList, dispatchPostList] = useReducer(postListReducer, []);

  let [selectedState, setSelectedState] = useState("Home");

  const handleOnClick = (stateSelected) => {
    setSelectedState(stateSelected);
  };

  // const addInitialPosts = (posts) => {
  //   dispatchPostList({
  //     type: "ADD_INITIAL_POSTS",
  //     payload: {
  //       posts,
  //     },
  //   });
  // };

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  // useEffect(() => {
  //   setFetch(true);
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setFetch(false);
  //     });

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  return (
    <PostContext.Provider
      value={{
        postList,
        fetching,
        setFetch,
        addPost,
        deletePost,
        selectedState,
        handleOnClick,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;

// let defaultPost = [
//   {
//     userId: "user-1",
//     id: 1,
//     title: "Going Islamabad",
//     body: "Looking to have fun...",
//     reactions: { likes: 99, dislikes: 12 },
//     views: 17,
//     tags: ["vacations", "Enjoying", "Happy"],
//   },
//   {
//     userId: "user-2",
//     id: 2,
//     title: "Going Karachi",
//     body: "It's a family event. It will be a great get together with my cousins.",
//     reactions: { likes: 99, dislikes: 12 },
//     views: 15,
//     tags: ["event", "Enjoying", "Happy", "marriage", "people"],
//   },
//   {
//     id: 3,
//     title: "Learning React",
//     body: "I recently decided to learn react and found the best course on youtube to learn react.",
//     tags: ["Learning", "Growth", "Skill"],
//     reactions: { likes: 99, dislikes: 12 },
//     views: 344,
//     userId: "user-3",
//   },
// ];

// userId,
// id: Date.now(),
// title,
// body,
// reactions: {
//   likes: Math.floor(Math.random() * 100),
//   dislikes: Math.floor(Math.random() * 10),
// },
// views: Math.floor(Math.random() * 1000),
// tags,
