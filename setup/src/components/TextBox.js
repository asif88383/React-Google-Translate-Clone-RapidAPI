import SelectDropDown from "./SelectDropDown";

const TextBox = ({  // TextBox is a component that renders the input and output text boxes
  style,
  selectedLanguage,
  setShowModal,
  setTextToTranslate,
  textToTranslate,
  translatedText,
  setTranslatedText,
}) => {
    
    const handleClick = () => {   // handleClick is called when the user clicks on the button
        setTextToTranslate('')
        setTranslatedText('')
    };  // end of handleClick

  return (
    <div className={style}>
      <SelectDropDown
        style={style}
        setShowModal={setShowModal}
        selectedLanguage={selectedLanguage}
      />
      <textarea
        placeholder={style === "input" ? "Enter Text" : "Translated Text"}
        disabled={style === "output"}
        onChange={(e) => setTextToTranslate(e.target.value)}
        value={style === "input" ? textToTranslate : translatedText}
      />
      {style === "input" && (
          <div className="delete" onClick={handleClick}>✘</div>
        )}
    </div>
  );
};

export default TextBox;