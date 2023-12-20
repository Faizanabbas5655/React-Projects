import { useRef } from "react";

const InputForm = ({ setValue }) => {
  let inputString = useRef();

  const checkPalindrome = (e) => {
    e.preventDefault();
    let string = inputString.current.value;
    inputString.current.value = "";
    let reverseString = string.split("").reverse().join("");
    if (string === "") {
      setValue(0);
    } else if (string !== reverseString) {
      setValue(2);
    } else if (string === reverseString) {
      setValue(1);
    }
  };
  return (
    <form onSubmit={() => checkPalindrome(event)}>
      <label htmlFor="userId" className="form-label items">
        Enter string here:
      </label>
      <input
        ref={inputString}
        type="text"
        className="form-control items"
        id="userId"
        placeholder="Enter string here..."
      />
      <button type="submit" className="btn btn-dark submitButton">
        Submit
      </button>
    </form>
  );
};

export default InputForm;
