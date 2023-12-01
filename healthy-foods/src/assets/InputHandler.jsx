import styles from "../InputHandler.module.css";

function InputHandler({ eventOnKeyDown }) {
  return (
    <input
      className={styles.InputHandler}
      type="text"
      placeholder="Enter food item here"
      onKeyDown={eventOnKeyDown}
    ></input>
  );
}

export default InputHandler;
