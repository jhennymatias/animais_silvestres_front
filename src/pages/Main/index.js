/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './styles.css';
import Menu from '../../components/menu';
import capivara from '../../img/home.jpg';
import lontra from '../../img/lontra.jpg'
import api from '../../services/api';

function Home() {
    return (
        <div className="main-container">
            <Menu />
            <div className="main-content">
            <h1>Bem-vindo, XXXX</h1>
                <p className="main-title">Capivaras</p>

                <div className="main-animal">
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

                <p className="main-title">Lontras</p>

                <div className="main-animal">
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

export default Home;