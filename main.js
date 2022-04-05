
// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
const list = document.querySelectorAll('.list');
const wholePage = document.querySelector('.wholePage');
const quizShow = document.querySelector(".quizShow")

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");
const paper8 = document.querySelector("#p8");
const paper9 = document.querySelector("#p9");
const paper10 = document.querySelector("#p10");
const paper11 = document.querySelector("#p11");
const paper12 = document.querySelector("#p12");
const paper13 = document.querySelector("#p13");

//menuToggle
menuToggle.onclick = function(){
    navigation.classList.toggle('open')
}

//click menu
function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) => 
item.addEventListener('click', activeLink));


// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 13;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-320px)";
    nextBtn.style.transform = "translateX(320px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function deleteButton(){
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    book.style.transform = "translateX(320px)"
}

function showQuiz(){
    quizShow.classList.add("active")
}


function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                break;  
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                break;
            case 7:
                paper7.classList.add("flipped");
                paper7.style.zIndex = 7;
                break;
            case 8:
                paper8.classList.add("flipped");
                paper8.style.zIndex = 8;
                break;
            case 9:
                paper9.classList.add("flipped");
                paper9.style.zIndex = 9;
                break;  
            case 10:
                paper10.classList.add("flipped");
                paper10.style.zIndex = 10;
                break;
            case 11:
                paper11.classList.add("flipped");
                paper11.style.zIndex = 11;
                break;
            case 12:
                paper12.classList.add("flipped");
                paper12.style.zIndex = 12;
                break;                                              
            case 13:
                paper13.classList.add("flipped");
                paper13.style.zIndex = 13;
                closeBook(false);
                deleteButton();
                showQuiz();
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 13;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 12;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 11;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 10;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 9;
                break;
            case 7:
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 8;
                break;
            case 8:
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 7;
                break;    
            case 9:
                paper8.classList.remove("flipped");
                paper8.style.zIndex = 6;
                break;
            case 10:
                paper9.classList.remove("flipped");
                paper9.style.zIndex = 5;
                break;
            case 11:
                paper10.classList.remove("flipped");
                paper10.style.zIndex = 4;
                break;
            case 12:
                paper11.classList.remove("flipped");
                paper11.style.zIndex = 3;
                break;    
            case 13:
                paper12.classList.remove("flipped");
                paper12.style.zIndex = 2;
                break;               
            case 14:
                openBook();
                paper13.classList.remove("flipped");
                paper13.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector('.question-text');
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");


let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;




//push the questions into availableQuestions Array

function setAvailalbeQuestions(){
    const totalQuestion = quiz.length;
    for(let i = 0; i < totalQuestion; i++){
        availableQuestions.push(quiz[i])
    }
}

//set question number and question and option
function getNewQuestion(){
    //set question number
    questionNumber.innerHTML = (questionCounter + 1) + " / " + quiz.length + "  번 문제"

    //set question text
    //get random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    //get the position of 'questionIndex' from the availableQuestion Array;
    const index1 = availableQuestions.indexOf(questionIndex);
    // remove the 'questionIndex' from the availableQuestion Array;, 중복이 나오지 않도록.
    availableQuestions.splice(index1,1);
    //show question img if 'img' property exists
    if(currentQuestion.hasOwnProperty("img")){
        const img = document.createElement("img");
        img.src = currentQuestion.img;
        questionText.appendChild(img);
    }

    //set options, 보기 가져오기.
    //get the length of options
    const optionLen = currentQuestion.options.length
    //push options into availableOptions Array
    for(let i = 0; i < optionLen; i++){
        availableOptions.push(i)
    }

    optionContainer.innerHTML = '';

    let animationDelay = 0.15;
    //create options in html
    for(let i = 0; i < optionLen; i++){
        //random option
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)]
        //get the position of 'optionIndex' from the availableOptions
        const index2 = availableOptions.indexOf(optionIndex);
        // remove the 'optionIndex' from the availableOptions, so that the option does not repeat
        availableOptions.splice(index2, 1);

        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        //정답인 항목의 id를 배열 순서로 부여함.
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option)
        //onclick이벤트의 함수를 getResult로 변경
        option.setAttribute("onclick", "getResult(this)");
    }
    questionCounter++
}
//get the result of current attempt question
//element안에는 옵션의 정보가 들어가있음.
//해당 옵션의 id가 문제의 정답과 일치하는 지 확인
function getResult(element){
    const id = parseInt(element.id);
    //get the answer by comparing the id of clicked option
    if(id === currentQuestion.answer){
        //set the green color to the correct option
        element.classList.add("correct")
        //add the indicator to correct mark
        updateAnswerIndicator("correct");
        correctAnswers++;
    }else{
        //set the red color to the wrong option
        element.classList.add("wrong");
        //add the indicator to wrong mark
        updateAnswerIndicator("wrong");

        //if the answer is incorrect, the show the correct option by adding green color the correct option
        const optionLen = optionContainer.children.length;
        for(let i = 0; i < optionLen; i++){
            if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
                optionContainer.children[i].classList.add("correct")
            }
        }
    }
    attempt++;
    unclickableOptions();
}

