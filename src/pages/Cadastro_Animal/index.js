/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';

import Logo from '../../img/logo.jpeg';

import api from '../../services/api';


function Cadastro_Animal() {
    const [especie, setEspecie] = useState('');
    const [cor, setCor] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [foto, setFoto] = useState('');
    const [user, setUser] = useState('');
    const history = useHistory();


    function handleCreateUser(e) {
        e.preventDefault();

        // if (handleVerifyPasswordEquals()) {
        //     api.post('user', {
        //         name,
        //         email,
        //         password
        //     }).then(() => {
        //         alert('Registration completed');
        //         history.push('/');
        //     }).catch(() => {
        //         alert('Erro ao registrar');
        //     });
        // } else {
        //     alert("Different passwords")
        // }
    }

    return (
        <div className="animal-container">
            <div className="animal-form">
                <div className="animal-form-top">
                    <div className="logo">
                        <img src={Logo} width="100px" />
                        <h1>Bem-vindo ao Achei</h1>
                    </div>
                    <p>Cadastro Animais</p>
                </div>
                <form onSubmit={handleCreateUser}>
                    <div className="animal-form-input">
                        <div className="animal-form-inputs">
                            <div>
                                <p>Espécie</p>
                                <Select
                                    label="Especie"
                                    id="name"
                                    required
                                    options={[
                                        { value: 'gato_mato', label: 'Gato do Mato' },
                                        { value: 'lontra', label: 'Lontra' },
                                        { value: 'paca', label: 'Paca' }
                                    ]}
                                    value={especie}
                                    onChange={(e) => {
                                        setEspecie(e.target.value)
                                    }} />

                                <Select
                                    label="Classe"
                                    id="classe"
                                    required
                                    options={[
                                        { value: 'mamifero', label: 'Mamifero' },
                                        { value: 'ave', label: 'Ave' },
                                        { value: 'reptil', label: 'Reptil' }
                                    ]}
                                    value={especie}
                                    onChange={(e) => {
                                        setEspecie(e.target.value)
                                    }} />
                            </div>

                            <Input
                                label="Cor"
                                type="color"
                                id="email"
                                value={cor}
                                onChange={(e) => {
                                    setCor(e.target.value)
                                }} />
                            <Input
                                label="Foto"
                                type="text"
                                id="password"
                                value={foto}
                                onChange={(e) => {
                                    setFoto(e.target.value)
                                }}
                            />
                            <Input
                                label="Localizacao"
                                type="password"
                                id="verify_password"
                                value={localizacao}
                                onChange={(e) => {
                                    setLocalizacao(e.target.value)
                                }} />

                        </div>

                        <div className="botton">
                            <button>Cadastrar</button>
                            <Link to="/">Logar</Link>
                        </div>

                    </div>
                </form>
            </div>

        </div>
    );
}

export default Cadastro_Animal;