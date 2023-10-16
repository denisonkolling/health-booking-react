import axios from "axios";

const API_URL = "http://localhost:8080"; 

class AppointmentService {

    saveAppointment(appointment) {
        return axios.post(API_URL + "/consultas", appointment);
    }

    getAllAppointment() {
        return axios.get(API_URL + "/consultas");
    }
  

    getAppointmentById(id) {
        return axios.get(API_URL + "/" + id);
    }

    deleteAppointment(id) {
        return axios.delete(API_URL + "/consultas/" + id);
    }

    editappointment(appointment) {
        return axios.post(API_URL + "/consultas/" + appointment.id, appointment);
    }

}

export default new AppointmentService;