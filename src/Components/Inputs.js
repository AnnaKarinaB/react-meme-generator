import '../App.css';

function Inputs({ topText, bottomText, setTopText, setBottomText, setImage }) {
  function handleChangeTopText(event) {
    setTopText(event.currentTarget.value);
  }

  function handleChangeBottomText(event) {
    setBottomText(event.currentTarget.value);
  }

  function handleChangeImage(event) {
    setImage(event.currentTarget.value);
  }

  return (
    <div className="Inputs">
      <label For="top-text">
        Top text:
        <input
          className="userInput"
          value={topText}
          onChange={handleChangeTopText}
        />
      </label>
      <br />
      <label For="bottom-text">
        Bottom text:
        <input
          className="userInput"
          value={bottomText}
          onChange={handleChangeBottomText}
        />
      </label>
    </div>
  );
}

export default Inputs;
