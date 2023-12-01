const ErrorHandler = ({ items }) => {
  return <>{items.length === 0 && <p>I am still hungry</p>}</>;
};
export default ErrorHandler;
