import CardGame from "../../components/CardGame";
// elemento estrutural - ideia do object

function BoardGame(amountCards) {
    const $htmlCardGame = CardGame();
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards);
    return  $htmlBoardGame;
}

export default BoardGame;