import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import subtitleImg from '../../assets/subtitle-img-green.png';
import avatar from '../../assets/testi-avatar.png';
import banner from '../../assets/testi-banner.jpg';
import "../TestimonialSection/testimonial.css";

const TestimonialSection = () => {
  const { t } = useTranslation(); // Access translation function

  return (
    <section className="testi">
      <div className="testi-content">
        <p className="section-subtitle">
          <img src={subtitleImg} width="32" height="7" alt="Wavy line" />
          <span>{t('testimonial.subtitle')}</span> {/* Translated subtitle */}
        </p>

        <h2 className="h2 section-title">
          {t('testimonial.title')} <strong>{t('testimonial.titleStrong')}</strong> {/* Translated title */}
        </h2>

        <div className="testi-card">
          <figure className="card-avatar">
            <img
              src={avatar}
              width="60"
              height="60"
              loading="lazy"
              alt={t('testimonial.avatarAlt')}  // Translated alt text
            />
          </figure>

          <div>
            <blockquote className="testi-text">
              {t('testimonial.quote')} {/* Translated quote */}
            </blockquote>

            <h3 className="testi-name">{t('testimonial.name')}</h3> {/* Translated name */}
            <p className="testi-title">{t('testimonial.position')}</p> {/* Translated position */}
          </div>
        </div>
      </div>

      <figure className="testi-banner">
        <img
          src={banner}
          width="960"
          height="846"
          loading="lazy"
          alt={t('testimonial.bannerAlt')}  // Translated alt text for banner
          className="img-cover"
        />
      </figure>
    </section>
  );
};

export default TestimonialSection;
