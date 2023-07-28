import { IDummyData, IResponseAPI } from 'intefaces';

export function getMealHistory(): Promise<IResponseAPI<IDummyData[]>> {
  let dummyData: IDummyData[] = [];
  for (let i = 1; i <= 8; i++) {
    dummyData.push({
      img: `column-${i}.jpg`,
      date: `05.21 Morning`
    });
  }

  return new Promise((resolve, reject) => {
    resolve({ data: dummyData });
  });
}
