import { Link, useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import useForm from "../../hooks/useForm"
import useRequisitar from "../../hooks/useRequisitar"
import { useEffect } from "react"
import axios from "axios"

const ProdutoEditar = () => {

    const { mudar, valor, mudarDireto } = useForm({
        id: null,
        nome: "",
        descricao: "",
        codigoBarras: "",
        preco: "",
        foto: "",
        categoria: null, // Incluí categoria_id aqui
        statusProd: "",
    })

    const [categorias, carregando] = useRequisitar("categoria/findAll")
    const params = useParams()
    const [data ] = useRequisitar(`produto/findById/${params.id}`)

    useEffect(() => {
        if (data) { mudarDireto("id", data.id)
        mudarDireto("nome", data.nome)
        mudarDireto("descricao", data.descricao)
        mudarDireto("codigoBarras", data.codigoBarras)
        mudarDireto("preco", data.preco)
        mudarDireto("foto", data.foto)
        mudarDireto("categoria", data.categoria)
        mudarDireto("statusProd", data.statusProd)}
       
    }, [data])
    const status = [
        "ATIVO",
        "INATIVO"
    ]

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            mudarDireto("foto", reader.result); // Define a imagem como Base64
        };
        reader.readAsDataURL(file);
    };

    const navigator = useNavigate()

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-2 w-100">
                <Header 
                    goto={'/produto'} 
                    title={'Produtos'}
                    logo={logo}
                />
                <section className="m-2 p-3 shadow-lg">

                <form className="row g-3" onSubmit={async(e) => {
                        e.preventDefault()
                        console.table(data)
                        const requisicao=axios.post("http://localhost:8080/produto/update", valor) 
                        console.log(requisicao.data)
                        navigator("/produto")
                    }}>

                        <div className="col-md-1">
                            <label htmlFor="inputID" className="form-label">ID</label>
                            <input type="text" className="form-control" id="inputID" readOnly
                                        name="id"
                                        value={valor.id}
                                        onChange={mudar("id")} />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome" 
                                    name="nome"
                                    value={valor.nome}
                                    onChange={mudar("nome")} />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputCodigo" className="form-label">Código</label>
                            <input type="text" className="form-control" id="inputCodigo" 
                                    name="codigoBarras"
                                    value={valor.codigoBarras}
                                    onChange={mudar("codigoBarras")} />
                        </div>

                        <div className="col-md-2">
                            <label htmlFor="inputPreco" className="form-label">Preço</label>
                            <input type="text" className="form-control" id="inputPreco" 
                                    name="preco"
                                    value={valor.preco}
                                    onChange={mudar("preco")} />
                        </ div>

                        <div className="col-md-10">
                            <label htmlFor="inputDescricao" className="form-label">Descrição</label>
                            <textarea rows={5} className="form-control" id="inputDescricao" 
                                    name="descricao"
                                    value={valor.descricao}
                                    onChange={mudar("descricao")} >
                            </textarea>
                        </div>

                        <div className="col-md-5">
                                    <label htmlFor="inputFoto" className="form-label">Imagem</label>
                                    <input type="file" className="form-control" id="inputFoto"
                                        name="foto"
                                        onChange={handleImageChange} />
                        </div>

                        <div className="col-md-2">
                                    <label htmlFor="inputCategoria" className="form-label">Categoria:</label>
                                    <select className="form-select" id="inputCategoria" 
                                        name="categoria"
                                        value={valor.categoria?.id || ""}
                                        onChange={(e) => {
                                            mudarDireto("categoria", categorias.find(a => a.id == e.target.value))
                                        }}
                                        >

                                        <option value={0} disabled>
                                            Selecione uma Categoria...
                                        </option>

                                        {categorias?.map((categoria) => (
                                            <option key={categoria.id} value={categoria.id}>
                                                {categoria.nome}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Status Produto</label>
                            <select id="inputStatus" value={valor.statusProd} onChange={(e) => {
                                mudarDireto("statusProd", e.target.value)
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
export default ProdutoEditar