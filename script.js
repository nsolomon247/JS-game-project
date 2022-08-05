const question = document.querySelector("h3");
const startButton = document.querySelector("#generate");
const firstChoice = document.querySelector("#choice1");
const secondChoice = document.querySelector("#choice2");
const thirdChoice = document.querySelector("#choice3");
const fourthChoice = document.querySelector("#choice4");



const getQuestions = () => fetch("https://the-trivia-api.com/api/questions")
.then((response) => response.json())
.then((data) => {
    question.innerHTML = data[0].question
    firstChoice.innerHTML = data[0].correctAnswer
    secondChoice.innerHTML = data[2].correctAnswer
    thirdChoice.innerHTML = data[4].correctAnswer
    fourthChoice.innerHTML = data[8].correctAnswer
});

// question.innerHTML = data[0].question

startButton.addEventListener("click", () => {
    
    getQuestions();

    startButton.innerHTML = "Generate Next Question";
    

})
/*

firstChoice.addEventListener("click", () => {
    
  
})
secondChoice.addEventListener("click", () => {
    
    
   
})
thirdChoice.addEventListener("click", () => {
    
    

})
fourthChoice.addEventListener("click", () => {
    
    
 })*/