//make all the options unclickable once the user select a option (RESTRICT THE USER TO CHANGE THE OPTION AGAIN)
function unclickableOptions(){
    const optionLen = optionContainer.children.length;
    for(let i = 0; i < optionLen; i++){
        optionContainer.children[i].classList.add("already-answered");
    }
}

//문제 밑에 indicator라는 div만들기
function answersIndicator(){
    answersIndicatorContainer.innerHTML = ''; 
    const totalQuestion = quiz.length;
    for(let i = 0; i < totalQuestion; i++ ){
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);
    }
}

//문제 밑의 indicator라는 div에 wrong인지 correct인지 체크
function updateAnswerIndicator(markType){
    answersIndicatorContainer.children[questionCounter-1].classList.add(markType)
}

function next(){
    if(questionCounter === quiz.length){
        quizOver();
    }
    else{
        getNewQuestion();
    }
}

function quizOver(){
    //hide quiz quizbox
    quizBox.classList.add("hide");
    //show result box
    resultBox.classList.remove("hide");
    quizResult();
}

//get the quiz Result
function quizResult(){
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers/quiz.length)*100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%"
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + quiz.length;

}

function resetQuiz(){
    questionCounter = 0;
    correctAnswers = 0;
    attempt = 0;
}

function tryAgainQuiz(){
    //hide the resultBox
    resultBox.classList.add("hide");
    // show the quizBox
    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();
}

function goToHome(){
    //hide result box
    resultBox.classList.add("hide");
    //show home box
    homeBox.classList.remove("hide");
    resetQuiz();
}

//###STARTING POINT ###//

function startQuiz(){
    //hide home box
    homeBox.classList.add("hide");
    //show quiz box
    quizBox.classList.remove("hide");
    //first we will set all questions in availableQuestions Array
    setAvailalbeQuestions();
    //second we will call getNewQuestion(); function
    getNewQuestion();
    //to create indicators of answers
    answersIndicator();
}


window.onload = function(){
    homeBox.querySelector(".total-question").innerHTML = quiz.length
}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


/*
const quiz = [
    {
        q:"문제 내용",
        options:['문제 보기','','',''],
        answer: 정답인데 배열 순서 0, 1, 2, 3으로 구성
    }
]
quiz 내용 오브젝트로 만들어서 배열로 구성 q가 질문, option은 보기, answer은 정답

*/

const quiz = [
    {
        q: 'Which month comes right before june ?',
        options:['may', 'september','july','august'],
        answer:0
    },
    {
        q: "What color is a banana ?",
        options: ['red', 'yellow', 'white', 'blue'],
        answer:1
    },
    {
        q:"3 + 4 = 7 ?",
        options:['true', 'false'],
        answer: 0
    },
    {
        q: "What time of day do we have breakfast ?",
        options: ['In the afternoon', 'In the evening', 'In the morning'],
        answer:2 
    },
    {
        q:'What is 22 + 6 ?',
        options: ['99', '56', '16', '28'],
        answer: 3
    },
    //img쓸 때는 이런 형식으로. 
    {
        q: "How many squares are there in the following figure ?",
        options: ['35', '30', '40', '50'],
        answer: 2,
        img:'./img/square.jpg'
    },
    {
        q: "Count the triangles in picture below ?",
        options: ['7', '9', '12', '13'],
        answer: 3,
        img:'./img/triangle.jpg'
    },
    {
        q: "Windows, macOS, and Linux are examples of ________. ?",
        options: ['web browsers', 'mobile devices', 'filmy heroines', 'operating systems'],
        answer: 3
    }
]