const leftArrow = document.querySelector('.left-arrow');
const cardIcon = document.querySelector('.card-icon');
const rightArrow = document.querySelector('.right-arrow');
const cardDateInput = document.querySelector('#date');
const cardNumberInput = document.querySelector('#number');
const cardNameInput = document.querySelector('#name');
const cards = [
    {
        icon: 'images/card.png',
        data: "04/10",
        number: "5375 4141 0000 1234",
        name: "John Doe"
    },
    {
        icon: 'images/card-2.png',
        data: "10/12",
        number: "5375 4141 0000 6789",
        name: "John Doe"
    }
]
let currentCard = 0;

leftArrow.addEventListener('click', () => {
    currentCard--;
    if (currentCard < 0) {
        currentCard = cards.length - 1;
    }
    updateCard();
})

rightArrow.addEventListener('click', () => {
    currentCard++;
    if (currentCard > cards.length - 1) {
        currentCard = 0;
    }
    updateCard();
})

function updateCard() {
    cardIcon.src = cards[currentCard].icon;
    cardDateInput.value = cards[currentCard].data;
    cardNumberInput.value = cards[currentCard].number;
    cardNameInput.value = cards[currentCard].name;
}

window.onload = () => {
    updateCard();
};