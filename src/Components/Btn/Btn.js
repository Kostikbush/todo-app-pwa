export const Btn = ({handleClick, style, text, styleBtn}) => {
	return (
		<button 
			aria-label='custom-btn'
			onClick={handleClick}
			className={`${style}`}>
			{text}
		</button>
	);
};