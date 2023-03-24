let rock = document.querySelector("#rock").innerText;
let paper = document.querySelector("#paper").innerText;
let scissors = document.querySelector("#scissors").innerText;
let results = document.querySelector("#results");
let machine = document.querySelector("#machine");

let img_display = document.querySelector(".img-display");
let user_Score = document.querySelector("#user_Score");
let away_Score = document.querySelector("#away_Score");
let start_again = document.querySelector("#start_again");

let comp_arr = ["rock", "paper", "scissors"];
let userScore = 0;
let awayScore = 0;

let history = [];

function history_f() {
  document.querySelector("#rock").disabled = true;
  document.querySelector("#paper").disabled = true;
  document.querySelector("#scissors").disabled = true;
  start_again.style.display = "flex";

  history.push({ userScore: userScore, awayScore: awayScore });

  let historyList = document.querySelector("#historyList");
  historyList.innerHTML = "";
  history.forEach(function (game) {
    let listItem = document.createElement("li");
    listItem.style.color = "#fff";
    listItem.style.listStyle = "none";
    listItem.innerText =
      `${game.userScore}` > `${game.awayScore}`
        ? `Victory ${game.userScore} - ${game.awayScore}`
        : `Defeat ${game.userScore} - ${game.awayScore}`;
    historyList.appendChild(listItem);
  });
}

function congatulations() {
  if (userScore === 5) {
    results.innerText = "Victory";
    history_f();
  } else {
    results.innerText = "You Win";
  }
}

function computer_wins() {
  if (awayScore === 5) {
    results.innerText = "Defeat";
    history_f();
  } else {
    results.innerText = "You Lost";
  }
}

function rock_f() {
  let random = Math.floor(Math.random() * comp_arr.length);
  let randomElement = comp_arr[random];
  img_display.src = "./stone.png";
  machine.innerText = randomElement;

  switch (randomElement) {
    case "rock":
      machine.src = "./stone.png";
      results.innerText = "Tie";
      break;
    case "paper":
      machine.src = "./paper.png";
      awayScore++;
      away_Score.innerText = awayScore;
      computer_wins();
      break;
    case "scissors":
      machine.src = "./scissor.png";
      userScore++;
      user_Score.innerText = userScore;
      congatulations();
      break;
  }
}

function paper_f() {
  let random = Math.floor(Math.random() * comp_arr.length);
  let randomElement = comp_arr[random];
  img_display.src = "./paper.png";
  machine.innerText = randomElement;

  switch (randomElement) {
    case "rock":
      machine.src = "./stone.png";
      userScore++;
      user_Score.innerText = userScore;
      congatulations();
      break;
    case "paper":
      machine.src = "./paper.png";
      results.innerText = "Tie";
      break;
    case "scissors":
      machine.src = "./scissor.png";
      awayScore++;
      away_Score.innerText = awayScore;
      computer_wins();
      break;
  }
}

function scissors_f() {
  let random = Math.floor(Math.random() * comp_arr.length);
  let randomElement = comp_arr[random];
  img_display.src = "./scissor.png";
  machine.innerText = randomElement;

  switch (randomElement) {
    case "rock":
      machine.src = "./stone.png";
      awayScore++;
      away_Score.innerText = awayScore;
      computer_wins();
      break;
    case "paper":
      machine.src = "./paper.png";
      userScore++;
      user_Score.innerText = userScore;
      congatulations();
      break;
    case "scissors":
      machine.src = "./scissor.png";
      results.innerText = "Tie";
      break;
  }
}

function resetScore() {
  document.querySelector("#rock").disabled = false;
  document.querySelector("#paper").disabled = false;
  document.querySelector("#scissors").disabled = false;
  start_again.style.display = "none";

  userScore = 0;
  awayScore = 0;
  user_Score.innerText = userScore;
  away_Score.innerText = awayScore;
  results.innerText = "";
  machine.innerText = "";
  machine.src = "./rock-paper-scissors.png";
  img_display.src = "./rock-paper-scissors.png";
}
