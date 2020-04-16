let data: number | string;

data = 'dasd';

export interface ICar {
  color: string;
  model: string;
  topSpeed?: number;
}

const car1: ICar = {
  color: 'blue',
  model: 'bmw',
};

const car2: ICar = {
  color: 'red',
  model: 'mer',
  topSpeed: 100,
};

const multiply = (x: any, y: any): string => {
  return (x * y).toString();
};

export const cars = [car1, car2];
