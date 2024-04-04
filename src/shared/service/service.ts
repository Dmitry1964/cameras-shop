export const getArrNumbers = (num : number) => {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
};

export const getIndex = (arr: number[], item: number) : number => arr.indexOf(item);
