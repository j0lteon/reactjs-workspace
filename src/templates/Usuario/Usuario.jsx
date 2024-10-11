import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { useEffect, useState } from "react"
import UsuarioService from "../../services/UsuarioService"
import './Usuario.css'
import useRequisitar from "../../hooks/useRequisitar"

const Usuario = () => {

    const navigate = useNavigate();

    const goTo = (id) => {
        navigate(`/usuarioeditar/${id}`);
    }

    const [usuarios, carregando] = useRequisitar("usuario/findAll")
    const [searchTerm, setSearchTerm] = useState(''); // Estado para a barra de pesquisa

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value); // Atualiza o termo de busca
    }

    const filteredUsuarios = usuarios?.filter((usuario) =>
        usuario.nome.toLowerCase().includes(searchTerm.toLowerCase()) // Filtra os usuários pelo nome
    );

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-2 w-100">
                <Header goto={'/home'} title={'Usuário'} logo={logo} />
                <section id="bordinha" className="m-2 p-3 shadow-lg">
                    <div className="d-flex justify-content-end align-items-center">
                        <form id="searchform">
                            <input id="pesquisar" className="form-control" type="search" placeholder="Pesquisar por nome" aria-label="Search" onChange={handleInputChange} />
                            <button id="btnpesq" className="btn" type="submit"><i className="bi bi-search"></i></button>
                        </form>
                    </div>
                </section>
                <section id="bordinha" className="m-2 p-3 shadow-lg">
                    <div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Senha</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">Nivel de Acesso</th>
                                    <th scope="col">Data de Cadastro</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsuarios?.map((usuario) => (
                                    <tr key={usuario.id}>
                                        <td scope="row">{usuario.id}</td>
                                        <td>{usuario.nome}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.senha}</td>
                                        <td>{usuario.telefone}</td>
                                        <td>{usuario.nivelAcesso}</td>
                                        <td>{usuario.dataCadastro}</td>
                                        <td>{usuario.statusUsuario}</td>
                                        <td>
                                            <button type="button" onClick={() => goTo(usuario.id)} className="btn btn-sm btn-primary" id="editbutton">
                                                <i className="bi bi-pencil me-2"></i>Editar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Usuario;
