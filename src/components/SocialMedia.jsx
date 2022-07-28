import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/lyle-timotheus/' target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href='https://twitter.com/LyleCodes' target="_blank" rel="noopener noreferrer">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href='https://www.instagram.com/lylecodesanything/' target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
