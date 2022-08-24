export const Btn = ({handleClick, style, text, styleBtn}) => {
    return (
        <button 
                onClick={handleClick}
                className={`${style}`}>
                {text}
        </button>
    )
}