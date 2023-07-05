import { createStore } from 'vuex'
const dataUrl = "https://siya021.github.io/EOMP_Data/data/"
export default createStore({
  state: {
    work: null,
    education: null,
    testimonials: null,
    skills: null,
    projects: null,
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
    },
    setSkills(state, skills) {
      state.skills = skills
    },
    setProjects(state, projects) {
      state.projects = projects
    },
  },
  actions: {
    async fetchWork(context) {
      let res = await fetch(dataUrl);
      let {work} = await res.json()
      
        context.commit('setWork', work)
    },
    async fetchEducation(context) {
      let res = await fetch(dataUrl);
      let {education} = await res.json()

      context.commit('setEducation', education)
    },
    async fetchTestimonials(context) {
      let res = await fetch(dataUrl);
      let {testimonials} = await res.json()

      context.commit('setTestimonials', testimonials)
    },
    async fetchSkills(context) {
      let res = await fetch(dataUrl);
      let {skills} = await res.json()
      
      context.commit('setSkills', skills)
    },
    async fetchProjects(context) {
      let res = await fetch(dataUrl);
      let {projects} = await res.json()

      context.commit('setProjects', projects)
    },
  },
  modules: {
  }
})
