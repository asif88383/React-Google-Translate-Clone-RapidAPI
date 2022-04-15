import SelectDropDown from "./SelectDropDown";

const TextBox = ({style, selectedLanguage, setShowModal}) => {
    return (
        <div className={style}>
            <SelectDropDown
             style={style}
             setShowModal={setShowModal}
             selectedLanguage={selectedLanguage}/>
            <textarea 
                placeholder={style === 'input' ? 'Enter Text' : 'Translated Text'}
                disabled={style === 'output'}
            />
        </div>
    );
}

export default TextBox;