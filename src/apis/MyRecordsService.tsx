import { IDummyMyDiary, IResponseAPI } from 'interfaces';

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
