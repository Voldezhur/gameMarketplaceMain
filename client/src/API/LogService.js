import axios from "axios";

// Класс со статичными методами для работы авторизации
export default class LogService {
    static async Login() {
        const response = await axios.get();
        return response;
    }

    static async Logout() {
        const response = await axios.get();
        return response;
    }
}