<template>
<header>
	<div class="overlay">
<h1>A pretty terrible bowling score calculator</h1>
<h3>No really, It doesent calculate your strikes or spares. Have fun.</h3>
    <router-link tag="a" :to = "{name: 'reasons'}"><button>Why you should hire me anyway</button></router-link>
        <router-link tag="a" :to = "{name: 'bowlingcalculator'}"><button>Bowling calculator</button></router-link>



		</div>
</header>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    msg: String
  }
};
</script>

<style scoped>
*{padding: 0; margin: 0; box-sizing: border-box;}
body{height: 900px;}
header {
	background: url('https://images.unsplash.com/photo-1538511625527-e893585d8ed2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
	text-align: center;
	width: 100%;
	height: auto;
	background-size: cover;
	background-attachment: fixed;
	position: relative;
	overflow: hidden;
  margin-top: 0;
}
header .overlay{
	width: 100%;
	height: 100%;
	padding: 50px;
	color: #FFF;
	text-shadow: 1px 1px 1px #333;
  background-image: linear-gradient( 135deg, #9f05ff69 10%, #fd5e086b 100%)
}

h1 {
	font-family: 'Arial', cursive;
	font-size: 80px;
	margin-bottom: 30px;
}

h3, p {
	font-family: 'Open Sans', sans-serif;
	margin-bottom: 30px;
}

button {
  background-color: black;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  margin: 10px;
}
button:hover{
	cursor: pointer;
}
li{
  list-style: none;
}
button:hover {
  background: #380000;
}
</style>
