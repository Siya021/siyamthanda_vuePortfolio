<template>
    <div class="container">
        <div class="wrapper">
            <div class="icon">
              <div class="tooltip">
                HTML 
              </div>
              <span><i>1</i></span>
            </div>
            <div class="icon">
              <div class="tooltip">
                CSS
              </div>
              <span><a><i>2</i></a></span>
            </div>
            <div class="icon">
              <div class="tooltip">
                Javascript
              </div>
              <span><a><i>3</i></a></span>
            </div>
            <div class="icon">
                <div class="tooltip">
                  Bootstrap
                </div>
                <span><a><i>4</i></a></span>
            </div>
            <div class="icon">
                <div class="tooltip">
                  VueJS
                </div>
                <span><a><i>5</i></a></span>
            </div>
          </div>
          <div class="container-fluid"></div>
          <p><small>Hover over the numbers to view Programming Skills</small></p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.container-fluid{
  padding: 10px;
}
p{
  background-color: rgb(22,126,79);
}
.container{
  border: solid rgb(22,126,79);;
    justify-content: space-around;
}
.wrapper{
    display: inline-flex;
    position: relative;
    top: 10px;
    text-align: center;
  }
  .wrapper .icon{
    margin: 0 20px;
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 1;
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .wrapper .icon span{
    display: block;
    height: 60px;
    width: 60px;
    background:rgb(22,126,79);
    color: white;
    border-radius: 50%;
    position: relative;
    z-index: 1;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .wrapper .icon span i{
    line-height: 60px;
    font-size: 25px;
  }
  .wrapper .icon .tooltip{
    position: absolute;
    top: 0;
    z-index: 1;
    background: black;
    color: #fff;
    padding: 10px 18px;
    font-size: 20px;
    font-weight: 500;
    border-radius: 25px;
    opacity: 0;
    pointer-events: none;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .wrapper .icon:hover .tooltip{
    top: -70px;
    opacity: 1;
    pointer-events: auto;
  }
  .icon .tooltip:before{
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    background: black;
    left: 50%;
    bottom: -6px;
    transform: translateX(-50%) rotate(45deg);
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .wrapper .icon:hover span{
    color: #fff;
  }
  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip{
    text-shadow: 0px -1px 0px rgba(0,0,0,0.4);
  }
  
  .wrapper :hover span,
  .wrapper :hover .tooltip,
  .wrapper :hover .tooltip:before{
    background: black;
    color: rgb(22,126,79);
  }
  
</style>