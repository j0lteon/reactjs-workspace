import { Link } from 'react-router-dom'
import './App.css'

import retangulo1 from '../../assets/images/retangulo1.jpeg'
import retangulo2 from '../../assets/images/retangulo2.jpeg'
import retangulo3 from '../../assets/images/retangulo3.jpeg'
import logo from '../../assets/images/Gaia Garden.png'
import ggicon from '../../assets/images/ggicon.png'
import saude from '../../assets/images/saude.png'
import vida from '../../assets/images/vida.png'
import sustentavel from '../../assets/images/sustentavel.png'

function App() {

    return (
        <div>

            <header>
                <section id='sectionlogo' className={`header1 d-flex justify-content-between align-items-center`}>
                    <img src={logo} id="logo" />
                    <section id='link'>
                        <Link id='entrada' className='btn btn-sm btn-success' to={'/login'}>
                            Login
                        </Link>
                    </section>
                </section>

                <section>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div id='divisao' className="container-fluid">
                            {/* AOOOOOOOOOOOOO POTENCIA */}.
                        </div>
                    </nav>
                </section>
            </header>

            <section className="hahhhahaahhaha">
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={retangulo1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={retangulo2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={retangulo3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <footer>

                <section className="secao2">
                    <h1 className="s2h1">Prezamos pelo bem-estar dos nossos clientes</h1>

                    <div className="cont1">
                        <img src={saude} /><br />
                        <b>Saúde e bem-estar</b>
                    </div>
                    <div className="cont1">
                        <img src={vida} alt="" /><br />
                        <b>Vida terrestre</b>
                    </div>
                    <div className="cont1">
                        <img src={sustentavel} alt="" /><br />
                        <b>Produção sustentável</b>
                    </div>
                </section>
                <div id='footer'>
                    <div className="rodape">
                        <h3>Sobre nós:</h3>
                        <p>Somos uma empresa fundada no ano de 2023. Nosso principal objetivo é levar conforto através das nossas plantas.<br />
                            Entregas <b>apenas</b> no Estado de São Paulo.</p>
                    </div>

                    <div className="divisoria"></div>

                    <div className="rodape">
                        <div className="opa">
                            <div id='rdppt1'>
                                <h4>Fale conosco:</h4>
                                <p><b>E-mail:</b> gaiagarden@atendimento.com</p>
                                <p><b>Telefone da loja:</b> (11) 34321-7762</p>
                            </div>
                            <img src={ggicon} className="rodapeimagem" />
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default App
