import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";
import { Provider } from "react-redux";
import postStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={postStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
