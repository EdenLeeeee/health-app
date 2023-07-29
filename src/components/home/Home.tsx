import './Home.scss';
import mainPhoto from '../../assets/img/main_photo.svg';
import iconKnife from '../../assets/icons/icon_knife.svg';
import iconCup from '../../assets/icons/icon_cup.svg';
import { FunctionButton, MealHistory } from 'shared';
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
  const height: number = 234;
  const width: number = 234;

  useEffect(() => {
    getMealHistory().then((res: IResponseAPI<IDummyMealHistory[]>) => {
      setMealHistory(res.data);
    });
  }, []);

  return (
    <div className="home-wrapper">
      <div className="top-home">
        <div className="achievement-rate">
          <img src={mainPhoto} alt="" />
        </div>
        <div className="body-weight" />
      </div>

      <div className="buttons-function d-flex">
        {arrayFunctionButton.map((item, index) =>
          <FunctionButton key={index} icon={item.icon} text={t(item.text)} />
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
        <button type="button" className="btn">
          {t('HOME.SEE_MORE_RECORDS')}
        </button>
      </div>
    </div>
  );
}

export default Home;
