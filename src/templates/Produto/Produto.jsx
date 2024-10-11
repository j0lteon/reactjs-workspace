import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import './Produto.css'
import { useEffect, useState } from "react"
import ProdutoService from "../../services/ProdutoService"
import useRequisitar from "../../hooks/useRequisitar"
import lirio from "../../ImagensMobile/liriolaranja.png"

const Produto = () => {

    const navigate = useNavigate();

    const goTo = (is) => {
        navigate(`/produtoeditar/${is}`);
    }

    const [produtos, carregando] = useRequisitar("produto/findAll")
    const [searchTerm, setSearchTerm] = useState(''); // Estado para a barra de pesquisa

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value); // Atualiza o termo de busca
    }

    const filteredProdutos = produtos?.filter((produto) =>
        produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) // Filtra os usuários pelo nome
    );

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-2 w-100">
                <Header
                    title={'Produto'}
                    logo={logo}
                />
                <section id="bordinha" className="m-2 p-3 shadow-lg">
                    <div className="d-flex justify-content-between">
                        <Link
                            className="btn btn-lg btn-primary"
                            to={'/produtonovo'} id="newprod">
                            Novo Produto
                        </Link>
                        <form onsubmit="return false" id="searchform">
                            <input id="pesquisar" className="form-control" type="search" placeholder="Pesquisar por nome" aria-label="Search" onChange={handleInputChange} />
                            <button id="btnpesq" class="btn" type="submit"><i class="bi bi-search"></i></button>
                        </form>

                    </div>
                </section>
                <section id="bordinha" className="m-2 p-3 shadow-lg">
                    <div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    {/* <img src={lirio}/> */}
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Descrição</th>
                                    <th scope="col">Codigo de Barras</th>
                                    <th scope="col">Preço</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Imagem</th>
                                    <th scope="col">Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProdutos?.map((produto) => (
                                    <tr key={produto.id}>
                                        <td scope="row">{produto.id}</td>
                                        <td>{produto.nome}</td>
                                        <td>{produto.descricao}</td>
                                        <td>{produto.codigoBarras}</td>
                                        <td>{produto.preco}</td>
                                        <td>{produto.categoria.nome}</td>
                                        <td>{produto.statusProd}</td>
                                        <td>
                                            {produto.foto ? (
                                                <img id="prodimg" src={produto.foto} alt={produto.nome} />
                                            ) : (
                                                'Sem imagem'
                                            )}
                                        </td>
                                        <td>
                                            <button type="button" onClick={() => goTo(produto.id)} className="btn btn-sm btn-primary" id="editbutton">
                                                <i className="bi bi-pencil me-2"></i>Editar
                                            </button>
                                        </td>
                                    </tr>))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>

    )
}
export default Produto