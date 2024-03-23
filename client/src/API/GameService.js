import axios from "axios";

// Класс со статичными методами для работы с внешним API
export default class GameService {
    static async getAll() {
        const response = await axios.get('http://localhost:8000/api/games-list');
        console.log(response);
        return response;
    }

    static async getById(id) {
        const response = await axios.get('http://localhost:8000/api/games-list/' + id);
        return response;
    }
}
