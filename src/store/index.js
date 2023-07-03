import { createStore } from 'vuex'
const dataUrl = "https://siya021.github.io/EOMP_Data/data/"
export default createStore({
  state: {
    work: null,
    education: null,
    testimonials: null
  },
  getters: {
  },
  mutations: {
    setWork(state, work) {
      state.work = work
    },
    setEducation(state, education) {
      state.education = education
    },
    setTestimonials(state, testimonials) {
      state.testimonials = testimonials
    }
  },
  actions: {
    async fetchWork(context) {
      let res = await fetch(dataUrl);
      let {work} = await res.json()
      
        context.commit('setWork', work)
    }
  },
  modules: {
  }
})
