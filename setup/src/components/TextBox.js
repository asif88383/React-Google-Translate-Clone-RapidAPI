import SelectDropDown from "./SelectDropDown";

const TextBox = ({style, selectedLanguage, setShowModal}) => {
    return (
        <div className={style}>
            <SelectDropDown selectedLanguage={selectedLanguage}/>
            <textarea 
                placeholder={style == 'input' ? 'Enter Text' : 'Translated Text'}
                disabled={style == 'output'}
            />
        </div>
    );
}

export default TextBox;