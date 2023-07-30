import { getMyDiary, getMyExercises } from 'apis';
import { t } from 'i18next';
import { IDummyMyDiary, IDummyMyExercise, IResponseAPI } from 'interfaces';
import { useEffect, useState } from 'react';
import { Diary, EntryButton, ExerciseList, LineChart } from 'shared';
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
  const [myExercise, setMyExercise] = useState({} as IDummyMyExercise);
  const [isLoadMore, setIsLoadMore] = useState(true);
  const dimensionImg: number = 240;
  const lineChartDimension = {
    height: 185,
    width: 858
  };

  useEffect(() => {
    getMyExercises().then((res: IResponseAPI<IDummyMyExercise>) => {
      setMyExercise(res.data);
    });
  }, []);

  useEffect(
    () => {
      if (isLoadMore) {
        getMyDiary()
          .then((res: IResponseAPI<IDummyMyDiary[]>) => {
            setDiaryList([...diaryList, ...(res.data || [])]);
            setIsLoadMore(false);
          })
          .catch(() => setIsLoadMore(false));
      }
      return () => setIsLoadMore(false);
    },
    [isLoadMore, diaryList]
  );

  return (
    <div className="my-records-wrapper main-container">
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

      <div className="my-body-section">
        <LineChart
          height={lineChartDimension.height}
          width={lineChartDimension.width}
        />
      </div>

      <div className="my-exercise-section">
        <ExerciseList
          date={myExercise.date}
          exerciseData={myExercise.exerciseData}
        />
      </div>

      <div className="my-diary-section">
        <span className="title">
          {t('MY_RECORDS.MY_DIARY_TITLE')}
        </span>
        <div className="my-diary-list d-flex">
          {diaryList.map(item =>
            <Diary key={item.id} date={item.date} content={item.content} />
          )}
        </div>
      </div>

      <div className="button-style d-flex">
        <button
          onClick={() => setIsLoadMore(true)}
          type="button"
          className="btn"
        >
          {t('MY_RECORDS.SEE_MORE_MY_DIARY')}
        </button>
      </div>
    </div>
  );
}

export default MyRecords;
