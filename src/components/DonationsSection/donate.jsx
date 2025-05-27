import React from 'react';
import { IonIcon } from '@ionic/react';
import { heartOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';  // Import the translation hook
import './donate.css';

import donate1 from '../../assets/donate-1.jpg';
import donate2 from '../../assets/donate-2.jpg';
import donate3 from '../../assets/donate-3.jpg';
import donate4 from '../../assets/donate-4.jpg';

const donationData = [
  {
    image: donate1,
    raised: '$256',
    progress: '83%',
    goal: '$34562',
    raise: '$562',
    toGo: '$864',
  },
  {
    image: donate2,
    raised: '$256',
    progress: '83%',
    goal: '$34562',
    raise: '$562',
    toGo: '$864',
  },
  {
    image: donate3,
    raised: '$256',
    progress: '83%',
    goal: '$34562',
    raise: '$562',
    toGo: '$864',
  },
  {
    image: donate4,
    raised: '$256',
    progress: '83%',
    goal: '$34562',
    raise: '$562',
    toGo: '$864',
  },
];

const DonateSection = () => {
  const { t } = useTranslation();  // Access translation function

  return (
    <section className="section donate" id="donate">
      <div className="container">
        <ul className="donate-list">
          {donationData.map((item, index) => (
            <li key={index}>
              <div className="donate-card">
                <figure className="card-banner">
                  <img
                    src={item.image}
                    width="520"
                    height="325"
                    loading="lazy"
                    alt={t('donate.altText')}  // Translated alt text
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <div className="progress-wrapper">
                    <p className="progress-text">
                      <span>{t('donate.raised')}</span> {/* Translated raised text */}
                      <data value="256">{item.raised}</data>
                    </p>
                    <data className="progress-value" value="83">
                      {item.progress}
                    </data>
                  </div>

                  <div className="progress-box">
                    <div className="progress"></div>
                  </div>

                  <h3 className="h3 card-title">{t('donate.title')}</h3> {/* Translated title */}

                  <div className="card-wrapper">
                    <p className="card-wrapper-text">
                      <span>{t('donate.goal')}</span>
                      <data className="green" value="34562">{item.goal}</data>
                    </p>
                    <p className="card-wrapper-text">
                      <span>{t('donate.raise')}</span>
                      <data className="yellow" value="562">{item.raise}</data>
                    </p>
                    <p className="card-wrapper-text">
                      <span>{t('donate.toGo')}</span>
                      <data className="cyan" value="864">{item.toGo}</data>
                    </p>
                  </div>

                  <button className="btn btn-secondary">
                    <span>{t('donate.donateButton')}</span> {/* Translated button text */}
                    <IonIcon icon={heartOutline} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DonateSection;
