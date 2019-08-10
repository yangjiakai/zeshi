import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios')
Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    posts: []

  },
  mutations: {
    getPosts(state,res){
      state.posts = res.data
    },
    // changePost(state){
    //   state.posts[0].title = 'jsss'
    // }

  },
  actions: {
    getPosts(context){
      axios.get("http://localhost:3000/posts")
      .then((res) => {
        context.commit('getPosts',res)
      })
    },
    updatePost(){
      axios.post("http://localhost:3000/posts/1"),{
        title:"new-server",
        author:'yjk'
      }
    }


  }
})
