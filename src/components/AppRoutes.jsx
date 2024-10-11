import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import App from '../templates/App/App'
import Login from '../templates/Login/Login'
import Mensagem from '../templates/Mensagem/Mensagem'
import Produto from '../templates/Produto/Produto'
import Usuario from '../templates/Usuario/Usuario'
import ProdutoNovo from '../templates/Produto/ProdutoNovo'
import ProdutoEditar from '../templates/Produto/ProdutoEditar'
import UsuarioEditar from '../templates/Usuario/UsuarioEditar'
import MensagemLer from '../templates/Mensagem/MensagemLer'
import Categoria from '../templates/Categoria/Categoria'
import Catalogo from '../templates/Catalogo/Catalogo'
import CategoriaNovo from '../templates/Categoria/CategoriaNovo'
import CatalogoNovo from '../templates/Catalogo/CatalogoNovo'
import CatalogoEditar from '../templates/Catalogo/CatalogoEditar'
import ForgotPass from '../templates/Login/ForgotPass'
import { useEffect, useState } from 'react'
import Home from '../templates/Home/Home'

function AppRoutes() {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    // Cria protegidas geral logado (comando para comentar no teclado é CTRL + ;)
    const protegidas = [
      "\/home",

      "\/produto",
      "\/produtonovo",
      "\/produtoeditar\/([0-9]+)",

      "\/usuario",
      "\/usuarioeditar",

      "\/categoria",
      "\/categorianovo",

      "\/mensagem",
      "\/mensagemler",
      
      "\/catalogo",
      "\/catalogoeditar\/([0-9]+)",
      "\/catalogonovo"
    ]
    
    // Identifica se o usuario está logado para habilitar as protegidas
    if (protegidas.some(rota=>new RegExp(rota).test(location.pathname))) {
      const logado = localStorage.getItem('login')
      
      // Se não vai pro login
      if (logado == null) {
        navigate("/login")
      }
    }
  
    console.log(location.pathname)
  }, [location.pathname])
  return (
    <div>
    
    {/* Cria as rotas para as páginas serem acessíveis */}
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<Home />} />

        <Route path='/mensagem' element={<Mensagem />} />
        <Route path='/mensagemler/:id' element={<MensagemLer/>} />

        <Route path='/login' element={<Login />} />
        <Route path='/esquecisenha' element={<ForgotPass />} />

        <Route path='/produto' element={<Produto />} />
        <Route path='/produtonovo' element={<ProdutoNovo />} />
        <Route path='/produtoeditar/:id' element={<ProdutoEditar />} />

        <Route path='/categoria' element={<Categoria />} />
        <Route path='/categorianovo' element={<CategoriaNovo />} />

        <Route path='/usuario' element={<Usuario />} />
        <Route path='/usuarioeditar/:id' element={<UsuarioEditar />} />

        <Route path='/catalogo' element={<Catalogo />} />
        <Route path='/catalogonovo' element={<CatalogoNovo />} />
        <Route path='/catalogoeditar/:id' element={<CatalogoEditar />} />

      </Routes>
    </div>
  )
}
export default AppRoutes