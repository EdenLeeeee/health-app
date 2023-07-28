import './MealHistory.scss';

export interface IMealHistory {
  height: string;
  width: string;
  backgroundImage: string;
}

function MealHistory(props: IMealHistory) {
  const imgStyle = {
    height: props.height,
    width: props.width,
    backgroundImage: `url(${props.backgroundImage})`
  };

  return (
    <div className="meal-history-wrapper">
      <div style={imgStyle} className="meal-img">
        <div className="meal-text">
          <span>test</span>
        </div>
      </div>
    </div>
  );
}

export default MealHistory;
