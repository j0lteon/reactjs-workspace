import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { useEffect, useState } from "react"
import CatalogoService from "../../services/CatalogoService"
import './Catalogo.css'
import useRequisitar from "../../hooks/useRequisitar"

const Catalogo = () => {

    const navigate = useNavigate();

    const goTo = (id) => {
        navigate(`/catalogoeditar/${id}`);
    }

    const [catalogos, carregando] = useRequisitar("catalogo/findAll")
    const [searchTerm, setSearchTerm] = useState(''); // Estado para a barra de pesquisa

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value); // Atualiza o termo de busca
    }

    const filteredCatalogo = catalogos?.filter((catalogo) =>
        catalogo.produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) // Filtra os usuários pelo nome
    );


    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-2 w-100">
                <Header
                    title={'Catálogo'}
                    logo={logo}
                />
                <section id="bordinha" className="m-2 p-3 shadow-lg">
                    <div className="d-flex justify-content-between">
                        <Link
                            className="btn btn-lg btn-primary" id="editbutton"
                            to={'/catalogonovo'} >
                            Novo Catálogo
                        </Link>
                        <form onsubmit="return false" id="searchform">
                            <input id="pesquisar" className="form-control" type="search" placeholder="Pesquisar por produto" aria-label="Search" onChange={handleInputChange} />
                            <button id="btnpesq" class="btn" type="submit"><i class="bi bi-search"></i></button>
                        </form>

                    </div>
                </section>
                <section id="bordinha" className="m-2 p-3 shadow-lg">
                    <div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Data Cadastro</th>
                                    <th scope="col">Texto</th>
                                    <th scope="col">Nome do Produto</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCatalogo?.map((catalogo) => (
                                    <tr key={catalogo.id}>
                                        <td scope="row">{catalogo.id}</td>
                                        <td>{catalogo.dataCadastro}</td>
                                        <td>{catalogo.obs}</td>
                                        <td>{catalogo.produto.nome}</td>
                                        <td>{catalogo.statusProdCat}</td>
                                        <td>
                                            <button type="button" onClick={() => goTo(catalogo.id)} className="btn btn-sm btn-primary" id="editbutton">
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
export default Catalogo