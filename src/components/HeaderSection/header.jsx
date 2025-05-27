import { useTranslation } from "react-i18next";
import { IonIcon } from "@ionic/react";
import { menuOutline, searchOutline, heartOutline } from "ionicons/icons";
import "../HeaderSection/header.css";
import Logo from "../../assets/logo.png";


const Header = ({ onMenuClick }) => {
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <header className="header" data-header>
      <div className="container">
        <h1>
          <a href="#" className="logo flex items-center">
            <img src={Logo} alt="Logo" style={{ height: "80px" }} />

          </a>
        </h1>

        <select
          name="language"
          className="lang-switch"
          onChange={handleChange}
          defaultValue={i18n.language}
        >
          <option value="english">{t("header.language.english")}</option>
          <option value="french">{t("header.language.french")}</option>
          <option value="spanish">{t("header.language.spanish")}</option>
        </select>

        <button
          className="nav-open-btn"
          aria-label={t("header.search")}
          data-nav-open-btn
          onClick={onMenuClick}
        >
          <IonIcon icon={menuOutline} />
        </button>

        <div className="header-action">
          {/* <button className="search-btn" aria-label={t("header.search")}>
            <IonIcon icon={searchOutline} />
          </button> */}

          <button className="btn btn-primary donation-btn">
            <span>{t("header.donation")}</span>
            <IonIcon icon={heartOutline} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
