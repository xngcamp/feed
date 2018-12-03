// import shop from '../../api/shop'

/**
 * initial state
 * shape:
 * isShowFeedItemEditor: Boolean
 * feedList: [{ id: string, userName: string, text: string }]
*/
const state = {
  isShowFeedItemEditor: false,
};

// getters
const getters = {
  isShowFeedItemEditor(state) {
    return state.isShowFeedItemEditor;
  },
  feedList(state) {
    return state.feedList;
  },
};

// actions
const actions = {

};

// mutations
const mutations = {

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
