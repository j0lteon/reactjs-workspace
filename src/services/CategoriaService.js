import http from '../common/http-common'

const API_URL = "categoria/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
}

const create = data => {
    return http.mainInstance.post(API_URL + "create", data, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

const CategoriaService = {
    findAll,
    create,
}

export default CategoriaService;