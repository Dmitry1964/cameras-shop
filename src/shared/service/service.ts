
import { TCamera } from '../types/app-types';

export const getArrNumbers = (num : number) => {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
};

export const addPositionFixed = () => {
  document.body.style.position = 'fixed';
};

export const removePositionFixed = () => {
  document.body.style.position = '';
};

export const getIndex = (arr: number[], item: number) : number => arr.indexOf(item);

export const getSearchList = (list: TCamera[], searchString: string) => list.filter((item) => item.name.toLowerCase().includes(searchString.toLowerCase()));
