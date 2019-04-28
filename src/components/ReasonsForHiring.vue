<template>
<div>
  <h2>Reasons for hiring me even though I freeze (and dont have time to unfreeze) at tests</h2>
  <ul>
    <li><a href="#">1. I really want this job (which is why I totally freeze up)</a></li>
    <li><a href="#">2. I will therefore work harder than anyone else to meet your expectations</a></li>
    <li><a href="#">3. I am a great addition to the office. I am funny and have good social skills</a></li>
    <li><a href="#">4. I am fully aware of my flaws <br> For example: I am fully aware that math makes me freeze up the most, which means that I can work on it. I have signed up for a math refresh at komvux.
   <br>I have also noticed that I have not used arrays enough previously and that is why this is so hard for me. I have bought my self a course at Udemy to correct this</a></li>
    <li><a href="#">5. When you hire me I will have actual time to do the things I should. Currently I dont have time to do anything except my internship and working</a></li>
    <li><a href="#">6. Lastly, I am pretty great and you would be missing out</a></li>



  </ul>
</div>

</template>

<script scoped>
export default {
  name: "Reasons",
  props: {
    msg: String
  }
};
</script>

<style scoped>
div {
  margin: 30px;

}

h2 {
  font: 400 40px/1.5 Helvetica, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
  border-bottom: 1px solid #ccc;
}

li:last-child {
  border: none;
}

li a {
  text-decoration: none;
  color: #000;
  -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
  -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
  -o-transition: font-size 0.3s ease, background-color 0.3s ease;
  -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
  transition: font-size 0.3s ease, background-color 0.3s ease;
  display: block;
}

li a:hover {
  font-size: 25px;
  background: #f6f6f6;
}


</style>
