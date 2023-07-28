import { t } from 'i18next';
import './FunctionButton.scss';

export interface IFunctionButton {
  icon: string;
  text: string;
}

function FunctionButton(props: IFunctionButton) {
  return (
    <div className="function-button-wrapper">
      <div className="icon-button">
        <img src={props.icon} alt="" />
        <span>
          {t(props.text)}
        </span>
      </div>
    </div>
  );
}

export default FunctionButton;
