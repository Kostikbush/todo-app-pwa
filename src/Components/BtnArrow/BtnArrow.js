import { IoIosArrowDown } from "react-icons/io";


export const BtnArrow = ({show, setShow}) => {
	return (
		<button
			aria-label='show-arrow-btn'
			className={`${show ? "rotate-180 transition-all" : "transition-all"}`} 
			onClick={()=> setShow(!show)}
		>
			<IoIosArrowDown size={24}/>
		</button>
	);
};