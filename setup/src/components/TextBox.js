const TextBox = ({style}) => {
    return (
        <div>
            <textarea 
                placeholder={style == 'input' ? 'Enter Text' : 'Translated Text'}
                disabled={style == 'output'}
            />
        </div>
    );
}

export default TextBox;