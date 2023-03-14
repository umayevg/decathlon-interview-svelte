import axios from "axios";

export default class GameService {
    static async getAll(options = {}) {
        const url = options.url || `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&page_size=28`;

        const params = {
            search: options.searchString,
            ordering: options.filter,
            search_precise: true,
            search_exact: true
        };

        try {
            const response = await axios.get(url, {params});
            const {data} = response;
            const {results, next, previous} = data;
            return [results, previous, next];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}