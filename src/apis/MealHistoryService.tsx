import { IDummyMealHistory, IResponseAPI } from 'interfaces';
import m01 from '../assets/img/m01.jpg';
import l03 from '../assets/img/l03.jpg';
import d01 from '../assets/img/d01.jpg';
import l01 from '../assets/img/l01.jpg';
import l02 from '../assets/img/l02.jpg';
import d02 from '../assets/img/d02.jpg';
import s01 from '../assets/img/s01.jpg';

export function getMealHistory(): Promise<IResponseAPI<IDummyMealHistory[]>> {
  let dummyData: IDummyMealHistory[] = [
    {
      id: Math.random(),
      img: m01,
      date: '05.21 Morning'
    },
    {
      id: Math.random(),
      img: l03,
      date: '05.21 Lunch'
    },
    {
      id: Math.random(),
      img: d01,
      date: '05.21 Dinner'
    },
    {
      id: Math.random(),
      img: l01,
      date: '05.21 Snack'
    },
    {
      id: Math.random(),
      img: m01,
      date: '05.21 Morning'
    },
    {
      id: Math.random(),
      img: l02,
      date: '05.21 Lunch'
    },
    {
      id: Math.random(),
      img: d02,
      date: '05.21 Dinner'
    },
    {
      id: Math.random(),
      img: s01,
      date: '05.21 Snack'
    }
  ];

  return new Promise(resolve => {
    resolve({ data: dummyData });
  });
}
