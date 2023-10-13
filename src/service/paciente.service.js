import axios from "axios";

const API_URL = "http://localhost:8080"; 

class PacienteService {

    savePaciente(paciente) {
        return axios.post(API_URL + "/pacientes", paciente);
    }

    getAllPaciente() {
        return axios.get(API_URL + "/pacientes");
    }

    getPacienteById(id) {
        return axios.get(API_URL + "/" + id);
    }

    deletePaciente(id) {
        return axios.delete(API_URL + "/pacientes/" + id);
    }

    editPaciente(paciente) {
        return axios.post(API_URL + "/pacientes/" + paciente.id, paciente);
    }

}

export default new PacienteService;