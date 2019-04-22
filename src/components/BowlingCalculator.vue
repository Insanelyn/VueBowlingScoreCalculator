<template>
  <div class="BowlingCalculator">
    <div>score: {{gameArray}}</div>
    <p>total: {{total}}</p>
    <li v-for="firstRoll in frameArray" :key="firstRoll"><span>{{firstRoll}}</span></li>
    <li v-for="secondRoll in frameArray" :key="secondRoll"><span>{{secondRoll}}</span></li>

    
    
    <button @click="increase" id="0">0</button>
    <button @click="increase" id="1">1</button>
    <button @click="increase" id="2">2</button>
    <button @click="increase" id="3">3</button>
    <button @click="increase" id="4">4</button>
    <button @click="increase" id="5">5</button>
    <button @click="increase" id="6">6</button>
    <button @click="increase" id="7">7</button>
    <button @click="increase" id="8">8</button>
    <button @click="increase" id="9">9</button>
    <button @click="increase" id="10">10</button>
    <button @click="newGame()">New Game</button>
    
    </div>
</template>




<script>
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
          totalScore: this.frameArray[0] + this.frameArray[1]
        }
        this.gameArray.push(turnObj)
        this.frameArray = []
      }
 
      this.equals()

   },
  equals(){
    return this.gameArray.reduce((x, y) => {
      return this.total = x + y.totalScore
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
.frame {
  border: 1px black;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


</style>
