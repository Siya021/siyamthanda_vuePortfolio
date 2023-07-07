<template>
    <div>
        <div class="row">
            <div class="col-4" v-for="item in projects" :key="item.id">
                <div class="card" style="width: 18rem;" >
                    <img :src= item.image class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">{{ item.title }}</h5>
                      <p class="card-text">{{item.description}}</p>
                      <a class="btn btn-outline-primary" :href="item.netlifyURL">Netlify</a>
                      <a class="btn btn-outline-warning" :href="item.githubURL ">Github</a>
                    </div>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProjects");
  },
    }
</script>

<style scoped>
.row{
  margin: 0 0.5rem;
  animation: zoomInUp;
  animation-duration: 5s;
}
.btn{
  margin: 10px;
}
.col-4{
    padding: 20px;
   display: flex;
   justify-content: space-around;
}
.card-body{
    border: solid rgb(22,126,79);
}
</style>