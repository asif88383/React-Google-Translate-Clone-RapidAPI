import { useState, useEffect } from "react";
import Arrows from "./components/Arrows";
import TextBox from "./components/TextBox";
import Button from "./components/Button";
import Modal from "./components/Modal";
import axios from 'axios';

const App = () => {
  const [showModal, setShowModal] = useState(null);
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("Urdu");
  const [languages, setLanguages] = useState(null);

  const getLanguages = async () => {
    const options = {
      method: "GET",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
      headers: {
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        "X-RapidAPI-Key": "02fa17e655mshf9c37c2ec5c9ae5p1aa3d6jsn083d7fcf4fe7",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        const arrayOfData = Object.keys(response.data.data).map(key => {  return response.data.data[key] });
        setLanguages(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };  // end of getLanguages

  const handleClick = () => {   // handleClick is called when the user clicks on the button
    setOutputLanguage(inputLanguage);
    setInputLanguage(outputLanguage);
  };  // end of handleClick

  return (
    <div className="App">
      {!showModal && (
        <>
          <TextBox
            selectedLanguage={inputLanguage}
            style="input"
            setShowModal={setShowModal}
          />
          <div className="arrow-container" onClick={handleClick}>
            <Arrows />
          </div>
          <TextBox
            selectedLanguage={outputLanguage}
            style="output"
            setShowModal={setShowModal}
          />
        </>
      )}
      {showModal && <Modal
                 setShowModal={setShowModal} />}
    </div>
  );
};

export default App;
