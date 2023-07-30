import { t } from 'i18next';
import './ExerciseList.scss';
import { IExercise } from 'interfaces';

export interface IExerciseObj {
  date: string;
  exerciseData: IExercise[];
}

function ExerciseList(props: IExerciseObj) {
  return (
    <div className="exercise-list-wrapper d-flex">
      <div className="header d-flex">
        <span className="title">
          {t('MY_RECORDS.MY_EXERCISE.TITLE')}
        </span>
        <span className="date">{props?.date}</span>
      </div>
      <div className="list-data">
        {props?.exerciseData?.length && props.exerciseData.map((item) => {
          return (
          <div className="action-wrapper" key={item.id}>
            <div className="d-flex">
              <div className="left-col">
                <div className="d-flex">
                  <span className="action">{item.action}</span>
                  <span className="calo">{item.calo}kcal</span>
                </div>
              </div>
              <div className="right-col">
                <span className="minutes">{item.minutes} min</span>
              </div>
            </div>
            <div className="stripe" />
        </div>)
        })}
      </div>
    </div>
  );
}

export default ExerciseList;
