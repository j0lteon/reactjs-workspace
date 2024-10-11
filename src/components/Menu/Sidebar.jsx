import { Link, useNavigate } from "react-router-dom";

import './Sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div id="sidebar" className="sidebar">
            <div className="d-flex justify-content-around align-items-center px-2 py-4 border-bottom rounded">
                <h4>                    
                    <b>Administrador</b>
                    <br />
                    {/* Pega o nome do usuario no banco e exibe */}
                    <b>{localStorage.getItem("nome")}</b>
                </h4>
            </div>

            <nav className="nav flex-column">
                {/* Cria os links na barra lateral né */}
                <Link className="nav-link" id="colunas" aria-current="page" to={'/home'}><p>Home</p></Link>
                <Link className="nav-link" id="colunas" to={'/produto'}><p>Produto</p></Link>
                <Link className="nav-link" id="colunas" to={'/usuario'}><p>Usuário</p></Link>
                <Link className="nav-link" id="colunas" to={'/categoria'}><p>Categoria</p></Link>
                <Link className="nav-link" id="colunas" to={'/mensagem'}><p>Mensagem</p></Link>
                <Link className="nav-link" id="colunas" to={'/catalogo'}><p>Catálogo</p></Link>
                <div id="divdologout">
                    {/* Faz o logout uai, ele remove login, o nome, os caraio tudo tlg e volta pra home */}
                    <button id="logout" onClick={() => {
                        localStorage.removeItem("login")
                        localStorage.removeItem("nome")
                        localStorage.removeItem("email")
                        navigate("/")
                    }}>Sair</button>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar