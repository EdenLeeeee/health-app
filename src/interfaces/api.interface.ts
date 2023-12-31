export interface IResponseAPI<T> {
  data: T;
}

export interface IDummyMealHistory {
  id: number;
  img: string;
  date: string;
}

export interface IDummyColumnList {
  id: number;
  img: string;
  date: string;
  content: string;
  hashTag: string;
}

export interface IDummyMyDiary {
  id: number;
  date: string;
  content: string;
}

export interface IDummyMyExercise {
  date: string;
  exerciseData: IExercise[];
}

export interface IExercise {
  id?: number;
  action: string;
  calo: number;
  minutes: number;
}
