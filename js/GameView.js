export default class GameView {

    constructor(){
        console.log("init game view");
    }

    updateBoard(game) {
        this.updateTurn(game);
        console.log("this is a board within GameView");
        console.log(game.board);
        for(let i = 0; i < game.board.length; i++){
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
            console.log(tile);
            tile.textContent = game.board[i];
        }
    }

    updateTurn(game){
        let playerX = document.querySelector(".player-x");
        let playerO = document.querySelector(".player-o");
        console.log(playerX);
        console.log(PlayerO);
    }

}