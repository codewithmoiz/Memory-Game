let cards = [
    {
        name: "Cake",
        image: "Images/cake.png"
    },
    {
        name: "Candy-jar",
        image: "Images/candy-jar.png"
    },
    {
        name: "Fish",
        image: "Images/fish.png"
    },
    {
        name: "Football",
        image: "Images/Football.png"
    },
    {
        name: "Joystick",
        image: "Images/joystick.png"
    },
    {
        name: "Pikachu",
        image: "Images/pikachu.png"
    },
    {
        name: "Tic-Tac-Toe",
        image: "Images/tic-tac-toe.png"
    },
    {
        name: "Train",
        image: "Images/train.png"
    },
];

let duplicateCards = cards.concat(cards);
console.log(duplicateCards);

let container = document.querySelector('.container');

let clickCount = 0;
let firstCard = "";
let secondCard = "";

function cardsMatched() {
    let selectedCards = document.querySelectorAll('.selected');
    selectedCards.forEach(function(elem) {
        elem.classList.add('match-cards');
    });
}

container.addEventListener('click', function(event) {
    let curCard = event.target.closest('.card');
    if (!curCard || curCard.classList.contains('selected')) {
        return false;
    }
    curCard.classList.add('selected');
    clickCount++;
    if (clickCount === 2) {
        let selectedCards = document.querySelectorAll('.selected');
        let firstCard = selectedCards[0];
        let secondCard = selectedCards[1];
        if (firstCard.dataset.name === secondCard.dataset.name) {
            // Cards have the same image, keep them flipped
            setTimeout(function() {
                cardsMatched();
                selectedCards.forEach(function(elem) {
                    elem.classList.add('match-cards');
                });
                resetGame();
            }, 1000);
        } else {
            // Cards have different images, flip them back
            setTimeout(function() {
                selectedCards.forEach(function(elem) {
                    elem.classList.remove('selected');
                });
                resetGame();
            }, 1000);
        }
    }
});

function resetGame() {
    clickCount = 0;
    let selectedCards = document.querySelectorAll('.selected');
    selectedCards.forEach(function(elem) {
        elem.classList.remove('selected');
    });
}

let shuffleCards = Array.from(duplicateCards).sort(() => 0.5 - Math.random());

for (let i = 0; i < shuffleCards.length; i++) {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.dataset.name = shuffleCards[i].name;

    let front = document.createElement('div');
    front.classList.add("front-card");

    let back = document.createElement('div');
    back.classList.add("back-card");
    back.style.backgroundImage = `url(${shuffleCards[i].image})`;

    container.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
}






function resetUnmatched() {
    let selectedCards = document.querySelectorAll('.selected');
    selectedCards.forEach(function(elem) {
        if (!elem.classList.contains('match-cards')) {
            elem.classList.remove('selected');
        }
    });
    clickCount = 0;
    firstCard = "";
    secondCard = "";
}


// function resetGame() {
//     let selectedCards = document.querySelectorAll('.selected');
//     selectedCards.forEach(function(elem) {
//         elem.classList.remove('selected');
//     });
//     clickCount = 0;
//     firstCard = "";
//     secondCard = "";
// }

// let shuffleCards = Array.from(duplicateCards).sort(() => 0.5 - Math.random());

// for (let i = 0; i < shuffleCards.length; i++) {
//     let card = document.createElement('div');
//     card.setAttribute('class', 'card');
//     card.dataset.name = shuffleCards[i].name;

//     let front = document.createElement('div');
//     front.classList.add("front-card");

//     let back = document.createElement('div');
//     back.classList.add("back-card");
//     back.style.backgroundImage = `url(${shuffleCards[i].image})`;

//     container.appendChild(card);
//     card.appendChild(front);
//     card.appendChild(back);
// }
