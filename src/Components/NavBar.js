// import '../Styles/navbar.css'
import React from 'react';
import {useState} from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';

export default function NavBar(){
    const [burger, setBurger] = useState(false);

    return (
        <nav>
            <button className="burger" onClick={() => 
                setBurger(!burger)}>
                    <DehazeIcon />
                    </button>
            <div className={burger ? 'nav-menu expanded' : 'nav-menu'}>
                <ul>
                    <li>Über mich</li>
                    <li>Projekte</li>
                    <li>Kontakt</li>  
                </ul>
            </div>
        </nav>
    )
};