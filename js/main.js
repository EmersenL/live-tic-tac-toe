import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart")
.addEventListener("click", () => {
    onRestartClick();
})

document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){
    // do something
    game.makeMove(i);
    // make a move
    // change turn
    gameView.updateBoard(game);
    // update board
}

function onRestartClick(){
    game = new Game();
    gameView.updateBoard(game);
}
