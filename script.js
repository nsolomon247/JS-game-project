const question = document.querySelector("h3");
const startButton = document.querySelector("#generate");
const nextQuestionBtn = document.querySelector("#next-question");
let firstChoice = document.querySelector("#choice1");
let secondChoice = document.querySelector("#choice2");
let thirdChoice = document.querySelector("#choice3");
let fourthChoice = document.querySelector("#choice4");

let choices = document.querySelector("ul");

let questionArray = [];

const getQuestions = () => fetch("https://the-trivia-api.com/api/questions?limit=10")
.then((response) => response.json())
.then((data) => { 
    data.forEach((i) => {
       questionArray.push(i.question);
    });
       
});


// question.innerHTML = data[0].question

startButton.addEventListener("click", () => {
    
    choices.innerHTML =`
                        <ul>
                            <button><li id = "choice1">C1</li></button>
                            <button><li id = "choice2">C2</li></button>
                            <break>
                            <button><li id = "choice3">C3</li></button>
                            <button><li id = "choice4">C4</li></button>
                        </ul>
                        `;
    
                        getQuestions();
   
                        question.innerHTML = questionArray[0];
    

    startButton.classList.add("hidden");
    nextQuestionBtn.classList.remove("hidden");

})


nextQuestionBtn.addEventListener("click", () => {
    questionArray.forEach((i) =>{
        question.innerHTML = i;
    })
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