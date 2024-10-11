import { Link, useNavigate, useParams } from "react-router-dom"
import './Login.css'
import ggicon from '../../assets/images/ggicon.png'
import useForm from "../../hooks/useForm"

const ForgotPass = () => {

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

    const handleSubmit = (e) => {

    }

    return (
        <div id="esquecisenha">
            <section id="topinho">
                BATATA
            </section>
            <div id="gambiarraforgot">
                <div id="partedecima">
                        <p className="fw-bold fst-italic">
                            <Link to={'/login'} id="return" ><i class="bi bi-arrow-left"></i> Voltar</Link>
                        </p>
                    <div className="login-logo">
                        <img src={ggicon} alt="logo" />
                    </div>
                    <h5 className="text-center">Recuperação de Senha</h5>
                </div>
                <form id="formforgot" action="" className="login-form">
                    <div className="my-3">
                        <h3>Digite os dados</h3>
                        <label htmlFor="email" className="form-label mb-0 fw-bold">Email:</label>
                        <input type="email" id="email" className="form-control text-center fw-medium shadow"
                            name="email"
                            value={valor.email}
                            onChange={mudar("email")} />
                    </div>

                    <div className="my-3">
                        <label htmlFor="inputTelefone" className="form-label mb-0 fw-bold">Telefone:</label>
                        <input type="text" id="telefone" className="form-control text-center fw-medium shadow"
                            name="telefone"
                            value={valor.telefone}
                            onChange={mudar("telefone")} />
                    </div>

                    <div className="my-3">
                        <label htmlFor="imputSenha" className="form-label mb-0 fw-bold">Nova Senha:</label>
                        <input type="password" id="senha" className="form-control text-center fw-medium shadow"
                            name="senha"
                            value={valor.senha}
                            onChange={mudar("senha")} />
                    </div>

                    <div className="my-3">
                        <label htmlFor="password" className="form-label mb-0 fw-bold">Confirme Nova Senha:</label>
                        <input type="password" id="senhacon" className="form-control text-center fw-medium shadow" />
                    </div>

                    <div className="d-flex justify-content-around mb-3 mt-2">
                        <button id="editbutton" className="btn btn-success fw-medium shadow" type="submit"
                        >Solicitar Nova Senha</button>
                    </div>
                </form>
            </div>
            <footer id="footerforgotpass">
                PONTO E VIRGULA TRAÇO PONTO E VIRGULA ;-;
            </footer>
        </div>
    )
}

export default ForgotPass