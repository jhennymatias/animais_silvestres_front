/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Menu from '../../components/menu'
import Logo from '../../img/logo.jpeg';

import api from '../../services/api';


function Cadastro_Animal() {
    const [especie, setEspecie] = useState('');
    const [classe, setClasse] = useState('');
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
            <Menu />
            <div className="animal-form">
                <div className="animal-form-top">
                    <div className="logo">
                        <h3>Cadastro do Animal</h3>
                    </div>
                </div>
                <form onSubmit={handleCreateUser}>
                    <div className="animal-form-input">
                        <div className="animal-form-inputs">
                            <div className="animal-form-especie">

                                <div className="animal-form-select">
                                    <Select
                                        label="Especie"
                                        id="especie"
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
                                            setClasse(e.target.value)
                                        }} />
                                </div>
                            </div>

                            <Input
                                label="Cor"
                                type="color"
                                id="cor"
                                value={cor}
                                onChange={(e) => {
                                    setCor(e.target.value)
                                }} />
                            <Input
                                label="Foto"
                                type="text"
                                id="foto"
                                value={foto}
                                onChange={(e) => {
                                    setFoto(e.target.value)
                                }}
                            />
                            <div className="radio_sozinho">
                                <label>O animal estava sozinho (se sim marcar):</label>
                                <input
                                        type="radio"
                                        id="foto"
                                        value={foto}
                                        onChange={(e) => {
                                            setFoto(e.target.value)
                                        }}
                                    />
                                
                            </div>




                            <div className="localizacao">
                                <p>Localização da Foto</p>
                                <div className="animal-form-select">
                                    <Select
                                        label="Estado"
                                        id="estado"
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
                                    <Select
                                        label="Cidade"
                                        id="cidade"
                                        required
                                        options={[
                                            { value: 'jardim', label: 'Jardim das Avenidas' },
                                            { value: 'Araranguá', label: 'Araranguá' },
                                            { value: 'Tubarão', label: 'Tubarão' }
                                        ]}
                                        value={especie}
                                        onChange={(e) => {
                                            setEspecie(e.target.value)
                                        }} />


                                </div>
                                <Select
                                    label="Bairro"
                                    id="bairro"
                                    required
                                    options={[
                                        { value: 'Sombrio', label: 'Sombrio' },
                                        { value: 'Araranguá', label: 'Araranguá' },
                                        { value: 'Tubarão', label: 'Tubarão' }
                                    ]}
                                    value={especie}
                                    onChange={(e) => {
                                        setEspecie(e.target.value)
                                    }} />

                                <Input
                                    label="Latitude"
                                    type="localizacao"
                                    id="verify_password"
                                    value={localizacao}
                                    onChange={(e) => {
                                        setLocalizacao(e.target.value)
                                    }} />
                                <Input
                                    label="Longitude"
                                    type="localizacao"
                                    id="verify_password"
                                    value={localizacao}
                                    onChange={(e) => {
                                        setLocalizacao(e.target.value)
                                    }} />
                                <Input
                                    label="Referência"
                                    type="localizacao"
                                    id="verify_password"
                                    value={localizacao}
                                    onChange={(e) => {
                                        setLocalizacao(e.target.value)
                                    }} />
                            </div>
                        </div>


                        <div className="button-cadastro">
                            <button>Cadastrar</button>
                        </div>

                    </div>
                </form>
            </div>

        </div >
    );
}

export default Cadastro_Animal;