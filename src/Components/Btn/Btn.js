export const Btn = ({handleClick, style, text}) => {
    return (
        <button 
                onClick={handleClick}
                className={`${style}`}>
                {text}
        </button>
    )
}