questionsArray = [{question1:"What is Grumpy Cat's real name?", answer1:"C"}, 
{question2:"Which one of these is not a famous internet cat?", answer2:"A"}, 
{question3:"What is the name of the cat on Sabrina the Teenage Witch?", answer3:"D"}, 
{question4:"What is the name of the cat in Homeward Bound?", answer4:"A"}, 
{question5:"What cranky internet cat died in 2014?", answer5:"B"}]

var counter = 0

var answer = prompt("Welcome to The Famous Cat Quiz\nHere's the first question:\nWhat is Grumpy Cat's real name?\nA. Jeffrey\nB. Glenda\nC. Tartar Sauce\nD. Cocktail Sauce")
var answer = answer.toUpperCase();

if (answer === questionsArray[0].answer1) {
  counter ++
  alert("Good job, you got it! On to the next question.")
} else {
  alert("Oops. The answer was Tartar Sauce. Better luck on the next one.")
}

var answer = prompt("Question #2:\nWhich one of these is not a famous internet cat?\nA. Michael Jordan\nB. Nala\nC. Masha\nD. Pudge")
var answer = answer.toUpperCase();

if (answer === questionsArray[1].answer2) {
  counter ++
  alert("You're on a roll! Let's go to question 3.")
} else {
  alert("Oops. The answer was  Michael Jordan. Not a big basketball fan, huh?")
}


var answer = prompt("Question #3:\nWhat is the name of the cat on Sabrina the Teenage Witch?\nA. Lucifer\nB. Satan's Little Helper\nC. Harry Potter\nD. Salem")
var answer = answer.toUpperCase();

if (answer === questionsArray[2].answer3) {
  counter ++
  alert("You should have gotten it wrong, dangit.")
} else {
  alert("That was a tough one; the answer was Salem. You let Melissa Joan's Hart.")
}

var answer = prompt("Question #4:\nWhat is the name of the cat in Homeward Bound?\nA. Sassy\nB. Otis\nC. Stripes\nD. Socks")
var answer = answer.toUpperCase();

if (answer === questionsArray[3].answer4) {
  counter ++
  alert("Good job! You're almost finished.")
} else {
  alert("I wouldn't have known that, either. It's okay.")
}

var answer = prompt("Question #5:\nWhat cranky internet cat died in 2014?\nA. Grumpy Cat\nB. Colonel Meow\nC. Hello Kitty\nD. Frumpy Cat")
var answer = answer.toUpperCase();

if (answer === questionsArray[4].answer5) {
  counter ++
  alert("Wow, you're a star. Ready to see your final score?")
} else {
  alert("You can't win 'em all. Click OK to see your final score.")
}

alert("You got " + counter + "/5 right.")



