import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postListActions } from ".";

export let PostContext = createContext({
  fetching: false,
  selectedState: "Home",
  handleOnClick: () => {},
});

const PostContextProvider = ({ children }) => {
  let [selectedState, setSelectedState] = useState("Home");

  const handleOnClick = (stateSelected) => {
    setSelectedState(stateSelected);
  };

  const [fetching, setFetch] = useState(false);

  const initialPostsDispatch = useDispatch();

  useEffect(() => {
    setFetch(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        initialPostsDispatch(postListActions.addInitialPosts(data.posts));
        setFetch(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostContext.Provider
      value={{
        fetching,
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
