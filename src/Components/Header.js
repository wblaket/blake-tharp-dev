import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Container } from 'semantic-ui-react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {BiMessageDetail} from 'react-icons/bi';
import {VscSettingsGear} from 'react-icons/vsc';
import {AiOutlineFundProjectionScreen, AiOutlineHome} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';

const Header = () => (
  <>
  <div id="header">
  <Image id="profile-pic" src="profile-pic.png" size="medium" circular/>

    <div id="links">
      <span><Link to="/"><AiOutlineHome size={50}/>Home</Link></span>
      <span><Link to="/about"><BsPerson size={50}/>About</Link></span>
      <span><Link to="/projects"><AiOutlineFundProjectionScreen size={50} />Projects</Link></span>
      <span><Link to="/skills"><VscSettingsGear size={50} />Skills</Link></span>
      <span><Link to="/contact"><BiMessageDetail size={50} />Contact</Link></span>

      <hr />
    </div>
  </div>
  </>
);

export default Header;
