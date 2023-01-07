import React from 'react'
import '../Styles/projekte.css';
import ToDo from '../img/To-Do.jpg';
// import Beispiel from '../img/b.jpg';

export default function Projekte() {
  return (
    <main>
        <h4>Projekte</h4>
        <section>
          <div className="projects">
            <div className='img-hover'>
              <a href="https://clever-froyo-71659b.netlify.app/" target="_blank" rel="noreferrer">
              <img src={ToDo} alt="projekt"/></a>
            </div>  
              <p>To-Do list</p>
          </div>
          {/* <div className="projects">
            <div className='img-hover'>
              <img src={Beispiel} alt="projekt"/>
            </div>  
              <p>To-Do list</p>
          </div>  */}
        </section>
    </main>
  )
}
