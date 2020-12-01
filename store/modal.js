export const state = () => ({
    mediaType: null,
    similars: [],
    cinema: {},
    videos: [],
})

export const mutations = {

    ADD(state, {cinema, mediaType}) {
        state.mediaType = mediaType;
        state.cinema = cinema;
    },

    REMOVE(state) {
        state.mediaType = null;
        state.similars = [];
        state.cinema = {};
        state.videos = [];
    },

    CINEMA_SIMILAR(state, data) {
        state.similars = [...data];
    },

    VIDEO(state, videos) {
        state.videos = [...videos];
    }
}

export const actions = {
    add(context, data) {
        context.commit('ADD', data);
    },

    remove(context) {
        context.commit('REMOVE');
    },

    cinemaSimilar(context, data) {
        context.commit('CINEMA_SIMILAR', data);
    },

    video(context, videos) {
        context.commit('VIDEO', videos);
    }
}

export const getters = {
    mediaType : state => state.mediaType,
    similars: state => state.similars,
    cinema: state => state.cinema,
    videos: state => state.videos,
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}