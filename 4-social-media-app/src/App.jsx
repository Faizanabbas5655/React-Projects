import "../src/styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import PostContextProvider from "./store/PostStore";

function App() {
  return (
    <PostContextProvider>
      <div className="wrapper">
        <Sidebar></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </PostContextProvider>
  );
}

export default App;

{
  /* 
{selectedState == "Home" ? (
  <PostList></PostList>
) : (
  <CreatePost></CreatePost>
)} */
}
