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
            <label for="address">Address</label>
            <p> 10721 Dubu Crescent, Phillipi,Cape Town 7750, South Africa</p>
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
    border: solid rgb(22,126,79)n;
}
p{
    text-align: center;
    color: white;
    background-color: rgb(22,126,79);
}

</style>