import React from "react";
import { IonIcon } from "@ionic/react";
import { heartOutline } from "ionicons/icons";
import "../HeroSection/hero.css";

import subtitleWhite from "../../assets/subtitle-img-white.png";

const Hero = () => {
  return (
    <main>
      <article>
        {/* HERO Section */}
        <section className="hero" id="home">
          <div className="container">
            <p className="section-subtitle">
              <img src={subtitleWhite} width="32" height="7" alt="Wavy line" />
              <span>Welcome to Selene Social Service L.T.D.</span>
            </p>

            <h2 className="h1 hero-title">
              Give Love for Saving <strong>Humans</strong>
            </h2>

            <p className="hero-text">
              Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              suspendisse ultrices gravida.
            </p>

            <button className="btn btn-primary">
              <span>Donation</span>
              <IonIcon icon={heartOutline} aria-hidden="true" />
            </button>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Hero;
