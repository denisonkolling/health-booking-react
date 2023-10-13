import axios from "axios";

const API_URL = "http://localhost:8080"; 

class PatientService {

    savePatient(patient) {
        return axios.post(API_URL + "/pacientes", patient);
    }

    getAllPatient() {
        return axios.get(API_URL + "/pacientes");
    }

    getPatientById(id) {
        return axios.get(API_URL + "/" + id);
    }

    deletePatient(id) {
        return axios.delete(API_URL + "/pacientes/" + id);
    }

    editPatient(patient) {
        return axios.post(API_URL + "/pacientes/" + patient.id, patient);
    }

}

export default new PatientService;
