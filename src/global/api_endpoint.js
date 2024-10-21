import CONFIG from "./config"
const API_ENDPOINT = {
    NOW_PLAYING: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=`,
    UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=`,
    DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
    SEARCH: (movieName) => `${CONFIG.BASE_URL}search/movie?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&query=${movieName}`,
    POPULAR: `${CONFIG.BASE_URL}movie/popular?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=`,
    GENRE: `${CONFIG.BASE_URL}genre/movie/list?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}`,
}

export default API_ENDPOINT

