import React from 'react'
import '../Styles/landingpage.css'
import Profilpicture from '../img/Sevil2.jpg';
import Projekte from './Projekte';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


export default function Landingpage() {
  return (
    <div className='main'>
      <header>
        <img src={Profilpicture} alt="me"/>
        <br/>
        <article>Sevil Sentürk</article>
        <p>Junior full stack Web Developer</p>
        <section className='links'>
          <a href='https://github.com/sevilcankiz' target="_blank" rel="noreferrer" abbr title="GitHub"><GitHubIcon /></a>
          <a href='https://www.linkedin.com/in/sevil-sent%C3%BCrk-5b1b3b1b3/' target="_blank" rel="noreferrer" abbr title="LinkedIn"><LinkedInIcon /></a>
          <a href='mailto:sevilsentuerk@hotmail.com' target="_blank" rel="noreferrer" abbr title="E-Mail"><AlternateEmailIcon /></a>
        </section>
      </header>
      <Projekte />
    </div>
  )
}
