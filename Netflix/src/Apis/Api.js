// apis pego do tmdb
const API_Key = '52da923a6d35cfbd74be35c66b5b4c49';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais da Netflix
- recomendado (trading)
- em alta (Top rated)
- acao
- comedia
- animes
- romance
*/

const basicFetch = async(endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

const Api = {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_Key}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Voce',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_Key}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_Key}`)
            },
            {
                slug: 'action',
                title: 'acao',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_Key}`)
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_Key}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_Key}`)
            },
            {
                slug: 'Anime',
                title: 'Animes',
                items: await basicFetch(`/discover/movie?with_genres=16&language=pt-BR&api_key=${API_Key}`)
            },
            {
                slug: 'Romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_Key}`)
            },
        ];
    }
}

export default Api;
