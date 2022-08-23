export const ArrSort = (a,b) => {
        if(a.timeCompleted>b.timeCompleted)return 1;
        if(a.timeCompleted===b.timeCompleted)return 0;
        if(a.timeCompleted<b.timeCompleted)return -1;
        if(a.timeCompleted === null && b.timeCompleted !== null)return -1;
}