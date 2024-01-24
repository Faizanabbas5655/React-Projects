import "../src/styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import { useState } from "react";
import PostContextProvider from "./store/PostStore";

function App() {
  let [selectedState, setSelectedState] = useState("Home");

  const handleOnClick = (stateSelected) => {
    setSelectedState(stateSelected);
  };

  return (
    <PostContextProvider>
      <div className="wrapper">
        <Sidebar
          selectedState={selectedState}
          handleOnClick={handleOnClick}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedState == "Home" && <PostList></PostList>}
          {selectedState == "Create Post" && <CreatePost></CreatePost>}
          <Footer></Footer>
        </div>
      </div>
    </PostContextProvider>
  );
}

export default App;
