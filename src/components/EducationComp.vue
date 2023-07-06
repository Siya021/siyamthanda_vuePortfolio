<template>
    <div class="container">
        <h3>Education</h3>
        <div class="col">
             <div class="card" style="width: 18rem" v-for="item in education" :key="item.id">
            <div class="card-body">
              <h5 class="card-title">{{ item.institution }}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">{{ item.studyType }}</h6>
              <p class="card-text">{{ item.startDate }}</p>
              <p class="card-text">{{ item.completedDate }}</p>
              <p class="card-text">{{ item.subjects }}</p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
    education() {
      return this.$store.state.education;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
  },
    }
</script>

<style scoped>
.card-title{
    background-color: green;
    opacity: 90%;
    color: white;
}
.card{
border: solid green;
margin: 20px; 
}

.container{
    margin-bottom: 20px;
}
.col{
    display: flex;
    justify-content: center;
}
</style>