import { useState, useEffect } from "react";
import Arrows from "./components/Arrows";
import TextBox from "./components/TextBox";
import Button from "./components/Button";
import Modal from "./components/Modal";
import axios from "axios";

const App = () => {
  const [showModal, setShowModal] = useState(null);
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("German");
  const [languages, setLanguages] = useState(null);
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const getLanguages = async () => {
    // get languages from API
    const response = await axios('http://localhost:8000/languages');
    setLanguages(response.data);
  };  // end of getLanguages

  const translateText = async () => {
    const data = {textToTranslate, outputLanguage, inputLanguage}
    const response = await axios('http://localhost:8000/translation', {params: data});
    setTranslatedText(response.data);
  };

  useEffect(() => {
    getLanguages();
  }, []);

  const handleClick = () => {   // handleClick is called when the user clicks on the button
    setOutputLanguage(inputLanguage);
    setInputLanguage(outputLanguage);
  };  // end of handleClick
  

  return (
    <div className="app">
      {!showModal && (
        <>
          <TextBox
            selectedLanguage={inputLanguage}
            style="input"
            setShowModal={setShowModal}
            textToTranslate={textToTranslate}
            setTextToTranslate={setTextToTranslate}
            setTranslatedText={setTranslatedText}
          />
          <div className="arrow-container" onClick={handleClick}>
            <Arrows />
          </div>
          <TextBox
            selectedLanguage={outputLanguage}
            style="output"
            setShowModal={setShowModal}
            translatedText={translatedText}
          />
          <div className="button-container" onClick={translateText}>
            <Button />
          </div>
        </>
      )}
      {showModal && 
      <Modal 
        setShowModal={setShowModal} 
        languages={languages}
        chosenLanguage={showModal === 'input' ? inputLanguage : outputLanguage}
        setChosenLanguage={showModal === 'input' ? setInputLanguage : setOutputLanguage}
      />
      }
    </div>
  );
};

export default App;
