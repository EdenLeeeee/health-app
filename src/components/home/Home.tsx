import './Home.scss';
import mainPhoto from '../../assets/img/main_photo.svg';
import iconKnife from '../../assets/icons/icon_knife.svg';
import iconCup from '../../assets/icons/icon_cup.svg';
import { FunctionButton, LineChart, MealHistory } from 'shared';
import { t } from 'i18next';
import { getMealHistory } from 'apis';
import { useEffect, useState } from 'react';
import { IDummyMealHistory, IResponseAPI } from 'interfaces';

function Home() {
  const arrayFunctionButton = [
    {
      icon: iconKnife,
      text: 'HOME.MORNING'
    },
    {
      icon: iconKnife,
      text: 'HOME.LUNCH'
    },
    {
      icon: iconKnife,
      text: 'HOME.DINNER'
    },
    {
      icon: iconCup,
      text: 'HOME.SNACK'
    }
  ];
  const [mealHistory, setMealHistory] = useState([] as IDummyMealHistory[]);
  const [isLoadMore, setIsLoadMore] = useState(true);
  const height: number = 234;
  const width: number = 234;
  const lineChartDimension = {
    height: 293,
    width: 589
  };

  useEffect(() => {
    if (isLoadMore) {
      getMealHistory().then((res: IResponseAPI<IDummyMealHistory[]>) => {
        setMealHistory( [...mealHistory, ...(res?.data || [])]);
        setIsLoadMore(false);
      }).catch(() => setIsLoadMore(false));

      return () => setIsLoadMore(false);
    }
  }, [isLoadMore, mealHistory]);

  return (
    <div className="home-wrapper">
      <div className="top-home">
        <div className="achievement-rate">
          <img src={mainPhoto} alt="" />
        </div>
        <div className="body-weight">
          <LineChart
            isShowButton={false}
            isShowHeader={false}
            height={lineChartDimension.height}
            width={lineChartDimension.width}
          />
        </div>
      </div>

      <div className="main-container">
        <div className="buttons-function d-flex">
          {arrayFunctionButton.map((item, index) =>
            <FunctionButton key={index} icon={item.icon} text={item.text} />
          )}
        </div>

        <div className="meal-history d-flex">
          {mealHistory.map(item =>
            <MealHistory
              key={item.id}
              height={height}
              width={width}
              backgroundImage={item.img}
              backgroundSize="auto 100%"
              imgText={item.date}
            />
          )}
        </div>

        <div className="button-style d-flex">
          <button onClick={() => setIsLoadMore(true)} type="button" className="btn">
            {t('HOME.SEE_MORE_RECORDS')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
