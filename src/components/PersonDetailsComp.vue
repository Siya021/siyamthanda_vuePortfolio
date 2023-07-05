<template>
    <div class="row">
        <div class="col">
            <h5>First Name:</h5>
            <p>Siyamthanda</p>
            <label for="name">Last Name:</label>
            <p>Mazokwana</p>
            <label for="name">Date of birth:</label>
            <p>1999/06/09</p>
            <label for="name">Contact Number:</label>
            <p>060 504 7299</p>
            <label for="name">Email</label>
            <p>siyamthandamazokwana@gmail.com</p>
        </div>
    </div>
</template>

<script>
    export default {
        components:{
        }
    }
</script>

<style scoped>
.col{
    text-align: start;
    padding:30px;
    border: solid green;
}
p{
    text-align: center;
    color: white;
    background-color: green;
}

</style>