<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <form action="https://formspree.io/f/xrgwzvyn" method="post">
          <div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder="First name"   minlength="3"
              maxlength="20"
              required
              oninvalid="this.setCustomValidity('Please Enter Your Name')"
              oninput="this.setCustomValidity('')" aria-label="First name">
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" 
              minlength="3"
              maxlength="20"
              required
              oninvalid="this.setCustomValidity('Please Enter Your Name')"
              oninput="this.setCustomValidity('')" aria-label="Last name">
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
      <div class="col" id="contact">
        <h4>Get in Touch</h4>
               <p>siyamthandamazokwana@gmail.com</p>
             <p> + 27 60 504 7299</p>
             <a href="https://www.facebook.com/" class="fa fa-facebook-square"></a>
                 <a href="https://wwww.github.com/" class="fa fa-git-square"></a>
                 <a href="https://www.instagram.com/" class="fa fa-instagram"></a>
                 <a href="https://www.linkedin.com/" class="fa fa-linkedin-square"></a>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.fa{
  font-size: 2rem !important;
  width: 50px;
  text-decoration: none;
  color: rgb(22,126,79)
}
#contact{
  border-left: solid rgb(22, 126, 79);
  padding: 20px;
  text-align: center;
}
h4{
  background-color: rgb(22, 126, 79);
  
}
body {
  display: block;
}

input,
textarea {
  border: solid rgb(22, 126, 79);
  text-align: center;
  background-color: black;
  color: white;
}

::placeholder {
  color: grey;
}

.btn {
  margin: 20px;
}

.container-fluid {
  padding: 20px;
}
</style>