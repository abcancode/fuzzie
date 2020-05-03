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


//The Questions to be display inside an Array of elements
let allQuestions = [
  ["What does HTML stand for?", "Hypertext Markup Language", "Hypers Makeover Language", "Height Tension Makeup Load", "A"],
  ["What does CSS stand for?", "Cascading Supersheet", "Cascading Standalone", "Cascading StyleSheets", "C"],
  ["Who invented HTML?", "Mark Zuckerberg", "Tim Berners-Lee", "Jef Bezos Andre", "B"],
  ["Who invented Bootstrap?", "Tomi Jude", "Mark Otto", "Mark Jeffs", "B"],
  ["Who invented CSS?", "Janet John Wye", "Bruce Bents Sly", "Håkon Wium Lie", "C"],
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
    quiz.innerHTML = "<h2>You got "+correctness+" of "+allQuestions.length+" questions correctly</h2><br />";

    score.innerHTML = "<h2>Your total attained score is: "+correctScore+" marks </h2>";

    get("quiz_status").innerHTML = "Game Quiz Ended";

    currentPos = 0;
    correctness = 0;
    correctScore = 0;

    // terminates showQuestion function running when Game Quiz is completed
    return false;
  }



  //to indicate the current Question been answered
  get("quiz_status").innerHTML = "Question "+(currentPos + 1)+"";

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
        correctness++;
        correctScore+=3;
    }
    else {
        // wrong option selected
        $("#quiz input:checked+label").css("background-color", "red");
        $("#quiz input:checked+label").css("color", "#fff");
        $("allQuestions[currentPos][4]").css("color", "white");
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

