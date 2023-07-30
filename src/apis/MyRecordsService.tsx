import {
  IDummyMyDiary,
  IDummyMyExercise,
  ILineChart,
  IResponseAPI
} from 'interfaces';

export function getMyDiary(): Promise<IResponseAPI<IDummyMyDiary[]>> {
  let dummyData: IDummyMyDiary[] = [];

  for (let i = 0; i < 8; i++) {
    dummyData.push({
      id: Math.random(),
      date: '2021.05.17   23:25',
      content: `私の日記の記録が一部表示されます。
      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
    });
  }

  return new Promise(resolve => {
    resolve({ data: dummyData });
  });
}

export function getMyExercises(): Promise<IResponseAPI<IDummyMyExercise>> {
  let dummyData: IDummyMyExercise = {
    date: '2021.05.21',
    exerciseData: []
  };

  for (let i = 0; i < 15; i++) {
    dummyData.exerciseData.push({
      id: Math.random(),
      calo: 26,
      action: '家事全般（立位・軽い）',
      minutes: 10
    });
  }

  return new Promise(resolve => {
    resolve({ data: dummyData });
  });
}

export function getMyBodyPercentage(): Promise<
  IResponseAPI<ILineChart<number[][]>>
> {
  function getData(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let dummyData: ILineChart<number[][]> = {
    labels: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5],
    data: []
  };

  for (let i = 0; i < 2; i++) {
    const array = [] as number[];
    dummyData.labels.forEach(() => {
      array.push(getData(450, 700));
    });
    dummyData.data.push(array);
  }

  return new Promise(resolve => {
    resolve({ data: dummyData });
  });
}
