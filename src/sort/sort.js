export function quickSort(List) {
	if (List.length < 2) {
		return List;
	}else{

		const index = Math.floor(List.length / 2);
		const pivot = List[index];
		const leftList = [];
		const rightList = [];
		for (let i = 0; i < List.length; i++) {
			if(i === index){
				continue;
			}
			if (List[i].timeCompleted > pivot.timeCompleted) {
				rightList.push(List[i]);
			}else {
				leftList.push(List[i]);
			} 
		}
		return List = [...quickSort(leftList), pivot, ...quickSort(rightList)];
	}
}