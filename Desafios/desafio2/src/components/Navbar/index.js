import React from 'react';
import './styles.css';

export default function Navbar(props){
    
    return(
        <nav>
            <div className="navItem navLogo">
                Logo
            </div>
            <div className="navItem navList">
                <ul>
                    <li>
                        Nossas Coleções
                    </li>
                    <li>
                        Acessórios
                    </li>
                    <li>
                        Contato
                    </li>
                </ul>
            </div>
            <div className="navCorner">
                <a href="/">
                    Login
                </a>
                <button onClick={() => {
                    localStorage.removeItem(`cart-products`);
                    props.changes([]);
                }}>
                    { props.value.length } Produtos
                </button>
            </div>
        </nav>
    )
}