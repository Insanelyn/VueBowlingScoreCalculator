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
    <button @click="newGame()">New Game</button>
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
        const turnObj = {
          firstRoll: this.frameArray[0],
          secondRoll: this.frameArray[1],
          frameTotal: this.frameArray[0] + this.frameArray[1]
        }
        this.gameArray.push(turnObj)
        this.frameArray = []
      } else if(this.gameArray.length === 10) {
        alert("Start a new game");      }
 
      this.equals()


   },
  equals(){
    return this.gameArray.reduce((x, y) => {
      return this.total = x + y.frameTotal
    }, 0)
  },

   newGame(){
     this.gameArray = []; 
     this.frameArray = []
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
    border: 1px dotted black;

}
.result{
  display: inline-block;
    margin:0;


}
.fullframe{
  text-align: justify;
  font-size: 12px; /* IE 9/10 fix */
  
}
.fullframe li {
 display: inline-block;

  border: 1px double black;
  background-color: #42b983;
  margin: 0;
}
.fullframe :after {
  content: '';
  width: 100%; /* Ensures justification for single lines */
  display: inline-block;
}
.scorebtns {
    text-align: justify;

}
.addscorebtn{
  color:black;
  background-color: lightcyan;
  border: 1px dotted black;
  font-size: 25px;
}

</style>
