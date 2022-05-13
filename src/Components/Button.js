/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const button = css`
  margin-bottom: 1rem;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  font-size: 20px;
  width: 150px;
  height: 50px;
`;

function Button({ image, handleChangeCustomMeme, templates }) {
  return (
    <button
      css={button}
      onClick={() => {
        if (templates.find((object) => object.id === image)) {
          handleChangeCustomMeme();
        } else {
          alert('Your character does not exist.');
        }
      }}
    >
      Create Meme
    </button>
  );
}

export default Button;
