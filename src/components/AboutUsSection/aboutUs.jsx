import React from "react";
import { IonIcon } from "@ionic/react";
import { checkmarkCircle, heartOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";
import "./aboutUs.css";

import decoImg from "../../assets/deco-img.png";
import about1 from "../../assets/about-banner-1.jpg";
import about2 from "../../assets/about-banner-2.jpg";
import about3 from "../../assets/about-banner-3.jpg";
import about4 from "../../assets/about-banner-4.jpg";
import subtitleGreen from "../../assets/subtitle-img-green.png";

const AboutUs = () => {
  const { t } = useTranslation(); // Access translation function

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-banner">
          <h2 className="deco-title">{t("about.title")}</h2> {/* Translated Title */}
          <img
            src={decoImg}
            width="58"
            height="261"
            alt=""
            className="deco-img"
          />
          <div className="banner-row">
            <div className="banner-col">
              <img
                src={about1}
                width="315"
                height="380"
                loading="lazy"
                alt="Tiger"
                className="about-img w-100"
              />
              <img
                src={about2}
                width="386"
                height="250"
                loading="lazy"
                alt="Panda"
                className="about-img about-img-2 w-100"
              />
            </div>
            <div className="banner-col">
              <img
                src={about3}
                width="250"
                height="277"
                loading="lazy"
                alt="Elephant"
                className="about-img about-img-3 w-100"
              />
              <img
                src={about4}
                width="315"
                height="380"
                loading="lazy"
                alt="Deer"
                className="about-img w-100"
              />
            </div>
          </div>
        </div>

        <div className="about-content">
          <p className="section-subtitle">
            <img
              src={subtitleGreen}
              width="32"
              height="7"
              alt="Wavy line"
            />
            <span>{t("about.whyChooseUs")}</span> {/* Translated subtitle */}
          </p>

          <h2 className="h2 section-title">
            {t("about.title2")} <strong>{t("about.titleStrong")}</strong> {/* Translated heading */}
          </h2>

          <ul className="tab-nav">
            <li>
              <button className="tab-btn active">{t("about.mission")}</button> {/* Translated tabs */}
            </li>
            <li>
              <button className="tab-btn">{t("about.vision")}</button>
            </li>
            <li>
              <button className="tab-btn">{t("about.nextPlan")}</button>
            </li>
          </ul>

          <div className="tab-content">
            <p className="section-text">
              {t("about.tabContent")} {/* Translated content */}
            </p>

            <ul className="tab-list">
              <li className="tab-item">
                <div className="item-icon">
                  <IonIcon icon={checkmarkCircle} />
                </div>
                <p className="tab-text">{t("about.charityFood")}</p> {/* Translated list items */}
              </li>
              <li className="tab-item">
                <div className="item-icon">
                  <IonIcon icon={checkmarkCircle} />
                </div>
                <p className="tab-text">{t("about.charityEducation")}</p>
              </li>
              <li className="tab-item">
                <div className="item-icon">
                  <IonIcon icon={checkmarkCircle} />
                </div>
                <p className="tab-text">{t("about.charityWater")}</p>
              </li>
              <li className="tab-item">
                <div className="item-icon">
                  <IonIcon icon={checkmarkCircle} />
                </div>
                <p className="tab-text">{t("about.charityMedical")}</p>
              </li>
            </ul>

            <button className="btn btn-secondary">
              <span>{t("about.learnMore")}</span> {/* Translated button text */}
              <IonIcon icon={heartOutline} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
