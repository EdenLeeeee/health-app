import './Home.scss';
import mainPhoto from '../../assets/img/main_photo.svg';
import iconKnife from '../../assets/icons/icon_knife.svg';
import iconCup from '../../assets/icons/icon_cup.svg';
import { FunctionButton, MealHistory } from 'shared';
import { t } from 'i18next';
import { getMealHistory } from 'apis';
import { useEffect, useState } from 'react';
import { IDummyData, IResponseAPI } from 'intefaces';

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
  const [mealHistory, setMealHistory] = useState([]);

  useEffect(() => {
    getMealHistory()
      .then((res: IResponseAPI<IDummyData[]>) => {
        setMealHistory(res.data);
        console.log(mealHistory)
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

      <div className="buttons-function">
        {arrayFunctionButton.map((item, index) =>
          <FunctionButton key={index} icon={item.icon} text={t(item.text)} />
        )}
      </div>

      <div className="meal-history">
        {/* <MealHistory /> */}
      </div>
    </div>
  );
}

export default Home;
