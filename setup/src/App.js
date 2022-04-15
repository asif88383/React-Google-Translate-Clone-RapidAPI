import {useState} from 'react';
import Arrows from "./components/Arrows";
import TextBox from "./components/TextBox";
import Button from "./components/Button";
import Modal  from "./components/Modal";

const App = () => {
    const [inputLanguage, setInputLanguage] = useState('English');
    const [outputLanguage, setOutputLanguage] = useState('Urdu');

    const handleClick = () => {
      setOutputLanguage(inputLanguage);
      setInputLanguage(outputLanguage);

  return (
    <div className="App">
      <TextBox
        selectedLanguage={inputLanguage} 
        style="input" 
      />
        <div className='arrow-container' onClick={handleClick}>
          <Arrows />
        </div>
      <TextBox
        selectedLanguage={outputLanguage}
        style="output" 
      />
    </div>
  );
}

export default App;
