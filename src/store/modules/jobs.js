import Axios from "axios";

const state = {
    name:'yjk',
    jobs:[]
}

const getters = {
    allJobs:state => state.jobs
}

const mutations = {
    setJobs:(state,jobs) => state.jobs = jobs,
    addJob:(state,job) => state.jobs.unshift(job)
}

const actions = {
    async fetchJobs({commit}){
        const response = await Axios.get("http://localhost:3000/jobs")
        commit('setJobs',response.data)
    },

    async addJob({commit},job){
        const response = await Axios.post("http://localhost:3000/jobs",job)
        commit('addJob',response.data)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}