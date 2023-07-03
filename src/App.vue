<template>
 <NavbarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';
export default {
  components:{
    NavbarComp,
    FooterComp
  }
}
</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*::after,
*::before{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
