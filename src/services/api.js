// https://api.themoviedb.org/3/movie/now_playing?api_key=a37b48df5a015c0db67c6000097432aa&language=pt-BR
// base https://api.themoviedb.org/3/
import axios from "axios";


const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api