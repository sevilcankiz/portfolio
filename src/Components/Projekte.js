import React from 'react'
import '../Styles/projekte.css';
import ToDo from '../img/To-Do.png';

export default function Projekte() {
  return (
    <main>
        <section>
            <h4>Projekte</h4>
            <br/>
            <a href="https://635563dfebafdd0c8e99bedc--clever-froyo-71659b.netlify.app/" target="_blank" rel="noreferrer">
            <img src={ToDo} alt="projekt"/>
            </a>
            <p>To-Do list</p>
        </section>
    </main>
  )
}
