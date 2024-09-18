# Bubble Game

This is a simple bubble-clicking game built using HTML, CSS, and JavaScript. The goal of the game is to click on the bubble with the correct number before the timer runs out. Each correct click increases your score by 10 points.

## Features

- Randomly generated bubbles with numbers from 0 to 9.
- A target number displayed for the user to match.
- Countdown timer for the game (default is 10 seconds).
- The game ends when the timer reaches zero.

## How to Play

1. **Start the game**: The game starts automatically when the page is loaded.
2. **Objective**: Click on the bubble that matches the target number displayed at the top of the game.
3. **Score**: Every correct click increases your score by 10 points.
4. **Game Over**: The game ends when the timer reaches zero, and a "Game Over" message will be displayed.

## Functions

- `makebubble()`: This function generates a grid of bubbles with random numbers.
- `getNewHit()`: Selects a new target number for the user to click on.
- `runTimer()`: Starts the countdown timer and displays the remaining time.
- `increaseScore()`: Increases the score by 10 points when the correct bubble is clicked.
- Event Listener: The game listens for clicks on the bubbles and checks if the clicked bubble matches the target number.

## How to Run

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. The game will start automatically.

## Tech Used

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

### Check Live Preview Here

<a href="https://hacord15.github.io/Bubble-Game/" target="_blank"><img src="https://www.animatedimages.org/data/media/1096/animated-click-here-sign-and-button-image-0042.gif" /></a>
