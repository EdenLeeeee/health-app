import { IDummyColumnList, IResponseAPI } from 'interfaces';
import col1 from '../assets/img/column-1.jpg';
import col2 from '../assets/img/column-2.jpg';
import col3 from '../assets/img/column-3.jpg';
import col4 from '../assets/img/column-4.jpg';
import col5 from '../assets/img/column-5.jpg';
import col6 from '../assets/img/column-6.jpg';
import col7 from '../assets/img/column-7.jpg';
import col8 from '../assets/img/column-8.jpg';

export function getColumnList(): Promise<IResponseAPI<IDummyColumnList[]>> {
  let dummyData: IDummyColumnList[] = [
    {
      id: Math.random(),
      img: col1,
      date: '2021.05.17   23:25',
      content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      hashTag: '#魚料理 #和食 #DHA'
    },
    {
      id: Math.random(),
      img: col2,
      date: '2021.05.17   23:25',
      content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      hashTag: '#魚料理 #和食 #DHA'
    },
    {
      id: Math.random(),
      img: col3,
      date: '2021.05.17   23:25',
      content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      hashTag: '#魚料理 #和食 #DHA'
    },
    {
      id: Math.random(),
      img: col4,
      date: '2021.05.17   23:25',
      content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      hashTag: '#魚料理 #和食 #DHA'
    },
    {
      id: Math.random(),
      img: col5,
      date: '2021.05.17   23:25',
      content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      hashTag: '#魚料理 #和食 #DHA'
    },
    {
      id: Math.random(),
      img: col6,
      date: '2021.05.17   23:25',
      content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      hashTag: '#魚料理 #和食 #DHA'
    },
    {
      id: Math.random(),
      img: col7,
      date: '2021.05.17   23:25',
      content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      hashTag: '#魚料理 #和食 #DHA'
    },
    {
      id: Math.random(),
      img: col8,
      date: '2021.05.17   23:25',
      content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      hashTag: '#魚料理 #和食 #DHA'
    }
  ];

  return new Promise(resolve => {
    resolve({ data: dummyData });
  });
}
