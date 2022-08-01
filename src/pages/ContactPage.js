import React from 'react';
import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';



const ContactPage = () => {
  return (
    <div id="contact-page">
    <Helmet>
        <title>{ "Blake Tharp | Contact" }</title>
      </Helmet>

    <h1>Let's Talk!</h1>
    <p>Want to reach me? Quickest way to contact me is via email at   <a href="mailto:blake.tharp@outlook.com">blake.tharp@outlook.com </a>
    or by messaging me on <a href="https://www.linkedin.com/in/williamblaketharp/">LinkedIn</a></p>
    <a href="mailto:wblaketharp@gmail.com"><MdEmail size={50}/></a>
    <Link to="https://github.com/wblaket"><FaGithub size={50}/></Link>
    <Link to="https://www.linkedin.com/in/williamblaketharp/"><FaLinkedin size={50}/></Link>
    </div>
  );
};

export default ContactPage;
