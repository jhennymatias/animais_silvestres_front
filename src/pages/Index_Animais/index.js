/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './styles.css';
import Menu from '../../components/menu';
import capivara from '../../img/home.jpg';
import lontra from '../../img/lontra.jpg'
import api from '../../services/api';

function IndexAnimais() {
    return (
        <div className="index-container">
            <Menu />
            <div className="index-content">
            <h1>Bem-vindo, XXXX</h1>
                <p className="index-title">Capivaras</p>

                <div className="index-animal">
                    <div className="animal-item">
                        <img src={capivara} className="animal-img" />
                        <div className="info">
                            <p>Data: 12/04/2021</p>
                            <p>Fotografo: Jhennifer Matias</p>
                            <p>Local: Balneario Gaivota - SC</p>
                        </div>
                    </div>
                    <div className="animal-item">
                        <img src={capivara} className="animal-img" />
                        <div className="info">
                            <p>Data: 12/04/2021</p>
                            <p>Fotografo: Jhennifer Matias</p>
                            <p>Local: Balneario Gaivota - SC</p>
                        </div>

                    </div>
                    <div className="animal-item">
                        <img src={capivara} className="animal-img" />
                        <div className="info">
                            <p>Data: 12/04/2021</p>
                            <p>Fotografo: Jhennifer Matias</p>
                            <p>Local: Balneario Gaivota - SC</p>
                        </div>
                    </div>
                </div>

                <p className="index-title">Lontras</p>

                <div className="index-animal">
                    <div className="animal-item">
                        <img src={lontra} className="animal-img" />
                        <div className="info">
                            <p>Data: 12/04/2021</p>
                            <p>Fotografo: Jhennifer Matias</p>
                            <p>Local: Balneario Gaivota - SC</p>
                        </div>
                    </div>
                    <div className="animal-item">
                        <img src={lontra} className="animal-img" />
                        <div className="info">
                            <p>Data: 12/04/2021</p>
                            <p>Fotografo: Jhennifer Matias</p>
                            <p>Local: Balneario Gaivota - SC</p>
                        </div>

                    </div>
                    <div className="animal-item">
                        <img src={lontra} className="animal-img" />
                        <div className="info">
                            <p>Data: 12/04/2021</p>
                            <p>Fotografo: Jhennifer Matias</p>
                            <p>Local: Balneario Gaivota - SC</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default IndexAnimais;