// Isso aqui tudo serve para criar (resumidamente é claro) uma conexão com o Spring, tipo uma porta para acessar os dados, por isso tem a localhost ali sacou?
import axios from 'axios'

const API_URL = 'http://localhost:8080/';

const mainInstance = axios.create({
    baseURL: API_URL,
    headers:{
        "Content-Type": "application/json"
    }
});

const httpCommon = { 
    mainInstance,
}

export default httpCommon;