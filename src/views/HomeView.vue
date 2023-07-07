
<template>
  <div class="home">
    <div class="landing">
      <h1 class="animate__jackInTheBox" id="h2a"><big>Welcome to my portfolio</big></h1>
      <p class="end"><big><big>I am an Aspiring Front End Developer</big></big></p>
      <div class="btns">
        <router-link to="/Projects"><button class="btn btn-outline-success">Explore</button></router-link>
        <button class="btn btn-outline-success" @click="downloadCV">DownloadCV</button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  methods: {
    downloadCV() {
      const fileUrl = 'https://drive.google.com/file/d/1-5-bjQPQgsyuVsn4LsF4bXHvyTsqMIJd/view?usp=drive_link';
      const link = document.createElement('a');
      link.href = fileUrl;
      link.target = '';
      link.download = 'file.pdf';

      link.click();
    }
  }
}
</script>
<style scoped>
.btn{
  margin: 10px;
}
.btns{
  display: inline-flex;
  justify-content: space-between;
  padding: 20px
}
.end{
  margin: 0 0.5rem;

  animation: zoomInUp;
  animation-duration: 5s;
  color: rgb(22,126,79); 
  font-size: larger;
  font-stretch: expanded;
  background-color: black;
  margin: 20px;
}

.animate__jackInTheBox{
  transform: rotateZ(-200deg);
  transform:translateY(50px)
}
  
  h1 {
    display: inline-block;
    margin: 0 0.5rem;
    animation: zoomInDown;
    animation-duration: 5s; 
    color: black;
    background-color: white;
    margin: 20px;
  }

.home{
  /*background-image: url('https://i.postimg.cc/KYS9tgP0/black-paper-background.jpg');*/
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  text-align: center;
  padding: 60px;
  color: white;
  background-color: black ;
}
.landing{
  align-content: center;
  padding: 50px;
}
</style>