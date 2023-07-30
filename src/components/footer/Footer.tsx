import './Footer.scss';
import { t } from 'i18next';

function Footer() {
  const arrayFooter = [
    'FOOTER.REGISTRATION',
    'FOOTER.OPERATING_COMPANY',
    'FOOTER.TERMS',
    'FOOTER.PERSONAL_INFO',
    'FOOTER.NOTATION',
    'FOOTER.INQUIRY'
  ];
  return (
    <div className="footer-wrapper d-flex">
      <div className="main-container d-flex">
        {arrayFooter.map((footer, index) =>
          <span key={index}>
            {t(footer)}
          </span>
        )}
      </div>
    </div>
  );
}

export default Footer;
