import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import './Categoria.css'
import { useState } from "react"
import CategoriaService from "../../services/CategoriaService"
import useForm from "../../hooks/useForm"

const CategoriaNovo = () => {
    
    const { mudar, valor, mudarDireto } = useForm({
        nome: "",

    })

    const nativator = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (valor.nome != undefined) {
            CategoriaService.create(valor).then(
                (response) => {
                    nativator("/categoria")
                }, (error) => {
                  
                }
            )
        }
    }
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-2 w-100">
                <Header goto={'/categoria'} title={'Categoria'}
                    logo={logo}
                />
                <section id="bordinha" className="m-2 p-3 shadow-lg">
                    <form className="row g-3" onSubmit={handleSubmit}>
                    
                    <>
                    <div className="col-md-5">
                        <label htmlFor="inputNome" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="inputNome"
                        name="nome"
                        value={valor.nome}
                        onChange={mudar("nome")} />
                        
                    </div>
                    
                    <div className="col-12">
                        <button className="btn btn-primary" id="editbutton">
                            Gravar
                        </button>
                    </div>
                    </>
                
                {/* {category && (
                    <div className="m-1">
                        <div className={
                            "text-center h4 fst-italic py-4 rounded-2 border border-5 " + (successful ? "border-success" : "border-danger")
                        }>
                            {category}
                        </div>
                    </div>
                )} */}
                    </form>
                </section>
            </div>

        </div>
    )
}
export default CategoriaNovo