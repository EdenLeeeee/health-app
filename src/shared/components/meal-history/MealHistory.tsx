import './MealHistory.scss';

export interface IMealHistory {
  height: number;
  width: number;
  backgroundImage: string;
  backgroundSize: string;
  imgText: string;
  content?: string;
  hashTag?: string;
  isColumnPage?: boolean;
}

function MealHistory(props: IMealHistory) {
  const imgStyle = {
    height: `${props.height}px`,
    width: `${props.width}px`,
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundSize: props.backgroundSize
  };

  return (
    <div style={{ width: `${props.width}px` }} className="meal-history-wrapper">
      <div style={imgStyle} className="meal-img">
        <div className={`meal-text ${props.isColumnPage && 'column-page'}`}>
          <span>
            {props.imgText}
          </span>
        </div>
      </div>
      {props.content &&
        <p className="content text-ellipsis">
          {props.content}
        </p>}
      {props.hashTag &&
        <p className="hash-tag">
          {props.hashTag}
        </p>}
    </div>
  );
}

export default MealHistory;
