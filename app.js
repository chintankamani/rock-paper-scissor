let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById('user-score');
let compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

function getCompChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor((Math.random() * 3));
  return choices[randomNumber];
}

function convertToWord(letter) {
  if(letter === 'r') return "Rock";
  if(letter === 'p') return "Paper";
  if(letter === 's') return "Scissor";
}

function win(user,comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
 const userChoice_div = document.getElementsById(user);
  result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(comp)} You win! 🔥`;

  userChoice_div.classList.add('green-glow');

  setTimeout(function() {userChoice_div.classList.remove('green-glow')},200);

}

function lose(user,comp) {

   const userChoice_div = document.getElementById(user);

  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;

  result_p.innerHTML = `${convertToWord(user)} loses to ${convertToWord(comp)} You lose! 💩`;

  userChoice_div.classList.add('red-glow');

  setTimeout(function() {userChoice_div.classList.remove('red-glow')},200);

}

function draw(user,comp) {

  const userChoice_div = document.getElementById(user);

  result_p.innerHTML = `Draw! 😑`;

  userChoice_div.classList.add('grey-glow');

  setTimeout(function() {userChoice_div.classList.remove('grey-glow')},200);

}

function game(userChoice) {
  const compChoice = getCompChoice();

  switch (userChoice + compChoice) {

    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice ,compChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice ,compChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice ,compChoice);
      break;
  }
}


function main() {

  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  })

  scissor_div.addEventListener('click', function() {
    game("s");
  })

}

main();

getCompChoice();
