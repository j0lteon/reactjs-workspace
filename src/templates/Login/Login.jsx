import { Link, useNavigate } from "react-router-dom"
import './Login.css'
import ggicon from '../../assets/images/ggicon.png'
import { useState } from "react"
import useForm from "../../hooks/useForm"
import UsuarioService from "../../services/UsuarioService"

const Login = () => {
    const [mensagem, setMensagem] = useState("")
    const { mudar, valor, mudarDireto } = useForm({
        email: "",
        senha: "",
    })

    const navigate = useNavigate()

    async function logar(e) {
        e.preventDefault()
        console.log(valor)
        try {
            const usuario = await UsuarioService.signin(valor.email, valor.senha)
            setMensagem("")
            console.log(usuario)

            if (usuario && usuario === "invalido") {
                alert("Acesso Negado")
            }
    
            else if (usuario) {
                navigate("/Home")
            }
        }
        catch(e) {
            setMensagem("Email ou senha invalidas")
            console.log("ERROR")
        }
       
    }

    return (

        <div className="master">
            <section className="txt">
                <h1 id="bemVindo">Bem vindo de volta!</h1>
            </section>

            <section id="container">
                <div id="login-form">
                    <div className="ss">
                        <a href="login"><img src={ggicon} className="imagemlog" /></a>
                        <h1 id="h1">Acesse sua conta</h1>
                        <h2 id="h2">Preencha os campos:</h2>
                        <form onSubmit={logar} >
                            <label for="email">E-mail:</label>
                            <input type="email" id="email" value={valor.email} name="email" onChange={mudar("email")} placeholder="E-mail" required />
                            <label for="password">Senha:</label>
                            <input type="password" id="password" value={valor.senha} name="password" onChange={mudar("senha")} placeholder="Senha" minlength="8" required />

                            <div className="botoes">
                            <input type="submit" value={'Entrar'} className="btn btn-primary" id="button" />
                            {/* <Link
                                id="forgotlink"
                                to={'/esquecisenha'} >
                                Esqueceu sua senha?
                            </Link> */}
                            </div>
                            <h2 className="error">{mensagem}</h2>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login