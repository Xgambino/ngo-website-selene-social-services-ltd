// src/components/InstaPostSection.jsx
import React from "react";
import { IoLogoInstagram } from "react-icons/io5"; // Using react-icons

import insta1 from "../../assets/insta-1.jpg";
import insta2 from "../../assets/insta-2.jpg";
import insta3 from "../../assets/insta-3.jpg";
import insta4 from "../../assets/insta-4.jpg";
import insta5 from "../../assets/insta-5.jpg";

import "./instaPost.css";

const posts = [
  { src: insta1, alt: "Lion" },
  { src: insta2, alt: "Deer" },
  { src: insta3, alt: "Wild Bear" },
  { src: insta4, alt: "Deer" },
  { src: insta5, alt: "Horses" },
];

const InstaPostSection = () => {
  return (
    <section className="insta-post">
      <ul className="insta-post-list">
        {posts.map((post, index) => (
          <li className="insta-post-item" key={index}>
            <a href="#" className="insta-post-link">
              <img
                src={post.src}
                loading="lazy"
                alt={post.alt}
                className="img-cover"
              />
              <IoLogoInstagram className="insta-icon" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InstaPostSection;
