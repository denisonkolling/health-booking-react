import axios from "axios";

const API_URL = "http://localhost:8080"; 

class MedicoService {

    saveMedic(medic) {
        return axios.post(API_URL + "/medicos", medic);
    }

    getAllMedic() {
        return axios.get(API_URL + "/medicos");
    }

    getMedicById(id) {
        return axios.get(API_URL + "/" + id);
    }

    deleteMedic(id) {
        return axios.delete(API_URL + "/medicos/" + id);
    }

    editmedic(medic) {
        return axios.post(API_URL + "/medicos/" + medic.id, medic);
    }

}

export default new MedicoService;