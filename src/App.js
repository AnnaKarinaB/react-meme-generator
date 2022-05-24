/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import { saveAs } from 'file-saver';
import { useState } from 'react';

const buttonStyles = css`
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

const imgStyles = css`
  height: 350px;
  width: 350px;
`;

const buttonPosition = css`
  display: flex;
  border-radius: 8px;
  font-size: 15px;
  justify-content: center;
  gap: 20px;
  padding: 5px 10px 5px 10px;
`;

export function App() {
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');
  const [template, setTemplate] = useState('');

  const urlApi = `https://api.memegen.link/images/${
    template ? template : 'doge'
  }/${top ? top : '_'}/${bottom ? bottom : ''}.png`;
  console.log(urlApi);

  return (
    <div className="App">
      <h1>React Meme Generator</h1>

      <div>
        <label>
          Choose template:
          <br />
          <input
            value={template}
            onChange={(event) => {
              setTemplate(event.currentTarget.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Top text:
          <br />
          <input
            value={top}
            onChange={(event) => {
              setTop(event.currentTarget.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Bottom text:
          <br />
          <input
            value={bottom}
            onChange={(event) => {
              setBottom(event.currentTarget.value);
            }}
          />
        </label>
      </div>
      <br />
      <img
        css={imgStyles}
        data-test-id="meme-image"
        src={urlApi}
        alt="generated-meme"
      />
      <div css={buttonPosition}>
        <button
          css={buttonStyles}
          onClick={() => {
            saveAs(urlApi, 'meme.jpg');
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
}
export default App;
