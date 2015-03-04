questionsArray = [{question1:"What is Grumpy Cat's real name?", answer1:"C"}, 
{question2:"Which one of these is not a famous internet cat?", answer2:"A"}, 
{question3:"What is the name of the cat on Sabrina the Teenage Witch?", answer3:"D"}, 
{question4:"What is the name of the cat in Homeward Bound?", answer4:"A"}, 
{question5:"What cranky internet cat died in 2014?", answer5:"B"}]


var answer = prompt("Welcome to The Famous Cat Quiz\nHere's the first question:\nWhat is Grumpy Cat's real name?\nA. Jeffrey\nB. Glenda\nC. Tartar Sauce\nD. Cocktail Sauce")
var answer = answer.toUpperCase();

if (answer === questionsArray[0].answer1) {
  alert("Good job, you got it! On to the next question.")
} else {
  alert("Oops. The answer was Tartar Sauce. Better luck on the next one.")
}


// Which one of these is not a famous internet cat?
// A. Michael Jordan
// B. Nala
// C. Masha
// D. Pudge

// What is the name of the cat on Sabrina the Teenage Witch?
// A. Lucifer
// B. Satan's Little Helper
// C. Harry Potter
// D. Salem

// What is the name of the cat in Homeward Bound?
// A. Sassy
// B. Otis
// C. Stripes
// D. Socks

// What cranky internet cat died in 2014?
// A. Grumpy Cat
// B. Colonel Meow
// C. Hello Kitty
// D. Frumpy Cat



