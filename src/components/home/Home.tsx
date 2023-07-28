import { t } from 'i18next';
import './Home.scss';
import logo from '../../logo.svg';

function Home() {
  return (
    <div className="home-wrapper">
      <img src={logo} className="App-logo" alt="logo" />
      <p dangerouslySetInnerHTML={{ __html: t('CONTENT_REACT') }} />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('BUTTON_LEARN_REACT')}
      </a>
    </div>
  );
}

export default Home;
