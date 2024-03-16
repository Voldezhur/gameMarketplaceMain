import { useState } from "react"

// Кастомный хук, возвращает результат колбека, флаг загрузки, флаг ошибки
export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const fetching = async (...args) => {
        try {
            setIsLoading(true);
            await callback(...args)
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error]
}