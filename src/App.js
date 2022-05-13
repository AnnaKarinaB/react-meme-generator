import './App.css';
import { useEffect, useState } from 'react';
import Button from './Components/Button';
import CustomMeme from './Components/CustomMeme';
import Inputs from './Components/Inputs';

function App() {
  const [image, setImage] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [templates, setTemplates] = useState([]);
  const [customMeme, setCustomMeme] = useState(
    'https://api.memegen.link/images/doge/such_meme/very_skill.jpg?width=300',
  );

  const url =
    'https://api.memegen.link/images/doge/such_meme/very_skill.jpg?width=300';

  function handleChangeCustomMeme() {
    setCustomMeme(
      `https://api.memegen.link/images/${image}/${topText}/${bottomText}.png`,
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url); // await fetch of url => returns a promise
        const json = await response.json();
        setTemplates(json);
      } catch (error) {
        console.log(error);
      }
    };

    // call the function
    fetchData().catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <main>
      <section>
        <h1>Meme generator</h1>
        <Inputs
          image={image}
          setImage={setImage}
          topText={topText}
          setTopText={setTopText}
          bottomText={bottomText}
          setBottomText={setBottomText}
        />
        <Button
          image={image}
          setImage={setImage}
          topText={topText}
          setTopText={setTopText}
          bottomText={bottomText}
          setBottomText={setBottomText}
          url={url}
          handleChangeCustomMeme={handleChangeCustomMeme}
          templates={templates}
        />
        <CustomMeme
          customMeme={customMeme}
          setCustomMeme={setCustomMeme}
          image={image}
          topText={topText}
          bottomText={bottomText}
          handleChangeCustomMeme={handleChangeCustomMeme}
        />
      </section>
    </main>
  );
}

export default App;
