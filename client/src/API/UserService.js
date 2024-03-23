import axios from "axios";

// Класс со статичными методами для работы с внешним API
export default class UserService {
    static async getAll() {
        const response = await axios.get('http://localhost:8000/api/user/list');
        return response.data;
    }

    static async getById(id) {
        const response = await axios.get('http://localhost:8000/api/user/list/' + id);
        return response;
    }
}
