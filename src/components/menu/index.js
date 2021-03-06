import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaPlus, FaHome, FaInfo } from 'react-icons/fa';
import Logo from '../../img/logo.jpeg'
function Menu() {
    return (
        <div className="menu">
            <div className="logo">
                <img src={Logo} />
            </div>

            <div className="links">
                <Link className="btn-header" to="/"><FaHome size={25} color="white" /> <p>Home</p></Link>
                <Link className="btn-header" to="/cadastroAnimal"><FaPlus size={25} color="white" /><p>Cadastrar</p></Link>
                <Link className="btn-header" to="/indexanimais"><FaInfo size={25} color="white" /><p>Meus animais</p></Link>
            </div>
        </div>
    );
}

export default Menu;