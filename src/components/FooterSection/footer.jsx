import React from 'react';
import "./footer.css"

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        <ul className="footer-list">
          <li>
            <a href="#" className="footer-link">Terms of use</a>
          </li>
          <li>
            <a href="#" className="footer-link">Privacy & Policy</a>
          </li>
        </ul>

        <p className="copyright">
          Copyright {year}{' '}
          <a href="#" className="copyright-link">
            Selene Social Services
          </a>. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
