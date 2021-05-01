/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';
import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Menu from '../../components/menu'

import api from '../../services/api';


function Cadastro_Estado() {
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const history = useHistory();

    function handleCreateState(e) {
        e.preventDefault();

        api.post('cidade', {
            descricao:cidade
        }).then(() => {
            alert('Cidade Cadastrado');
            history.push('/main');
        }).catch(() => {
            alert('Erro ao cadastrar estado');
        });

    }

    return (
        <div className="animal-container">
            <Menu />
            <div className="animal-form">
                <div className="animal-form-top">
                    <div className="logo">
                        <h3>Cadastro de Cidade</h3>
                    </div>
                </div>
                <form onSubmit={handleCreateState}>
                    <div className="animal-form-input">
                    <Select
                                        label="Estado (UF)"
                                        id="estado"
                                        required
                                        options={[
                                            { value: 'rs', label: 'Rio Grande do Sul' },
                                            { value: 'sc', label: 'Santa Catarina' },
                                            { value: 'pr', label: 'Paraná' }
                                        ]}
                                        value={estado}
                                        onChange={(e) => {
                                            setEstado(e.target.value)
                                        }} />
                        <Input
                            label="Cidade"
                            type="text"
                            id="verify_password"
                            value={cidade}
                            onChange={(e) => {
                                setCidade(e.target.value)
                            }} />
                        <div className="button-cadastro">
                            <button>Cadastrar</button>
                        </div>
                    </div>
                </form>
            </div>

        </div >
    );
}

export default Cadastro_Estado;