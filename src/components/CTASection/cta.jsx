import React from "react";
import { useTranslation } from "react-i18next";
import "./cta.css"; // Make sure the styles remain intact
import ctaBanner from "../../assets/cta-banner.jpg";

const CtaSection = () => {
  const { t } = useTranslation(); // Access translation function

  return (
    <section className="section cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="h2 section-title">{t("cta.title")}</h2>{" "}
          {/* Translated title */}
          <button className="btn btn-outline">
            <span>{t("cta.becomePartner")}</span> {/* Translated button text */}
            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <figure className="cta-banner">
          <img
            src={ctaBanner}
            width="520"
            height="520"
            loading="lazy"
            alt="Fox"
            className="img-cover"
          />
        </figure>
      </div>
    </section>
  );
};

export default CtaSection;
