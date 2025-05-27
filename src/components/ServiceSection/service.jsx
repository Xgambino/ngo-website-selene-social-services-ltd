import React from 'react';
import { useTranslation } from 'react-i18next';
import { IonIcon } from '@ionic/react';
import {
  leafOutline,
  earthOutline,
  flowerOutline,
  boatOutline,
  arrowForward,
} from 'ionicons/icons';
import serviceBg from '../../assets/service-map.png';
import subtitleImg from '../../assets/subtitle-img-green.png';
import './service.css';

const ServiceSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: leafOutline,
      title: t('services.saveNatureTitle'),
      text: t('services.saveNatureText'),
    },
    {
      icon: earthOutline,
      title: t('services.saveEcologyTitle'),
      text: t('services.saveEcologyText'),
    },
    {
      icon: flowerOutline,
      title: t('services.treePlantationTitle'),
      text: t('services.treePlantationText'),
    },
    {
      icon: boatOutline,
      title: t('services.clearOceanTitle'),
      text: t('services.clearOceanText'),
    },
  ];

  return (
    <section
      className="section service"
      id="service"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <div className="container">
        <p className="section-subtitle">
          <img src={subtitleImg} width="32" height="7" alt="Wavy line" />
          <span>{t('services.subtitle')}</span>
        </p>

        <h2 className="h2 section-title">
          {t('services.title.part1')} <strong>{t('services.title.part2')}</strong>
        </h2>

        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index}>
              <div className="service-card">
                <div className="card-icon">
                  <IonIcon icon={service.icon} />
                </div>

                <h3 className="h3 card-title">{service.title}</h3>

                <p className="card-text">{service.text}</p>

                <a href="#" className="btn-link">
                  <span>{t('services.readMore')}</span>
                  <IonIcon icon={arrowForward} aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceSection;
