//Variable declaration
let currentPos = 0; 
let quiz;
let quiz_status;
let question;
let option;
let options;
let charA;
let charB;
let charC;
let score;
let correctness = 0;
let correctScore = 0;
let score_count;
let answered;


//The Questions to be display inside an Array of elements
let allQuestions = [
  ["What does HTML stand for?", "Hypers Makeover Language", "Hypertext Markup Language", "Height Tension Makeup Load", "B"],
  ["What does CSS stand for?", "Cascading Supersheet", "Cascading StyleSheets", "Cascading Standalone", "B"],
  ["Who invented HTML?", "Mark Zuckerberg", "Tim Berners-Lee", "Jef Bezos Andre", "B"],
  ["Who invented Bootstrap?", "Tomi Jude", "Mark Otto", "Mark Jeffs", "B"],
  ["Who invented CSS?", "Janet John Wye", "Håkon Wium Lie", "Bruce Bents Sly", "B"],
];


// the get function serving as a shorter getElementById
function get(element){
  return document.getElementById(element);
}


//the function that reveals the Questions to the user
function showQuestion(){
  quiz = get("quiz");
  score = get("score");

//When user has completed the Quiz
  if(currentPos >= allQuestions.length){

    get("score_count").innerHTML = "SCORE: "+correctScore+"";

    quiz.innerHTML = "<h4>You got "+correctness+" of "+allQuestions.length+" questions correctly</h4><br />";

    score.innerHTML = "<h4>Your total attained score is: "+correctScore+" marks </h4><br>";

    get("quiz_status").innerHTML = "Game Quiz Ended";
    get("instruct").style.display = "none";

    currentPos = 0;
    correctness = 0;
    correctScore = 0;

    // terminates showQuestion function running when Game Quiz is completed
    return false;
  }



  //to indicate the current Question been answered
  get("quiz_status").innerHTML = "Question "+(currentPos + 1)+"";
  get("instruct").innerHTML = "Instruction: Select only one answer";
  get("score_count").innerHTML = "SCORE: "+correctScore+"";
  
  question = allQuestions[currentPos][0];
  charA = allQuestions[currentPos][1];
  charB = allQuestions[currentPos][2];
  charC = allQuestions[currentPos][3];

  quiz.innerHTML = "<h2>"+question+"</h2>";
  
  // appends inputs to the options of the Questions
  quiz.innerHTML += "<input onclick='checkAnswer()' type='radio' name='options' value='A' id='charA'> <label for='charA'>" + charA + "</label><br>";
  quiz.innerHTML += "<input onclick='checkAnswer()' type='radio' name='options' value='B' id='charB'> <label for='charB'>" + charB + "</label><br>";
  quiz.innerHTML += "<input onclick='checkAnswer()' type='radio' name='options' value='C' id='charC'> <label for='charC'>" + charC + "</label><br><br>";
  quiz.innerHTML += "<button onclick='nextAnswer()' disabled='disabled' id='choiceSubmit'>Next</button>";
}

function checkAnswer() {
    choiceClicked = true;
    $("#choiceSubmit").removeAttr("disabled");
    $("#quiz label").css("background-color", "transparent");
    if ($("#quiz input:checked").val() == allQuestions[currentPos][4]) {
        // correct option selected
        $("#quiz input:checked+label").css("background-color", "green");
        $("#quiz input:checked+label").css("color", "#fff");
        $("#quiz input:checked+label").css("border", "1px solid #fff");
        correctness++;
        correctScore+=3;
    }
    else {
        // wrong option selected
        $("#quiz input:checked+label").css("background-color", "red");
        $("#quiz input:checked+label").css("color", "#fff");
        $("#quiz input:radio[id=charB]+label").css("background-color", "green");
        $("#quiz input:radio[id=charB]+label").css("color", "#fff");     
    }
}
function nextAnswer(){
    setTimeout(function () {
        currentPos++;
        showQuestion();
    }, 800);    
}
$("document").ready(function () {
    showQuestion();
});

