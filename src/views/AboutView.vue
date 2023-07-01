<template>
  <div class="about">
    <h1>About</h1>
    <div class="container">
      <div class="row">
        <div class="col" id="aboutIMG">
          <img src="https://i.postimg.cc/90kt1L4b/Ellipse-3.png" class="aboutImg">
        </div>
        <div class="col"><p class="description">I'm a Front-End Developer from Cape Town, South Africa
           I am Siyamthanda Mazokwana, 24 years of age and I am an Aspiring Front End Developer</p>
           <button class="btn btn-outline-success" to="/contact">Contact Me</button>
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
  border-right: solid green;
}

.aboutImg{
  height: 550px;
}
</style>
