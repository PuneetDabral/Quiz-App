const quizDb= [
    {
        question:"Q1:what is the full form of html",
        a: "HighText Machine Language",
        b: "None of these",
        c: "HyperText and links Markup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },

    {
        question:" Q2:The correct sequence of HTML tags for starting a webpage is -",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Title, Body",
        ans: "ans4"
    },

    {
        question:"Q3:Which of the following element is responsible for making the text bold in HTML?",
        a: "<pre>",
        b: "<a>",
        c: "<b>",
        d: "<br>",
        ans: "ans3"
    },

    {
        question:"Q4:How to create a hyperlink in HTML?",
        a: "<a href = 'www.javatpoint.com'> javaTpoint.com </a> ",
        b: "<a url = 'www.javatpoint.com' javaTpoint.com /a>",
        c: "<a link = 'www.javatpoint.com'> javaTpoint.com </a>",
        d: "<a> www.javatpoint.com <javaTpoint.com /a>",
        ans: "ans1"
    },
];

const question = document.querySelector('.question');
const opetion1 = document.querySelector('#opetion1');
const opetion2 = document.querySelector('#opetion2');
const opetion3 = document.querySelector('#opetion3');
const opetion4 = document.querySelector('#opetion4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showscore = document.querySelector('#showscore');

let questionCount =0;
let score =0;

const loadQuestion = () =>{
    const questionList = quizDb[questionCount];
    question.innerText = questionList.question;

    opetion1.innerText = questionList.a;
    opetion2.innerText = questionList.b;
    opetion3.innerText = questionList.c;
    opetion4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
       
    });
    return answer;

};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click',() =>{
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);

    if(checkAnswer == quizDb[questionCount].ans){
        score++;
    };
    questionCount++;

    deselectAll();

if(questionCount < quizDb.length){
    loadQuestion();
}else{
    showscore.innerHTML = `
    <h3> your scored ${score}/${quizDb.length} 
    </h3>
    <button class="btn" onclick="location.reload()">Play again</button>
    `;
    showscore.classList.remove('scorearea');
}

});






  