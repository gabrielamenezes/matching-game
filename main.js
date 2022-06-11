import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import CardGame from './src/components/CardGame';

const $root = document.querySelector("#root");
//execução da função cardGame, que retorna o HTML do nosso card
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);