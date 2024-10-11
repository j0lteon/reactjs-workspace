import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';
import logo from '../../assets/images/home.png';
import { useEffect, useState } from "react";
import ProdutoService from '../../services/ProdutoService'; // Importando o ProdutoService
import CategoriaService from "../../services/CategoriaService";
import useForm from "../../hooks/useForm";
import useRequisitar from "../../hooks/useRequisitar";

const ProdutoNovo = () => {
    const { mudar, valor, mudarDireto } = useForm({
        nome: "",
        descricao: "",
        codigoBarras: "",
        preco: "",
        foto: "",
        categoria: null, // Incluí categoria_id aqui
    })
    
    const [categorias, carregando] = useRequisitar("categoria/findAll")
    const nativator = useNavigate()

    useEffect(() => {
        console.log(valor)
    }, [valor])

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            mudarDireto("foto", reader.result); // Define a imagem como Base64
        };
        reader.readAsDataURL(file);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
     
        // Verificando se todos os campos necessários estão preenchidos
        if (valor.nome && valor.descricao && valor.codigoBarras && valor.preco && valor.categoria) {
            
            // Enviando os dados ao backend
            ProdutoService.create(valor).then(
                (response) => {
                    console.log(response)
                    
                    nativator("/produto")
                }, (error) => {
                    
                }
            );
        }
    }

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-2 w-100">
                <Header goto={'/produto'} title={'Produto'} logo={logo} />
                <section className="m-2 p-3 shadow-lg">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        {!carregando && (
                            <>
                                <div className="col-md-5">
                                    <label htmlFor="inputNome" className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="inputNome" required
                                        name="nome"
                                        value={valor.nome}
                                        onChange={mudar("nome")} />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputCodigo" className="form-label">Código de Barras</label>
                                    <input type="text" className="form-control" id="inputCodigo" required
                                        name="codigoBarras"
                                        value={valor.codigoBarras}
                                        onChange={mudar("codigoBarras")} />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPreco" className="form-label">Preço</label>
                                    <input type="text" className="form-control" id="inputPreco" required
                                        name="preco"
                                        value={valor.preco}
                                        onChange={mudar("preco")} />
                                </div>

                                <div className="col-md-2">
                                    <label htmlFor="inputFoto" className="form-label">Imagem</label>
                                    <input type="file" className="form-control" id="inputFoto"
                                        name="foto"
                                        onChange={handleImageChange} />
                                </div>

                                <div className="col-md-10">
                                    <label htmlFor="inputDescricao" className="form-label">Descrição</label>
                                    <textarea rows={5} className="form-control" id="inputDescricao" required
                                        name="descricao"
                                        value={valor.descricao}
                                        onChange={mudar("descricao")} >
                                    </textarea>
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

                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary" id="editbutton"> Gravar </button>
                                </div>
                            </>
                        )}
                        
                    </form>
                </section>
            </div>
        </div>
    );
}

export default ProdutoNovo;
