import * as querystring from 'querystring';

export default {
  actions: {
    async fetchPosts({ commit, getters, dispatch }, limit = 3) {

      const query = querystring.stringify({ _limit: limit });
      const res = await fetch(`${process.env.VUE_APP_FETCH_POST_URL}?${query}`);

      const posts = await res.json();

      commit('updatePosts', posts);
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost)
    }
  },
  state: {
    posts: []
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
    postsCount(state, getters) {
      return getters.allPosts.length;
    }
  }
}
