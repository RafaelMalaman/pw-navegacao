import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/conteudo01/123">Conteudo 01</Link>
                </li>
                <li>
                    <Link to="/conteudo02">Conteudo 02</Link>
                </li>
                <li>
                    <Link to="/conteudo03">Conteudo 03</Link>
                </li>
                <li>
                    <Link to="/conteudo04">Conteudo 04</Link>
                </li>
                
            </ul>
        </nav>
    </aside>
)
export default Menu