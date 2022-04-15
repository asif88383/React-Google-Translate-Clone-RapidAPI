const SelectDropDown = ({selectedLanguage}) => {
    return (
        <div className="select-drop-down">
            <input value={selectedLanguage}/>
            <div className="down-arrow">
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    viewBox="M7 1015 5 5-5z"
                >
                    <path d="M7 1015 5 5-5z" />
                </svg>
            </div>
        </div>
    );
}

export default SelectDropDown;