function CustomMeme({ customMeme, handleChangeCustomMeme }) {
  return (
    <img
      className="meme"
      src={customMeme}
      onChange={handleChangeCustomMeme}
      alt="Your custom meme"
    />
  );
}

export default CustomMeme;
