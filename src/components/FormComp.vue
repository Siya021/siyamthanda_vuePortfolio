<template>
    <div class="container-fluid">
        <form action="https://formspree.io/f/xrgwzvyn
        " method="post">
        <div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder="First name" aria-label="First name">
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button class="btn btn-outline-success" type="submit">Submit</button>
    </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
body{
    display: block;
}
input, textarea{
    border: solid  green;
    text-align: center;
    background-color: black;
    color: white;
}
::placeholder{
    color: grey;
}
.btn{
    margin: 20px;
}
.container-fluid{
    padding: 20px;
}
</style>