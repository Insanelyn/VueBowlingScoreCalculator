<template>
  <div class="BowlingCalculator">
<!--     <div>score: {{gameArray}}</div>
    <div>{{gameArray.length}}</div> -->

<!--     <li v-for="firstRoll in frameArray" :key="firstRoll"><span>{{firstRoll}}</span></li>
    <li v-for="secondRoll in frameArray" :key="secondRoll"><span>{{secondRoll}}</span></li>
 -->
    
    <div class="scorebtns">
    <button @click="increase" class="addscorebtn" id="0">0</button>
    <button @click="increase" class="addscorebtn" id="1">1</button>
    <button @click="increase" class="addscorebtn" id="2">2</button>
    <button @click="increase" class="addscorebtn" id="3">3</button>
    <button @click="increase" class="addscorebtn" id="4">4</button>
    <button @click="increase" class="addscorebtn" id="5">5</button>
    <button @click="increase" class="addscorebtn" id="6">6</button>
    <button @click="increase" class="addscorebtn" id="7">7</button>
    <button @click="increase" class="addscorebtn" id="8">8</button>
    <button @click="increase" class="addscorebtn" id="9">9</button>
    <button @click="increase" class="addscorebtn" id="10">10</button>
    <button @click="newGame()" class="newgamebutton">New Game</button>
    </div>


     <ul class="fullframe">
    <li class="frame" v-for="frame in gameArray" :key="frame">
      <p class="rolls firstroll">{{frame.firstRoll}}</p>
      <p class="rolls secondroll">{{frame.secondRoll}}</p>
      <p class="frametotal">{{frame.frameTotal}}</p>
    </li>
    <li class="frame result">
      <p>{{total}}</p>

      </li>
  </ul>

   
    
    </div>
</template>




<script>
import NewGameButton from './NewGameButton.vue'
export default {
  data: function (){  
    return {  
    gameArray: [],
    frameArray: [],
    totalArray: [],
    total: 0
    }
  },
  props: {
    msg: String
  },
  methods: {
  increase(e) {
    const id = e.target.id
    this.frameArray.push(parseInt(id, 10))
      if(this.frameArray.length > 1 && this.gameArray.length <= 10) {
        if(this.id = 10){
          console.log("hello strike", this.id)
        }
                  console.log("hello turnobj", this.id)

        const turnObj = {
          firstRoll: this.frameArray[0],
          secondRoll: this.frameArray[1],
          frameTotal: this.frameArray[0] + this.frameArray[1]
        }
        this.gameArray.push(turnObj)
        this.frameArray = []
          
      } else if(this.gameArray.length === 10) {
        this.gameOver();  
        
        }

      if (id < 10){
      this.equals()
      }

   },
  equals(){
    if(this.id = 10){
      return this.gameArray.reduce((x, y) => {
      return this.total = x + y.frameTotal + 10
    }, 0)
    } else {
    return this.gameArray.reduce((x, y) => {
      return this.total = x + y.frameTotal
    }, 0)
    }
  },

   newGame(){
     this.gameArray = []; 
     this.frameArray = [];
     this.total = 0;
   },   
   
   gameOver(){
      alert("Last score has been scored. Start a new game");      
      
   },

  },
  computed: {
  }
};
</script>



<style scoped>

a {
  color: #42b983;
}
.rolls {
  display: inline-block;
  padding: 10px;
  margin:0;
  }
.secondroll{
    border: 1px  black;
    background-color: rgb(95, 42, 155);

}
.result{
  display: inline-block;
    margin:0;
    width: 100px;
    height: 98px;
    font-size: 45px;

}
.fullframe{
  text-align: justify;
  font-size: 18px;
  height: 100%;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  
}
.fullframe li {
 display: inline-block;

  border: 4px double black;
  background-color:white;
  margin: 0;
    background-color: rgb(77, 0, 139); /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  
  
}

.scorebtns {
    text-align: justify;
       height: 100%;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    

}
.addscorebtn{
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.newgamebutton{
   background-color:maroon;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
