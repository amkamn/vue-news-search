import api from '../helper/api';

export default {
    init() {
        return api().get(`/top-headlines?sources=google-news&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`)
    },

    search(value) {
        return api().get(`/everything?q=${value}&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`)
    },
   
}
