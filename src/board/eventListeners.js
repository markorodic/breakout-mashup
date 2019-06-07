import {
  gameRotateBoard,
  gameIsolateGameBodies,
  gamePlayGameSimulation
} from "./animations/animations.js";
import { DOMNode } from "./utilities/utilities.js";
import { Game as VanillaGame } from "../games/vanilla-js-game/game.js";
import { game as FunctionalGame } from "../games/functional-js-game/Game.js";
import { Game as ClassesGame } from "../games/es6/Game.js";

let vanillaGameOne;
let vanillaGameTwo;
let vanillaGameThree;
let functionalGameOne;
let functionalGameTwo;
let functionalGameThree;
let es6GameOne;
let es6GameTwo;
let es6GameThree;
let elmGameOne;
let elmGameTwo;
let elmGameThree;

window.onload = function() {
  // Move this elsewhere
  vanillaGameOne = new VanillaGame("game-one-canvas", "bricks", "blue", 1.1);
  functionalGameOne = new FunctionalGame(
    "game-two-canvas",
    "bricks",
    "red",
    2.0
  );
  es6GameOne = new ClassesGame("game-three-canvas", "bricks", "green", 1.2);
  es6GameOne.playGame();
  // elmGameOne = new Game("game-four-canvas", "bricks", "yellow", 2.5);
};

export function registerEventListeners() {
  // Move domnode inside addeventlister
  const rotateGameBoardButton = DOMNode("rotate-game-board-button");
  addEventListenerOnClick(rotateGameBoardButton, gameRotateBoard);
}

function pauseCurrentGames() {
  vanillaGameOne.stopGame();
  vanillaGameTwo.stopGame();
  vanillaGameThree.stopGame();
  functionalGameOne.stopGame();
  functionalGameTwo.stopGame();
  functionalGameThree.stopGame();
  es6GameOne.stopGame();
  es6GameTwo.stopGame();
  es6GameThree.stopGame();
  elmGameOne.stopGame();
  elmGameTwo.stopGame();
  elmGameThree.stopGame();
}

function addEventListenerOnClick(element, callBack) {
  element.addEventListener("click", callBack);
}