import { Link, useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import useRequisitar from "../../hooks/useRequisitar"
import useForm from "../../hooks/useForm"
import { useEffect } from "react"
import axios from "axios"

const MensagemLer = () => {

    const { mudar, valor, mudarDireto } = useForm({
        id: null,
        dataMensagem: "",
        emissor: "",
        email: "",
        telefone: "",
        texto: "",
        statusMensagem: "",
    })
    
    const params = useParams()
    const [data ] = useRequisitar(`mensagem/findById/${params.id}`)
    
    useEffect(() => {
        if (data) { mudarDireto("id", data.id)
        mudarDireto("dataMensagem", data.dataMensagem)
        mudarDireto("emissor", data.emissor)
        mudarDireto("email", data.email)
        mudarDireto("telefone", data.telefone)
        mudarDireto("texto", data.texto)
        mudarDireto("statusMensagem", data.statusMensagem)}
       
    }, [data])

    const status = [
        "LIDA",
        "NÃO LIDA"
    ]

    const navigator = useNavigate()
    
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/mensagem'}
                    title={'Ler Mensagem'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    
                <form className="row g-3" onSubmit={async(e) => {
                        e.preventDefault()
                        console.table(data)
                        const requisicao=axios.post("http://localhost:8080/mensagem/update", valor) 
                        console.log(requisicao.data)
                        navigator("/mensagem")
                    }}>

                        <div className="col-md-1">
                            <label htmlFor="id" className="form-label">ID:</label>
                            <input type="text" className="form-control" id="id" readOnly
                                name="id"
                                value={valor.id}
                                onChange={mudar("id")}/>
                        </div>

                        <div className="col-md-2">
                            <label htmlFor="inputData" className="form-label">Data:</label>
                            <input type="text" className="form-control" id="inputData" readOnly
                                name="dataMensagem"
                                value={valor.dataMensagem}
                                onChange={mudar("dataMensagem")} />
                        </div> 

                        <div className="col-md-5">
                            <label htmlFor="inputEmissor" className="form-label">Emissor:</label>
                            <input type="text" className="form-control" id="inputEmissor" readOnly
                                name="emissor"
                                value={valor.emissor} 
                                onChange={mudar("emissor")} />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="inputEmail" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="inputEmail" readOnly
                                name="email"
                                value={valor.email} 
                                onChange={mudar("email")}/>
                        </div>

                        <div className="col-md-12 my-4">
                            <label htmlFor="inputTexto" className="form-label">Texto:</label>
                            <textarea rows={5} className="form-control" id="inputTexto" readOnly
                                name="texto"
                                value={valor.texto} 
                                onChange={mudar("texto")}/>
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Status Mensagem</label>
                            <select id="inputStatus" value={valor.statusMensagem} onChange={(e) => {
                                mudarDireto("statusMensagem", e.target.value)
                            }} className="form-select">
                               
                            <option selected>Status</option>
                                {status.map(statu => <option key={statu} value={statu}>{statu}</option>)}
                            </select>
                        </div>


                        <div className="col-12 mb-3 d-flex justify-content-around">
                            <button type="submit" className="btn btn-success" id="editbutton">
                                Marcar com Lida
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default MensagemLer