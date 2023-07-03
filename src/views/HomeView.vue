<template>
  <div class="home">
    <div class="landing">
      <p class="lead"> {S} </p>
      <h2>Welcome to my portfolio</h2>
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