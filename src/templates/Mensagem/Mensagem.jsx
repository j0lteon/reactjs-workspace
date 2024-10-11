import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { useEffect, useState } from "react"
import MensagemService from '../../services/MensagemService'
import './Mensagem.css'
import useRequisitar from "../../hooks/useRequisitar"

const Mensagem = () => {

    const navigate = useNavigate();
    
    const goTo = (is) => {
        navigate(`/mensagemler/${is}`)
    }

    const [mensagens, carregando] = useRequisitar("mensagem/findAll")

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-2 w-100">
                <Header goTo={'/home'}
                    title={'Mensagem'}
                    logo={logo}
                />
                <section id="bordinha" className="m-2 p-3 shadow-lg">
                    <div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Data</th>
                                    <th scope="col">Emissor</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Status</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {mensagens?.map((mensagem) => (
                                    <tr key={mensagem.id}>
                                    <td scope="row">{mensagem.id}</td>
                                    <td>{mensagem.dataMensagem}</td>
                                    <td>{mensagem.emissor}</td>
                                    <td>{mensagem.telefone}</td>
                                    <td>{mensagem.email}</td>
                                    <td>{mensagem.statusMensagem}</td>
                                    <td>
                                            <button type="button" onClick={() => goTo(mensagem.id)} className="btn btn-sm btn-primary" id="editbutton">
                                                Analisar <i class="bi bi-check-lg"></i>
                                            </button>
                                        </td>
                                </tr>
                              ))  }
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Mensagem