<template>
    <div id="head">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"> Siyamthanda|<span>Mazokwana</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mx-auto">
             <router-link to="/" class="nav-item nav-link">Home</router-link> 
             <router-link to="/About" class="nav-item nav-link">About</router-link> 
             <router-link to="/Resume" class="nav-item nav-link">Resume</router-link> 
             <router-link to="/Projects" class="nav-item nav-link">Projects</router-link> 
             <router-link to="/Testimonials" class="nav-item nav-link">Testimonials</router-link> 
             <router-link to="/Contact" class="nav-item nav-link">Contact</router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
    
</template>

<script>
    export default {
        components:{
        
        }
    }
</script>

<style scoped>
span{
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(22,126,79);
}
#head{
  border-bottom: solid rgb(22,126,79);
  padding: 20px;
}
.nav-item :hover{
  color:rgb(22,126,79);
}
</style>