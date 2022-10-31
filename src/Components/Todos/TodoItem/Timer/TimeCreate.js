export const TimeCreate = ({todo}) => {
	const hours = Math.floor(todo.timeCreate/3600);
	const minits = Math.floor((todo.timeCreate - hours*3600)/60);
	return (
		<span>
			{hours}:{minits} 
		</span>
	);
};