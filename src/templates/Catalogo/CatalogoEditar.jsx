import { Link, useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import useForm from "../../hooks/useForm"
import useRequisitar from "../../hooks/useRequisitar"
import { useEffect } from "react"
import axios from "axios"

const catalogoEditar = () => {

    const { mudar, valor, mudarDireto } = useForm({
        id: null,
        dataCadastro: "",
        obs: "",
        produto: null, // Incluí produto_id aqui
        statusProdCat: "",
    })

    const [produtos, carregando] = useRequisitar("produto/findAll")
    const params = useParams()
    const [data ] = useRequisitar(`catalogo/findById/${params.id}`)

    useEffect(() => {
        if (data) { mudarDireto("id", data.id)
        mudarDireto("dataCadastro", data.dataCadastro)
        mudarDireto("obs", data.obs)
        mudarDireto("produto", data.produto)
        mudarDireto("statusProdCat", data.statusProdCat)}
       
    }, [data])
    const status = [
        "ATIVO",
        "INATIVO"
    ]

    const navigator = useNavigate()

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-2 w-100">
                <Header 
                    goto={'/catalogo'} 
                    title={'Catálogo'}
                    logo={logo}
                />
                <section className="m-2 p-3 shadow-lg">

                <form className="row g-3" onSubmit={async(e) => {
                        e.preventDefault()
                        console.table(data)
                        const requisicao=axios.post("http://localhost:8080/catalogo/update", valor) 
                        console.log(requisicao.data)
                        navigator("/catalogo")
                    }}>

                        <div className="col-md-1">
                            <label htmlFor="inputID" className="form-label">ID</label>
                            <input type="text" className="form-control" id="inputID" readOnly
                                        name="id"
                                        value={valor.id}
                                        onChange={mudar("id")} />
                        </div>

                        <div className="col-md-2">
                            <label htmlFor="inputdataCadastro" className="form-label">Data Cadastro</label>
                            <input type="datetime-local" className="form-control" id="inputdataCadastro"  readOnly
                                    name="dataCadastro"
                                    value={valor.dataCadastro}
                                    onChange={mudar("dataCadastro")} />
                        </div>

                        <div className="col-md-3">
                                    <label htmlFor="inputProduto" className="form-label">Produto:</label>
                                    <select className="form-select" id="inputproduto" 
                                        name="produto"
                                        value={valor.produto?.id || ""}
                                        onChange={(e) => {
                                            mudarDireto("produto", produtos.find(a => a.id == e.target.value))
                                        }}
                                        >

                                        <option value={0} disabled>
                                            Selecione um produto...
                                        </option>

                                        {produtos?.map((produto) => (
                                            <option key={produto.id} value={produto.id}>
                                                {produto.nome}
                                            </option>
                                        ))}
                                    </select>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputObs" className="form-label">Texto</label>
                            <textarea rows={2} className="form-control" id="inputObs" 
                                    name="obs"
                                    value={valor.obs}
                                    onChange={mudar("obs")} />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Status catalogo</label>
                            <select id="inputStatus" value={valor.statusProdCat} onChange={(e) => {
                                mudarDireto("statusProdCat", e.target.value)
                            }} className="form-select">
                               
                            <option selected>Status</option>
                                {status.map(statu => <option key={statu} value={statu}>{statu}</option>)}
                            </select>
                        </div>
                        
                        <div className="col-12">
                            <button type="submit" id="gravar" className="btn btn-primary">
                                Gravar
                            </button>
                        </div>
                    </form>
                </section>
            </div>

        </div>
    )
}
export default catalogoEditar