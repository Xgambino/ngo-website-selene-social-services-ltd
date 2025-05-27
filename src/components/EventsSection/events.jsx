import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import subtitleImgGreen from '../../assets/subtitle-img-green.png';
import { IoArrowForward, IoHeartOutline } from 'react-icons/io5';
import './events.css';

const events = [
  {
    datetime: '01-05',
    month: 'Jan',
    date: '05',
    subtitle: 'Ocean Water',
    title: 'Far from the countries Vokalia and Consonantia 2022',
    description: 'Sit amet consectetur adipiscing elit sed do eiusmod tempor',
  },
  {
    datetime: '02-23',
    month: 'Feb',
    date: '23',
    subtitle: 'Ocean Water',
    title: 'Far from the countries Vokalia and Consonantia 2022',
    description: 'Sit amet consectetur adipiscing elit sed do eiusmod tempor',
  },
  {
    datetime: '03-27',
    month: 'Mar',
    date: '27',
    subtitle: 'Ocean Water',
    title: 'Far from the countries Vokalia and Consonantia 2022',
    description: 'Sit amet consectetur adipiscing elit sed do eiusmod tempor',
  },
];

const EventSection = () => {
  const { t } = useTranslation(); // Access translation function

  return (
    <section className="section event" id="event">
      <div className="container">

        <p className="section-subtitle">
          <img src={subtitleImgGreen} width="32" height="7" alt="Wavy line" />
          <span>{t('event.subtitle')}</span> {/* Translated subtitle */}
          <img src={subtitleImgGreen} width="32" height="7" alt="Wavy line" />
        </p>

        <h2 className="h2 section-title">
          {t('event.title')} <strong>{t('event.titleStrong')}</strong> {/* Translated title */}
        </h2>

        <ul className="event-list">
          {events.map((event, index) => (
            <li key={index}>
              <div className="event-card">
                <time className="card-time" dateTime={event.datetime}>
                  <span className="month">{event.month}</span>
                  <span className="date">{event.date}</span>
                </time>

                <div className="wrapper">
                  <div className="card-content">
                    <p className="card-subtitle">{event.subtitle}</p>
                    <h3 className="card-title">{event.title}</h3>
                    <p className="card-text">{event.description}</p>
                  </div>

                  <button className="btn btn-white">
                    <span>{t('event.viewEvents')}</span> {/* Translated button text */}
                    <IoArrowForward aria-hidden="true" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button className="btn btn-secondary">
          <span>{t('event.learnMore')}</span> {/* Translated button text */}
          <IoHeartOutline aria-hidden="true" />
        </button>

      </div>
    </section>
  );
};

export default EventSection;
