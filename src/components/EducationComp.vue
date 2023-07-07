<template>
    <div class="container">
        <div class="col">
             <div class="card" style="width: 18rem" v-for="item in education" :key="item.id">
            <div class="card-body">
              <h5 class="card-title">{{ item.institution }}</h5>
              <h6 class="card-subtitle mb-2">{{ item.studyType }}</h6>
              <p class="card-text">{{ item.startDate }}</p>
              <p class="card-text">{{ item.id === '1' ? completedDate : item.completedDate }}</p>
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
    completedDate() {
      const now = new Date();
      return now.toLocaleDateString();
    }
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
    setInterval(() => {
      this.$forceUpdate();
    }, 1000);
  },
    }
</script>

<style scoped>
.card-subtitle{
  background-color: rgb(22, 126, 79);
  color: white
}
.card-title{
    background-color:rgb(22,126,79);
    opacity: 90%;
    color: white;
}
.card{
border: solid rgb(22,126,79);
margin: 20px; 
}
.card-body{
  background-color: black;
  color: white;
}

.container{
    margin-bottom: 20px;
    border-left: solid rgb(22, 126, 79);
}
.col{
    display: flex;
    justify-content: center;
    
}
</style>