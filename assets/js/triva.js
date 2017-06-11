//array of trivia questions
var questions = [
	{
		question: 'Name the largest freshwater lake in the world? ',
		answers:[
			'Lake Michigan',
			'Lake Superior',
			'Lake Baikal',
			'Poyang Lake'
		],
		correct: 'Lake Superior'
	},
	{
		question: 'Name the seventh planet from the sun?',
		answers:[
			'Pluto',
			'Neptune',
			'Uranus',
			'Mars'
		],
		correct: 'Uranus'
	},
	{
		question: 'What is the diameter of Earth?',
		answers:[
			'8,000 Miles',
			'16,000 Miles',
			'4,000 Miles',
			'24,000 Miles'
		],
		correct: '8,000 Miles'
	},
	{
		question: 'Who played Neo in The Matrix?',
		answers:[
			'Johnny Depp',
			'Brad Pitt',
			'Matt Damon',
			'Keanu Reeves'
		],
		correct: 'Keanu Reeves'
	}
]


var timeLeft = 30;
var timerDiv = $('.js-timeRemaining');

var wrong = 0;
var correct = 0;
var questionNumber = 0;

//on start click
var startButton = $('.js-startButton');
startButton.on('click', function(){
	this.style.display = 'none';
	triviaQuestion(questionNumber);
})

//timer function
function countdown() {
  if (timeLeft === 0) {
    timerDiv.text('Time Is Up!!!');
    //if timer === 0 then stop the game. 
  } else {
    timerDiv.text(timeLeft + ' seconds remaining');
    timeLeft--;
  }
}


	
function triviaQuestion(number) {
	//start the timer
	var timerId = setInterval(countdown, 1000);
	//display the first trivia question
	var question = questions[number].question;
	var questionDiv = $('.js-questionDiv');
	questionDiv.text(question);
	//clear answers-container
	$('.js-answersContainer').empty();
	//display the trivia question answers
	for (var i=0; i < questions[number].answers.length; i++){
		var answer = questions[number].answers[i];
		var answerDiv = $('<div class="answer">');
		$('.js-answersContainer').append(answerDiv);
		answerDiv.text(answer);

		//on answer click
		$(answerDiv).on('click', function(){
			//determine if answer is correct
				var guess = this.innerHTML;
				//if answer is correct
					//add 1 to correct
				if (guess === questions[number].correct){
					correct++;
					console.log('correct ' + correct);
				}else {
				//if answer is wrong
					//add 1 to wrong
					wrong++;
					console.log('wrong ' + wrong);
				}
			//clear timer
			clearTimeout(timerId);
			game();
			
		});
	}
}

function game() {
	//display next trivia question
	//display next trivia question answers.
	questionNumber++;
	if (questionNumber > (questions.length - 1)){
		//clear answers-container
		$('.js-questionContainer').empty();
		//when all trivia questions are answered
		//display results of win and loss
		scoreDiv = $('<div class="score">');
		$('.js-questionContainer').append(scoreDiv);
		var string = 'Correct: ' + correct + ' Incorrect: ' + wrong;
		scoreDiv.text(string);
	}else {
		triviaQuestion(questionNumber);
	}
}

			


	



