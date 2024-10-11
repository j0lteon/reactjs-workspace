import http from '../common/http-common'

const API_URL = "usuario/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
}

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const update = (id, data) => {
    return http.multipartInstance.put(API_URL + `update/${id}`, data);
};

const signin = async (email, senha) => {
    
    const response = await http.mainInstance

        .post(API_URL + "signin", {
            email,
            senha,
        });

    if (response.data) {
        if (response.data.nivelAcesso != "ADMIN" && response.data.statusUsuario != "ATIVO") {
            return "invalido";
        }

        localStorage.setItem("login", response.data.email);
        localStorage.setItem("status", response.data.statusUsuario)
        localStorage.setItem("nome", response.data.nome);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("nivel", response.data.nivelAcesso);
    }

    return response.data;

};

// const esqueciSenha = (email, data) => {
//     const formData = new FormData();
//     formData.append('email', data.senha);
 
//     return http.mainInstance.put(API_URL + `esqueciSenha`, formData);
// };

const UsuarioService = {
    findAll,
    signin,
    // esqueciSenha,
    findById,
    update,
}

export default UsuarioService;