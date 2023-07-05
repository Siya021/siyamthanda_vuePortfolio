<template>
    <div class="container">
        <button class="btn btn-outline-success">HTML</button>
        <button class="btn btn-outline-success">CSS</button>
        <button class="btn btn-outline-success">JS</button>
        <button class="btn btn-outline-success">Bootstrap</button>
        <button class="btn btn-outline-success">VueJS</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.container{
    justify-content: space-between;
}
.btn{
    font-size: 1rem !important;
    width: 100px;
    text-decoration: none;
    color: orange;
    height: 100px;
    border-radius: 50px;
    padding: inherit;
    margin: 5px;
}
</style>