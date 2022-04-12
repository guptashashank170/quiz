const quizDB = [
{
    question : "Q1: What is the full HTML?",
    a: "Hyper Markup TEXT language",
    b: "Hyper Markup TEXT language",
    c: "Hyper Markup TEXT language",
    d: "Hyper Markup TEXT language",
    ans : "ans1"
},
{
    question : "Q2: What is the full css?",
    a: "Hyper Markup TEXT language",
    b: "cacade style sheet",
    c: "Hyper Markup TEXT language",
    d: "Hyper Markup TEXT language",
    ans : "ans2"
},
{
    question : "Q3: What is the full js?",
    a: "Hyper Markup TEXT language",
    b: "Hyper Markup TEXT language",
    c: "java script",
    d: "Hyper Markup TEXT language",
    ans : "ans3"
},
{
    question : "Q4: What is the full json?",
    a: "Hyper Markup TEXT language",
    b: "Hyper Markup TEXT language",
    c: "Hyper Markup TEXT language",
    d: "JavaScript Object Notation",
    ans : "ans4"
}
];

const question = document.querySelector('.question');
const option1 =document.querySelector('#option1');
const option2 =document.querySelector('#option2');
const option3 =document.querySelector('#option3');
const option4 =document.querySelector('#option4');
const answers =document.querySelectorAll('.answer');


const submit = document.querySelector('#submit');
let score=0;

const showScore = document.querySelector('#showScore');
let questionCount = 0;

loadQuestion = () => {
    const questionList = quizDB[questionCount];
    

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    
}



const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked)
        {
            answer = curAnsElem.id;
        }
        
    });
    return answer;
}





submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCount].ans)
    {
        score++;
    };
    deselectAll = () => {
        answers.forEach((curAnsElem) => curAnsElem.checked = false)
    }
    questionCount++;
    if(questionCount < quizDB.length)
    {
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3> you scored ${score}/${quizDB.length} </h3>
        <button class = "btn" onclick="location.reload()" > </button>
        
        `;
        showScore.classList.remove('showArea');
    }
});

loadQuestion();