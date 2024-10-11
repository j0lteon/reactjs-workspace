import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { useEffect, useState } from "react"
import CategoriaService from "../../services/CategoriaService"
import './Categoria.css'
import useRequisitar from "../../hooks/useRequisitar"

const Categoria = () => {
    const navigate = useNavigate();

    const goTo = () => {
        navigate('/categoriaeditar');
    }

    const [categorias, carregando] = useRequisitar("categoria/findAll")

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-2 w-100">
                <Header
                    title={'Categoria'}
                    logo={logo}
                />

                <section id="bordinha" className="m-2 p-3 shadow-lg">
                    <div className="d-flex justify-content-start">

                        <Link
                            className="btn btn-lg btn-primary"
                            to={'/categorianovo'} id="newprod">
                            Nova Categoria
                        </Link>
                    </div>

                </section>
                <section id="bordinha" className="m-2 p-3 shadow-lg">
                    <div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categorias?.map((categoria) => (
                                    <tr key={categoria.id}>
                                        <td scope="row">{categoria.id}</td>
                                        <td>{categoria.nome}</td>
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
export default Categoria