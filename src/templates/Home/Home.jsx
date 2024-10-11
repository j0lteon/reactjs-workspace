import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import './Home.css'
const Home = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-2 w-100">
                <Header
                    goto={'/home'}
                    title={'Home'}
                    logo={logo}
                />
                <h1 id="h1home"><b>Boas-vindas, {localStorage.getItem("nome")}!</b></h1> <br />

                {/* Neste site, você terá acesso ao <b>CRUD (Create, Read, Update e Delete)</b>*/}

                <h3 id="marginhome">
                    Neste site, você terá acesso a inúmeras funcionalidades para administrar a loja Gaia Garden. Desde criar e editar produtos, até receber feedbacks dos usuários. <br />
                    Em resumo, todo o CRUD (Create, Read, Update e Delete). <br />
                    É muita responsabilidade kkkk <br />
                    Através da barra lateral, você poderá acessar diversos conteúdos disponibilizados no sistema.
                </h3>
                <br />

                <h2 id="h2home">Usuário:</h2>

                <p className="pa">
                    Os mais importantes para o site, a página terá informações de id, nome, email, senha (a senha estará decodificada em BASE64), telefone, nivel de acesso, data de cadastro e status do usuario. <br />
                    No canto superior direito da página haverá uma barra de pesquisa por nome, ao digitar, apenas aparecerão os dados correspondentes à busca. <br />
                    </p>
                    <p className="pa">


                    O último campo em cada usuário é o editar, ao clicar no botão verde você vai ter acesso à edicão daquele usuário. <br />
                    Sendo direcionado a nova pagina, poderá alterar campos de Nome, Email, Telefone e os mais importantes: <br />
                    <b>Nivel de Acesso:</b> Poderá alterar para ADMIN ou USER, assim definindo quem pode ou não ter um login valido para acessar o site. <br />
                    <b>Status do Usuário:</b> Poderá alterar para ATIVO ou INATIVO. Usuário inativos não podem acessar o site. <br /></p>
                    <p className="pa">

                    Após as edições, clique em "Gravar Alterações" para registrar e voltar à tela de usuários.
                    </p>
                <br />

                <h2 id="h2home">Produto:</h2>

                <p className="pa">
                    O campo com maior conexão com as outras entidades, a página terá informações de id, nome, descrição, código de barras, preço, categoria e status do produto. <br />
                    No canto superior direito da página haverá uma barra de pesquisa por nome, ao digitar, apenas aparecerão os dados correspondentes à busca. <br />
                </p>

                <p className="pa">
                    O último campo em cada produto é o editar, ao clicar no botão verde você vai ter acesso à edição daquele produto. <br />
                    Sendo direcionado a nova página, poderá alterar campos de Nome, Código, Preço, Descrição, Categoria e o mais importante: <br />
                </p>

                <p className="pa">
                    <b>Status Produto:</b> Poderá alterar para ATIVO ou INATIVO, produtos inativos são desconsiderados <br />
                    Após as edições, clique em "Gravar Alterações" para registrar e voltar à tela de produtos. <br />
                </p>

                <p className="pa">
                    Caso queira criar um produto novo, clique no botão do canto superior esquerdo "Novo Produto", na nova página, digite as informações de Nome, Código de Barras, Preço, Descrição e Selecione sua categoria. <br />
                </p>

                <p className="pa">
                    Após a criação, clique no botão "Gravar" para ser redirecionado de volta a tela de "Produto" para conferir seu novo atributo. <br />
                    Por padrão o campo Status virá como "ATIVO" <br />
                    O campo categoria no produto é uma chave estrangeira para a tabela "Categoria" no Banco de Dados, logo, elas não podem ser criadas na tela de editar, só podem ser usadas as categorias já existentes.
                </p>
                <br />

                <h2 id="h2home">Categoria:</h2>

                <p className="pa">
                    O campo com menor quantidade de informações, a página terá informações de id e nome da categoria. <br />
                </p>
                <p className="pa">
                A categoria é uma tabela basicamente estática, contendo seus poucos atributos necessários e pouco provável que precisem ser alteradas, por conta disso não há barra de pesquisa ou edição para os atributos da tabela. <br />
                </p>
                <p className="pa">
                    Seus 4 atributos padrão são: Flores, Folhagens, Mudas e Cactos, servirão para todos os produtos, porém, caso haja necessidade, clique no botão do canto superior esquerdo "Nova Categoria", na nova página coloque o nome da nova  categoria e clique em "Gravar", após isso você será redirecionado de volta a tela de "Categoria" para conferir seu novo atributo.
                </p>

                <br />

                <h2 id="h2home">Mensagem:</h2>

                <p className="pa">
                    O feedback direto dos usuários, a página terá informações de id, data, emissor, telefone, e-mail e status da mensagem. <br />
                    Por padrão as mensagens aparecem com o campo Status como “NÃO LIDA”.
                </p>

                <p className="pa">
                    É importante sempre conferir a data que a mensagem foi enviada para se ter um escopo real da atualidade do comentário do usuário. <br />
                    Como administrador, deve sempre estar atento à novas mensagens e sempre as analisar. Para isto, vá até as mensagens não lidas e clique no botão verde “Analisar” para ser direcionado até a página de Ler Mensagem, nela, poderá ver o conteúdo através do campo “texto”. <br />
                    Após a análise, mude o Status Mensagem para “LIDA” e clique no botão “Gravar” para voltar até a tela de Mensagem (faça isso em TODAS as mensagens não lidas).
                </p>
                <br />

                <h2 id="h2home">Catalogo:</h2>

                <p className="pa">
                    Importantíssimo para o aplicativo Mobile, já que são as informações que aparecerão para os clientes. A página terá informações de id, data de cadastro, texto, nome do produto e status do catálogo. <br />
                </p>

                <p className="pa">
                    No canto superior direito da página haverá uma barra de pesquisa por nome do produto, ao digitar, apenas aparecerão os dados correspondentes à busca. <br />
                </p>

                <p className="pa">
                    O último campo em cada atributo é o editar, ao clicar no botão verde você vai ter acesso à edição daquele catálogo. <br />
                    Sendo direcionado a nova página, poderá alterar campos de Texto e os mais importantes: <br />
                    <b>Produto:</b> Ele é uma entidade estrangeira da tabela “Produto”, você poderá escolher por nome qualquer produto registrado no Banco de Dados desse campo. <br />
                    <b>Status do Catálogo:</b> Poderá alterar para ATIVO ou INATIVO, catálogos inativos são desconsiderados. <br />
                    Após as edições, clique em "Gravar Alterações" para registrar e voltar à tela de catálogo. <br />
                </p>

                <p className="pa">
                    Caso queira criar um catálogo novo, clique no botão do canto superior esquerdo "Novo Catálogo", na nova página, digite as informações de data cadastro (sempre digite sua data atual de criação), Obs (texto) e Selecione seu produto. Após a criação, clique no botão "Gravar" para ser redirecionado de volta a tela de "Catálogo" para conferir seu novo atributo. <br />
                </p>

                <p className="pa">
                    É importantíssimo ter cuidado ao criar algum atributo neste campo, o texto escrito aparecerá para o usuário do aplicativo mobile, assim como o produto e alguns de seus campos.
                </p>
            </div>
        </div>
    )
}
export default Home
