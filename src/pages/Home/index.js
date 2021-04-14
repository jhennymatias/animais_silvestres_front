/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import Input from '../../components/Input'
import Logo from '../../img/logo.jpeg'
import api from '../../services/api';

function Home() {
    const [LoginEmail, setLoginEmail] = useState('');
    const [LoginPassword, setLoginPassword] = useState('');
    const histoty = useHistory();

    async function handleLoginUser(e) {
        e.preventDefault();
        try {
            const response = await api.post('login', { LoginEmail, LoginPassword });
            console.log(response)
            histoty.push('/main');
        } catch (err) {
            alert("Ocorreu um erro tente novamente!");
        }
    }
    return (
        <div className="home-container">
            <div className="home-imagem">

            </div>
            <div className="home-bemvindo">
                <div className="home-bemvindo-top">
                    <img src={Logo} width="100px" />
                    <h1>Bem-vindo ao Achei</h1>
                    <p>Login</p>
                </div>
                <form onSubmit={handleLoginUser}>
                    <div className="home-bemvindo-input">
                        <div className="home-bemvindo-inputs">
                            <Input
                                label="Email"
                                type="email"
                                id="Email"
                                value={LoginEmail}
                                onChange={(e) => {
                                    setLoginEmail(e.target.value)
                                }} />
                            <Input 
                            label="Password" 
                            type="password" 
                            id="Password"
                            value={LoginPassword}
                                onChange={(e) => {
                                    setLoginPassword(e.target.value)
                                }} />
                        </div>

                        <button>Logar</button>
                        <Link to="/cadastro">Cadastrar</Link>
                    </div>
                </form>

            </div>

        </div>
    );
}

export default Home;