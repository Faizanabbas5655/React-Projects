import { useContext } from "react";
import { PostContext } from "../store/PostStore";

const Footer = () => {
  let { handleOnClick } = useContext(PostContext);
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-body-secondary"
              onClick={() => {
                handleOnClick("Home");
              }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-body-secondary"
              onClick={() => {
                handleOnClick("Features");
              }}
            >
              Features
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-body-secondary"
              onClick={() => {
                handleOnClick("Pricing");
              }}
            >
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-body-secondary"
              onClick={() => {
                handleOnClick("FAQ");
              }}
            >
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-body-secondary"
              onClick={() => {
                handleOnClick("About");
              }}
            >
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
