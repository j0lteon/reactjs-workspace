import http from '../common/http-common'

const API_URL = "produto/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
}

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const update = (id, data) => {
    return http.multipartInstance.put(API_URL + `update/${id}`, data);
};

const create = data => {
    
    return http.mainInstance.post(API_URL + "create", data , {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

const ProdutoService = {
    findAll,
    create,
    findById,
    update,
}

export default ProdutoService;