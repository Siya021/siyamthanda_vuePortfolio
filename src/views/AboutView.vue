<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col" id="aboutIMG">
          <img src="https://i.postimg.cc/90kt1L4b/Ellipse-3.png" class="aboutImg">
        </div>
        <div class="col">
          <p class="description">My name is <span>Siyamthanda Mazokwana</span> from <span>Phillipi, Cape Town</span>, I'm an aspiring front-end developer on a journey to transform creative ideas into interactive and visually appealing digital experiences.</p>
          <br>
          <p>Growing up I've always had passion for design and I just recently found one in coding through joining <span>Life Choices Academy</span> where I strive to bridge the gap between aesthetics and functionality.</p>
          <br>
          <p>I possess vivid foundation in <span>HTML,CSS, Javascript, Bootstrap and Vue</span>, constantly expanding my knowledge and keeping up to date with the latest trends and best practices in front end developmemnt. I enjoy the challenge of bringing ideas to life through clean and efficient code.</p>
          <br>
          <p>In addition to technical skills, I believe effective communication and team work are essesntial for success of any development project. I enjoy working closely with other developers to ensure a cohesive user experience.</p>
           <router-link to="/Contact"><button class="btn btn-outline-success" >Contact Me</button></router-link>
           <font-awesome-icon :icon="['fab', 'bootstrap']" />
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.row{
  margin-top: 20px;
  align-items: center;
}
#aboutIMG{
  border-right: solid rgb(22,126,79);
}

.aboutImg{
  height: 550px;
  margin: 0 0.5rem;
  animation: backInLeft;
  animation-duration: 5s;
}
span{
  color: rgb(22,126,79);
}
</style>
