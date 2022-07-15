//const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J"]
const cardsV = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const cards = ["A","K"];

const suits = ["♣", "♦", "♥", "♠"]
const cardspool = ["A♣", "2♣", "3♣", "4♣", "5♣", "6♣", "7♣", "8♣", "9♣", "10♣", "K♣", "Q♣", "J♣", "A♦", "2♦", "3♦", "4♦", "5♦", "6♦", "7♦", "8♦", "9♦", "10♦", "K♦", "Q♦", "J♦", "A♥", "2♥", "3♥", "4♥", "5♥", "6♥", "7♥", "8♥", "9♥", "10♥", "K♥", "Q♥", "J♥", "A♠", "2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "K♠", "Q♠", "J♠"];

let selectedCards = [];
let selectedCardsvalue = [];
let firstCard = parseInt(cards[2]);
let secondCard = parseInt(cards[1]);
let cardA = firstCard + suits[1];
let cardB = secondCard + suits[0];
let sum = 0;
let died = false;
let blackjack = false;
let msg = "";
let bet = 0;
let betR = 0;
let ace = false;


function resetGame() {
    betR = 0;
    selectedCards = [];
    selectedCardsvalue = [];
    sum = 0;
    died = false;
    blackjack = false;
    msg = "";
    bet = 0;
    document.getElementById("msg").innerText = "Feeling with luck?";
    document.getElementById("sum").innerText = "Sum : " + sum;
    document.getElementById("cards").innerText = "cards :";
    document.getElementById("cardsV").innerText = "cardsV : " + selectedCardsvalue;
    document.getElementById("bet").innerText = "Reward : " + bet;

}


function renderGame() {
    if (bet < 0) {
        bet = 0;
    }

    document.getElementById("msg").innerText = msg;
    document.getElementById("sum").innerText = "Sum : " + sum;
    document.getElementById("cards").innerText = "cards : " + selectedCards;
    document.getElementById("cardsV").innerText = "cardsV : " + selectedCardsvalue;
    document.getElementById("bet").innerText = "Reward : " + bet;
}


function reward() {
    if (sum === 21) {
        msg = "Blackjack!";
        died = false
        blackjack = true;
        bet += 1000 + betR;


    } else if (sum < 21) {
        msg = "do  you  want pick  a card?"
        died = false
        blackjack = false;
    } else {
        msg = "You lost"
        died = true
        blackjack = false;
        bet -= 1000;
    }
}

function playGame() {
    addCard(selectedCards);
    addCard(selectedCards);
    reward()
    renderGame()

}

function newCard() {
    addCard(selectedCards)
    renderGame()
}


function addCard() {
//add ramdom  card
    const addedcard = Math.floor(Math.random() * cards.length);

    // const addedsuit = Math.floor(Math.random() * suits.length)

    selectedCards.push(cards[addedcard])
    if (cards[addedcard] == "A" && sum < 21 && died == false && ace == false) {

        selectedCardsvalue.push(11)
        sum += 11;
        ace = true;
        betR += 500;
    } else if (cards[addedcard] == "A" && sum < 21 && died == false && ace == true) {

        selectedCardsvalue.push(1)
        sum += 1;
        ace = true;
        betR += 500;

    } else if (cards[addedcard] == "J" || cards[addedcard] == "Q" || cards[addedcard] == "K") {
        alert(cards[addedcard])
        selectedCardsvalue.push(10)
        sum += 10;
        betR += 500;
    }


}


console.log("Hola")
console.log("the value of sum :" + sum)
console.log("player is died : " + died)
console.log("blackjack:" + blackjack)
console.log(msg)




