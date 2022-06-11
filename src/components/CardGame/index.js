import './style.css'
// JSX
function CardGame(icon = 'alura', alt = 'Logo da Alura') {
    return /*html*/ `
        <article class="card-game">
            <img src="images/${icon}.png" alt="${alt}">
        </article>
    `;
}

//para conseguir usar o componente fora
export default CardGame;