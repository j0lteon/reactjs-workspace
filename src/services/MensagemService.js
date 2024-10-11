import http from '../common/http-common'

const API_URL = "mensagem/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
}

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const update = (id, data) => {
    return http.multipartInstance.post(API_URL + `update/${id}`, data);
};

const MensagemService = {
    findAll,
    findById,
    update,
}

export default MensagemService;