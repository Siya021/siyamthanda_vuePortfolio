<template>
    <div class="container-fluid">
        <h1>Testimonials</h1>
        <div class="row">
            <div class="col-4 " v-for="item in testimonials" :key="item.id">
                <div class="card">
                  <div class="image-content">
                    <span class="overlay"></span>
    
                    <div class="card-image">
                      <img :src= item.image alt="" class="card-img">
                    </div>
                  </div>
                  <div class="card-content">
                    <h2 class="name">{{ item.name }}</h2>
                    <p class="description">{{ item.message }}</p>
                  </div>
                </div>
              </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
        
    }
</script>

<style scoped>
.col-4{
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
.card{
    width: 300px;
    border-radius: 25px;
    background-color:white;
    scroll-snap-align: start;
  }
  .image-content,
  .card-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 14px;
  }
  .image-content{
    position: inherit;
    row-gap: 5px;
    
  }
  .overlay{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: green;
    border-radius: 25px 25px 0 25px;
  }
  .overlay::before,
  .overlay::after{
    content: '';
    position: relative;
    right: 0;
    bottom: -40px;
    height: 40px;
    width: 40px;
    background-color: black;
  }
  .overlay::after{
    border-radius: 0 25px 0 0;
    background-color:green;
  }
   .card-image{
    position: relative;
    height: 150px;
    width: 150px;
    border-radius: 75%;
    background: green;
    padding: 4px;
   } 
  .card-image .card-img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid black;
  }
  .name{
    font-size: 18px;
    font-weight: 500;
  }
  .description{
    font-size: 15px;
    text-align: center;
  }
  
</style>