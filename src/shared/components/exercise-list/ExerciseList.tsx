import { t } from 'i18next';
import './ExerciseList.scss';

export interface IExercise {
  title: string;
  calo: number;
  minutes: number;
}

export interface IExerciseObj {
  date: string;
  exerciseData: IExercise[];
}

function ExerciseList() {
  return (
    <div className="exercise-list-wrapper d-flex">
      <div className="header d-flex">
        <span className="title">
          {t('MY_RECORDS.MY_EXERCISE.TITLE')}
        </span>
        <span className="date">2021.05.21</span>
      </div>
      <div className="list-data">
        <div className="action-wrapper">
          <div className="d-flex">
            <div className="left-col">
              <div className="d-flex">
                <span className="action">家事全般（立位・軽い）</span>
                <span className="calo">26kcal</span>
              </div>
            </div>
            <div className="right-col">
              <span className="minutes">10 min</span>
            </div>
          </div>
          <div className="stripe" />
        </div>
        <div className="action-wrapper">
          <div className="d-flex">
            <div className="left-col">
              <div className="d-flex">
                <span className="action">家事全般（立位・軽い）</span>
                <span className="calo">26kcal</span>
              </div>
            </div>
            <div className="right-col">
              <span className="minutes">10 min</span>
            </div>
          </div>
          <div className="stripe" />
        </div>
        <div className="action-wrapper">
          <div className="d-flex">
            <div className="left-col">
              <div className="d-flex">
                <span className="action">家事全般（立位・軽い）</span>
                <span className="calo">26kcal</span>
              </div>
            </div>
            <div className="right-col">
              <span className="minutes">10 min</span>
            </div>
          </div>
          <div className="stripe" />
        </div>


        <div className="action-wrapper">
          <div className="d-flex">
            <div className="left-col">
              <div className="d-flex">
                <span className="action">家事全般（立位・軽い）</span>
                <span className="calo">26kcal</span>
              </div>
            </div>
            <div className="right-col">
              <span className="minutes">10 min</span>
            </div>
          </div>
          <div className="stripe" />
        </div>
        <div className="action-wrapper">
          <div className="d-flex">
            <div className="left-col">
              <div className="d-flex">
                <span className="action">家事全般（立位・軽い）</span>
                <span className="calo">26kcal</span>
              </div>
            </div>
            <div className="right-col">
              <span className="minutes">10 min</span>
            </div>
          </div>
          <div className="stripe" />
        </div>
        <div className="action-wrapper">
          <div className="d-flex">
            <div className="left-col">
              <div className="d-flex">
                <span className="action">家事全般（立位・軽い）</span>
                <span className="calo">26kcal</span>
              </div>
            </div>
            <div className="right-col">
              <span className="minutes">10 min</span>
            </div>
          </div>
          <div className="stripe" />
        </div>
        <div className="action-wrapper">
          <div className="d-flex">
            <div className="left-col">
              <div className="d-flex">
                <span className="action">家事全般（立位・軽い）</span>
                <span className="calo">26kcal</span>
              </div>
            </div>
            <div className="right-col">
              <span className="minutes">10 min</span>
            </div>
          </div>
          <div className="stripe" />
        </div>
        <div className="action-wrapper">
          <div className="d-flex">
            <div className="left-col">
              <div className="d-flex">
                <span className="action">家事全般（立位・軽い）</span>
                <span className="calo">26kcal</span>
              </div>
            </div>
            <div className="right-col">
              <span className="minutes">10 min</span>
            </div>
          </div>
          <div className="stripe" />
        </div>
        <div className="action-wrapper">
          <div className="d-flex">
            <div className="left-col">
              <div className="d-flex">
                <span className="action">家事全般（立位・軽い）</span>
                <span className="calo">26kcal</span>
              </div>
            </div>
            <div className="right-col">
              <span className="minutes">10 min</span>
            </div>
          </div>
          <div className="stripe" />
        </div>
        <div className="action-wrapper">
          <div className="d-flex">
            <div className="left-col">
              <div className="d-flex">
                <span className="action">家事全般（立位・軽い）</span>
                <span className="calo">26kcal</span>
              </div>
            </div>
            <div className="right-col">
              <span className="minutes">10 min</span>
            </div>
          </div>
          <div className="stripe" />
        </div>
        <div className="action-wrapper">
          <div className="d-flex">
            <div className="left-col">
              <div className="d-flex">
                <span className="action">家事全般（立位・軽い）</span>
                <span className="calo">26kcal</span>
              </div>
            </div>
            <div className="right-col">
              <span className="minutes">10 min</span>
            </div>
          </div>
          <div className="stripe" />
        </div>
        <div className="action-wrapper">
          <div className="d-flex">
            <div className="left-col">
              <div className="d-flex">
                <span className="action">家事全般（立位・軽い）</span>
                <span className="calo">26kcal</span>
              </div>
            </div>
            <div className="right-col">
              <span className="minutes">10 min</span>
            </div>
          </div>
          <div className="stripe" />
        </div>
        <div className="action-wrapper">
          <div className="d-flex">
            <div className="left-col">
              <div className="d-flex">
                <span className="action">家事全般（立位・軽い）</span>
                <span className="calo">26kcal</span>
              </div>
            </div>
            <div className="right-col">
              <span className="minutes">10 min</span>
            </div>
          </div>
          <div className="stripe" />
        </div>
        <div className="action-wrapper">
          <div className="d-flex">
            <div className="left-col">
              <div className="d-flex">
                <span className="action">家事全般（立位・軽い）</span>
                <span className="calo">26kcal</span>
              </div>
            </div>
            <div className="right-col">
              <span className="minutes">10 min</span>
            </div>
          </div>
          <div className="stripe" />
        </div>
        <div className="action-wrapper">
          <div className="d-flex">
            <div className="left-col">
              <div className="d-flex">
                <span className="action">家事全般（立位・軽い）</span>
                <span className="calo">26kcal</span>
              </div>
            </div>
            <div className="right-col">
              <span className="minutes">10 min</span>
            </div>
          </div>
          <div className="stripe" />
        </div>
      </div>
    </div>
  );
}

export default ExerciseList;
