const WelcomeMessage = ({ onButtonClick }) => {
  return (
    <div className="welcome-message">
      <h1>There are no posts to show.</h1>
      <button type="button" className="btn btn-primary" onClick={onButtonClick}>
        Add Posts from API
      </button>
    </div>
  );
};

export default WelcomeMessage;
