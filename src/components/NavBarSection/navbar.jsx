import React from "react";
import { IonIcon } from "@ionic/react";
import { closeOutline, chevronForwardOutline } from "ionicons/icons";
import "../NavBarSection/navbar.css"; 

const Navbar = ({ isOpen, onClose }) => {
  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`} data-navbar>
      <button className="nav-close-btn" aria-label="Close Menu" onClick={onClose}>
        <IonIcon icon={closeOutline} />
      </button>

      <a href="#" className="logo">SSSL</a>

      <ul className="navbar-list">
        {["home", "about", "service", "donate", "event", "contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className="navbar-link"
              onClick={onClose}
            >
              <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              <IonIcon icon={chevronForwardOutline} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
