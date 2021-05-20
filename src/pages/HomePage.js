import React from 'react';
import { Helmet } from 'react-helmet';


import { Link } from 'react-router-dom';
import { Image, Container } from 'semantic-ui-react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {BiMessageDetail} from 'react-icons/bi';
import {VscSettingsGear} from 'react-icons/vsc';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


const HomePage = () => {
  return (
    <div id="home-page">
    <Helmet>
        <title>{ "Blake Tharp | Home" }</title>
      </Helmet>

      <h1>Hi! My name is Blake Tharp.</h1>
      <p>I am a web developer based in Cincincinati. I have a passion for building
      cool and exciting full-stack projects.</p>

      <a href="mailto:wblaketharp@gmail.com"><MdEmail size={50}/></a>
      <a href="https://github.com/wblaket"><FaGithub size={50}/></a>
      <a href="https://www.linkedin.com/in/williamblaketharp/"><FaLinkedin size={50}/></a>

    </div>
  );
};

export default HomePage;
