import { t } from 'i18next';
import './Recommended.scss';

export interface IRecommended {
  titleRecommend: string;
  subTitle: string;
}

function Recommended(props: IRecommended) {
  return (
    <div className="recommended-wrapper d-flex">
      <span className="recommended-type text-center">
        {t(props.titleRecommend)}
      </span>
      <div className="stripe" />
      <span className="sub-title">
        {t(props.subTitle)}
      </span>
    </div>
  );
}

export default Recommended;
