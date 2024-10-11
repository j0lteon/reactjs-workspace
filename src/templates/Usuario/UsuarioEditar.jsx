import { Link, useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import useForm from "../../hooks/useForm"
import useRequisitar from "../../hooks/useRequisitar"
import { useEffect } from "react"
import axios from "axios"

const UsuarioEditar = () => {

    const { mudar, valor, mudarDireto } = useForm({
        id: null,
        nome: "",
        email: "",
        telefone: "",
        senha: "",
        dataCadastro: "",
        nivelAcesso: "",
        statusUsuario: "",
    })
    
    const params = useParams()
    const [data ] = useRequisitar(`usuario/findById/${params.id}`)
    
    useEffect(() => {
        if (data) { mudarDireto("id", data.id)
        mudarDireto("nome", data.nome)
        mudarDireto("email", data.email)
        mudarDireto("telefone", data.telefone)
        mudarDireto("senha", data.senha)
        mudarDireto("dataCadastro", data.dataCadastro)
        mudarDireto("nivelAcesso", data.nivelAcesso)
        mudarDireto("statusUsuario", data.statusUsuario)}
       
    }, [data])
    const niveis = [
        "ADMIN",
        "USER"
    ]

    const status = [
        "ATIVO",
        "INATIVO"
    ]

    const navigate = useNavigate()
    
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-2 w-100">
                <Header 
                    goto={'/usuario'} 
                    title={'Usuário'}
                    logo={logo}
                />
                <section id="bordinha" className="m-2 p-3 shadow-lg">

                    <form className="row g-3" onSubmit={async(e) => {
                        e.preventDefault()
                        console.table(data)
                        const requisicao=await axios.post("http://localhost:8080/usuario/update", valor) 
                        console.log(requisicao.data)
                        if (valor.id == localStorage.getItem("id")) {
                            localStorage.setItem("nome", requisicao.data.nome)
                            localStorage.setItem("login", requisicao.data.login)
                            localStorage.setItem("nivel", requisicao.data.nivelAcesso)
                        }
                        navigate("/usuario")
                    }}>

                        <div className="col-md-1">
                            <label htmlFor="inputId" className="form-label">ID</label>
                            <input type="text" className="form-control" id="inputNome" readOnly
                                name="id"
                                value={valor.id}
                                onChange={mudar("id")} />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome" required
                                name="nome"
                                value={valor.nome}
                                onChange={mudar("nome")} />
                        </div>

                        <div className="col-md-2">
                            <label htmlFor="inputData" className="form-label">Cadastro:</label>
                            <input type="datetime-local" className="form-control" id="inputCadastro" readOnly
                                name="cadastro"
                                value={valor.dataCadastro}
                                onChange={mudar("dataCadastro")} />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputSenha" className="form-label">Senha:</label>
                            <input type="text" className="form-control" id="inputSenha"
                                name="senha"
                                value={valor.senha}
                                onChange={mudar("senha")} />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email:</label>
                            <input type="text" className="form-control" id="inputEmail" required
                                name="email"
                                value={valor.email}
                                onChange={mudar("email")} />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputTelefone" className="form-label">Telefone:</label>
                            <input type="text" className="form-control" id="inputTelefone" readOnly
                                name="telefone"
                                value={valor.telefone}
                                onChange={mudar("telefone")} />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputAcesso" className="form-label">Nível de Acesso</label>
                            <select id="inputAcesso" value={valor.nivelAcesso} onChange={(e) => {
                                mudarDireto("nivelAcesso", e.target.value)
                            }} className="form-select">
                               
                            <option selected>Nível de Acesso</option>
                                {niveis.map(nivel => <option key={nivel} >{nivel}</option>)}
                            </select>
                        </div>
                        
                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Status Usuario</label>
                            <select id="inputStatus" value={valor.statusUsuario} onChange={(e) => {
                                mudarDireto("statusUsuario", e.target.value)
                            }} className="form-select">
                               
                            <option selected>Status</option>
                                {status.map(statu => <option key={statu} value={statu}>{statu}</option>)}
                            </select>
                        </div>
                       
                        <div className="col-12 d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary" id="editbutton">
                                Gravar Alterações
                            </button>
                            
                        </div>
                    </form>
                </section>
            </div>

        </div>
    )
}
export default UsuarioEditar