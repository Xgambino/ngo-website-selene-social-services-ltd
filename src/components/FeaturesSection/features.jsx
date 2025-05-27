import React from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import { IonIcon } from "@ionic/react";
import { shieldCheckmarkOutline, waterOutline, leafOutline, snowOutline } from "ionicons/icons";
import "./features.css";

const Features = () => {
  const { t } = useTranslation(); // Access translation function

  return (
    <section className="section features">
      <div className="container">
        <ul className="features-list">
          <li className="features-item">
            <div className="item-icon">
              <IonIcon icon={shieldCheckmarkOutline} />
            </div>
            <div>
              <h3 className="h4 item-title">{t('features.safeShelterTitle')}</h3> {/* Translated title */}
              <p className="item-text">{t('features.safeShelterDescription')}</p> {/* Translated description */}
            </div>
          </li>

          <li className="features-item">
            <div className="item-icon">
              <IonIcon icon={waterOutline} />
            </div>
            <div>
              <h3 className="h4 item-title">{t('features.safeWaterTitle')}</h3> {/* Translated title */}
              <p className="item-text">{t('features.safeWaterDescription')}</p> {/* Translated description */}
            </div>
          </li>

          <li className="features-item">
            <div className="item-icon">
              <IonIcon icon={leafOutline} />
            </div>
            <div>
              <h3 className="h4 item-title">{t('features.ecologySaveTitle')}</h3> {/* Translated title */}
              <p className="item-text">{t('features.ecologySaveDescription')}</p> {/* Translated description */}
            </div>
          </li>

          <li className="features-item">
            <div className="item-icon">
              <IonIcon icon={snowOutline} />
            </div>
            <div>
              <h3 className="h4 item-title">{t('features.environmentTitle')}</h3> {/* Translated title */}
              <p className="item-text">{t('features.environmentDescription')}</p> {/* Translated description */}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
