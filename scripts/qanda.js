const genTrivia = "https://opentdb.com/api.php?amount=1"
const triviaCat = "https://opentdb.com/api_category.php"
const qandcat="https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple"

var question_category = 9
var question_difficulty = 'easy'
var question_type = 'multiple'

const level_score = {
  "easy": 1,
  "medium": 2,
  "hard": 3
}

const taunts = [
  "Great job!",
  "You're doing great!",
  "Impressive 😦",
  "Clever!",
  "Way more to go!",
  "Keep going!",
  "Have you learn something new?",
  "You did it!"
]

var score=0
var health=5
var canSubmit = true

var rand = function(max) {
  return Math.round(Math.random() * max);
};


window.addEventListener("DOMContentLoaded",function(){
  console.log("loaded")
  const category = document.getElementById("category")
  const difficulty = document.getElementById("difficulty")
  const type = document.getElementById("type")
  
  const val = getData(triviaCat)
  
  val.then((response)=>{
    const loc = response["trivia_categories"]
    for (i in loc){
      const option = document.createElement("option")
      const data = loc[i]
      option.value = data.id
      option.innerHTML = data.name.trim()
      category.appendChild(option)
    }
  })
  
  category.oninput=(event)=>{
    question_category = event.target.value
  }
  difficulty.oninput=(event)=>{
    question_difficulty=event.target.value
  }
  type.oninput=(event)=>{
    question_type=event.target.value
  }
  if (localStorage.getItem("hs1")){
    console.log("highest found")
  } else {
    localStorage.setItem("hs1",0)
  }
  updateScore()
  genQuestion()
})

function  reset() {
  const button=document.getElementById("reload")
  genQuestion()
  button.style.visibility="hidden"
  
  setTimeout(function(){
    button.style.visibility="visible"
  },10000)
}


function  updateScore() {
  const board = document.getElementById("scoreboard")
  const word = document.getElementById("word")
  const highest = parseInt(localStorage.getItem("hs1"))
  
  if (health!=0){
    board.innerHTML=`SCORE: ${score}<br>HIGHEST SCORE: ${highest}<br>HEALTH: ${health}`
  } else {
    if (score>highest){
      localStorage.setItem('hs1',score)
    }
    score=0
    health=5
    board.innerHTML=`SCORE: ${score}<br>HIGHEST SCORE: ${localStorage.hs1}<br>HEALTH: ${health}`
  }
} 

function getData(url){
      const category = document.getElementById("letter")
            return fetch(url)
                .then((response) => { 
                  return response.json().then((data) => {
                  return data;
              }).catch((err) => {
                  console.log(err);
              }) 
          });
        }
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to create a list of answers with the correct answer placed randomly
function createAnswers(correctAnswer, wrongAnswers) {
    // Combine the correct answer with the wrong answers
    let answers = [correctAnswer, ...wrongAnswers];

    // Shuffle the answers to randomize their order
    answers = shuffleArray(answers);

    return answers;
}

// Example usage
  
 function  genQuestion() {
   // Tab to edit
   const url = `https://opentdb.com/api.php?amount=1&category=${question_category}&difficulty=${question_difficulty}&type=${question_type}`
   
   const generate = getData(url)
   const word = document.getElementById("word")
   const submit = document.getElementById("submit")
   const input = document.getElementById("answer")
   const cqd = question_difficulty
   
   generate.then((data)=>{
     const code = data.response_code
     if (code == 5){
       word.innerHTML='Error generating question, click reload and try again'
       submit.onclick=null
     } else {
      const value = data.results[0]
      if (question_type == "multiple"){
        const wrong = value.incorrect_answers
        const answer = value.correct_answer
        const ans = createAnswers(answer, wrong)
        const choices = {}
        
        word.innerHTML=value.question+"<hr>"
        
        for (x in ans){
          word.innerHTML+=`${x}). ${ans[x]}<br>`
          choices[x]=ans[x]
        }
        
        console.log("correct: ",value.correct_answer)
        submit.onclick=()=>{
          const final = input.value
          if (choices[final]&&choices[final]==answer){
            word.style.backgroundColor="#04AA6D"
            word.style.color="white"
            const good = taunts[rand(taunts.length-1)]
            score+=level_score[cqd]
            word.innerHTML=`Correct! <br>${good}<hr>Answer: ${choices[final]}`
            submit.onclick=null
            setTimeout(function (){
              word.style.backgroundColor="lightblue"
              word.style.color="black"
              updateScore()
              genQuestion()
            },2000)
          } else {
            health--
            word.style.backgroundColor="red"
            setTimeout(function(){
              word.style.backgroundColor="lightblue"
            },200)
            updateScore()
          }
        }
      } else {
        word.innerHTML = `${value.question}<hr>True or False?`
        const answer = value.correct_answer.toLowerCase()
        
        console.log("c:",answer)
        
        submit.onclick=()=>{
          word.style.backgroundColor="#04AA6D"
          word.style.color="white"
          const userinput = input.value.toLowerCase()
          if (userinput==answer){
            const taunt = taunts[rand(taunts.length-1)]
            score+=level_score[cqd]
            word.innerHTML=`Correct! <br>${taunt}<hr>Answer: ${answer}`
            submit.onclick=null
            setTimeout(function (){
              word.style.backgroundColor="lightblue"
              word.style.color = "black"
              genQuestion()
            },2000)
          } else {
            health--
            word.style.backgroundColor="red"
            setTimeout(function(){
              word.style.backgroundColor="lightblue"
            },200)
          }
          updateScore()
        }
      }
       
     }
   })
   
  
 }
    