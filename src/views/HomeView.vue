
<template>
  <div class="home">
    <div class="landing">
      <p class="lead"> Hey there!!! </p>
      <h2 class="animate__jackInTheBox" id="h2a">Welcome to my portfolio</h2>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
<style scoped>
  h2 {
    display: inline-block;
    margin: 0 0.5rem;
  
    animation: jackInTheBox; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 5s; /* don't forget to set a duration! */
  }

.home{
  background-image: url('https://i.postimg.cc/KYS9tgP0/black-paper-background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  text-align: center;
  padding: 60px;
  color: white;
}
.lead{
  font-size: xx-large;
}
.landing{
  align-content: center;
  padding: 50px;
}
</style>