import { getColumnList, getMyDiary } from 'apis';
import { t } from 'i18next';
import { IDummyMyDiary, IResponseAPI } from 'interfaces';
import { useEffect, useState } from 'react';
import { Diary, EntryButton, ExerciseList } from 'shared';
import myRec1 from '../../assets/img/MyRecommend-1.jpg';
import myRec2 from '../../assets/img/MyRecommend-2.jpg';
import myRec3 from '../../assets/img/MyRecommend-3.jpg';
import './MyRecords.scss';

function MyRecords() {
  const myRecordsArray = [
    {
      title: 'MY_RECORDS.BODY_RECORD_TITLE',
      button: 'MY_RECORDS.BODY_RECORD_BUTTON',
      img: myRec1
    },
    {
      title: 'MY_RECORDS.MY_EXERCISE_TITLE',
      button: 'MY_RECORDS.MY_EXERCISE_BUTTON',
      img: myRec2
    },
    {
      title: 'MY_RECORDS.MY_DIARY_TITLE',
      button: 'MY_RECORDS.MY_DIARY_BUTTON',
      img: myRec3
    }
  ];
  const [diaryList, setDiaryList] = useState([] as IDummyMyDiary[]);
  const dimensionImg: number = 240;

  useEffect(() => {
    getMyDiary().then((res: IResponseAPI<IDummyMyDiary[]>) => {
      setDiaryList(res.data);
    });
  }, []);

  return (
    <div className="my-records-wrapper">
      <div className="entry-button-section">
        {myRecordsArray.map((item, index) =>
          <EntryButton
            key={index}
            height={dimensionImg}
            width={dimensionImg}
            backgroundImage={item.img}
            backgroundSize="auto 100%"
            title={item.title}
            button={item.button}
          />
        )}
      </div>

      <div className="my-exercise-section">
        <ExerciseList />
      </div>

      <div className="my-diary-section">
        <span className="title">MY DIARY</span>
        <div className="my-diary-list d-flex">
          {diaryList.map(item =>
            <Diary date={item.date} content={item.content} />
          )}
        </div>
      </div>

      <div className="button-style d-flex">
        <button type="button" className="btn">
          {t('MY_RECORDS.SEE_MORE_MY_DIARY')}
        </button>
      </div>
    </div>
  );
}

export default MyRecords;
