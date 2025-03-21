import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import { useContext } from "react";
import { PostContext } from "../store/PostStore";

const Header = () => {
  let { handleOnClick } = useContext(PostContext);
  return (
    <>
      <header className="header p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use href="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a
                  href="#"
                  className="nav-link px-2 text-secondary"
                  onClick={() => {
                    handleOnClick("Home");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link px-2 text-white"
                  onClick={() => {
                    handleOnClick("Features");
                  }}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link px-2 text-white"
                  onClick={() => {
                    handleOnClick("Pricing");
                  }}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link px-2 text-white"
                  onClick={() => {
                    handleOnClick("FAQ");
                  }}
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link px-2 text-white"
                  onClick={() => {
                    handleOnClick("About");
                  }}
                >
                  About
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              ></input>
            </form>

            <div className="text-end">
              <button
                type="button"
                className="btn btn-outline-light me-2"
                onClick={() => {
                  handleOnClick("Login");
                }}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  handleOnClick("SignUp");
                }}
              >
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
