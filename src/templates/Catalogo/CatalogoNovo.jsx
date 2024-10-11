import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { useEffect } from "react"
import ProdutoService from '../../services/ProdutoService'; // Importando o ProdutoService
import CatalogoService from '../../services/CatalogoService';
import useForm from "../../hooks/useForm"
import useRequisitar from "../../hooks/useRequisitar"

const CatalogoNovo = () => {
    const { mudar, valor, mudarDireto } = useForm({
        dataCadastro: "",
        obs: "",
        produto: null,
    })

    const [produtos, carregando] = useRequisitar("produto/findAll")
    const nativator = useNavigate()

    useEffect(() => {
        console.log(valor)
    }, [valor])


    const handleSubmit = (e) => {
        e.preventDefault();
     
        // Verificando se todos os campos necessários estão preenchidos
        if (valor.dataCadastro && valor.obs && valor.produto) {
            
            // Enviando os dados ao backend
            CatalogoService.create(valor).then(
                (response) => {
                    console.log(response)
                    
                    nativator("/catalogo")
                }, (error) => {
                    
                }
            );
        }
    }

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-2 w-100">
                <Header goto={'/catalogo'} title={'Catálogo'} logo={logo} />
                <section id="bordinha" className="m-2 p-3 shadow-lg">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        {!carregando && (
                            <>
                                <div className="col-md-5">
                                    <label htmlFor="inputNome" className="form-label">Data Cadastro</label>
                                    <input type="datetime-local" className="form-control" id="inputNome" required
                                        name="nome"
                                        value={valor.dataCadastro}
                                        onChange={mudar("dataCadastro")}
                                    />
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="inputEmail4" className="form-label">Obs</label>
                                    <input type="text" className="form-control" id="inputEmail4" required
                                        name="obs"
                                        value={valor.obs}
                                        onChange={mudar("obs")}
                                    />
                                </div>
                                
                                <div className="col-md-2">
                                            <label htmlFor="inputProduto" className="form-label">Produto:</label>
                                            <select className="form-select" id="inputProduto" 
                                                name="produto"
                                                value={valor.produto?.id || ""}
                                                onChange={(e) => {
                                                    mudarDireto("produto", produtos.find(a => a.id == e.target.value))
                                                }}
                                                >

                                                <option value={0} disabled>
                                                    Selecione um Produto...
                                                </option>

                                                {produtos?.map((produto) => (
                                                    <option key={produto.id} value={produto.id}>
                                                        {produto.nome}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                        
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary" id="editbutton">
                                Gravar
                            </button>
                        </div>
                        </>
                        )}
                    </form>
                </section>
            </div>

        </div>
    )
}
export default CatalogoNovo