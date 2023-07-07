<template>
  <div class="container-fluid">
    <hr />
    <p>Copyright &COPY; 2023</p>
    <p>Follow Me</p>
    <a href="https://www.facebook.com/" class="fa fa-facebook-square"></a>
    <a href="https://wwww.github.com/" class="fa fa-git-square"></a>
    <a href="https://www.instagram.com/" class="fa fa-instagram"></a>
    <a href="https://www.linkedin.com/" class="fa fa-linkedin-square"></a>
    <LogoComp />
  </div>
</template>

<script>
import LogoComp from "./LogoComp.vue";
export default {
  components: {
    LogoComp,
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: black;
  color: white;
  padding-bottom: 20px;
}
.col {
  margin: 20px;
}
.fa {
  font-size: 2rem !important;
  width: 50px;
  text-decoration: none;
  color: rgb(22, 126, 79);
}
.fa:hover {
  color: white;
}
</style>