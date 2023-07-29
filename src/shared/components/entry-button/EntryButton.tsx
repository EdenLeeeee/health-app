import { t } from 'i18next';
import './EntryButton.scss';

export interface IEntryButton {
  height: number;
  width: number;
  backgroundImage: string;
  backgroundSize: string;
  title: string;
  button: string;
}

function EntryButton(props: IEntryButton) {
  const imgStyle = {
    height: `${props.height}px`,
    width: `${props.width}px`,
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundSize: props.backgroundSize
  };

  return (
    <div className="entry-button-wrapper d-flex">
      <div style={imgStyle} className="entry-img d-flex" />
      <div className="entry-content d-flex">
        <span className="title">
          {t(props.title)}
        </span>
        <button type="button" className="btn">
          {t(props.button)}
        </button>
      </div>
    </div>
  );
}

export default EntryButton;
