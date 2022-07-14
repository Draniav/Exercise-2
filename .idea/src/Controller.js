const cards=["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J"]
const suits=["♣", "♦",  "♥", "♠"]
const cardspool = ["A♣", "2♣", "3♣", "4♣", "5♣", "6♣", "7♣", "8♣", "9♣", "10♣", "K♣", "Q♣", "J♣", "A♦", "2♦", "3♦", "4♦", "5♦", "6♦", "7♦", "8♦", "9♦", "10♦", "K♦", "Q♦", "J♦", "A♥", "2♥", "3♥", "4♥", "5♥", "6♥", "7♥", "8♥", "9♥", "10♥", "K♥", "Q♥", "J♥", "A♠", "2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "K♠", "Q♠", "J♠"];

let selectedCards = []

let firstCard = parseInt(cards[2]);
let secondCard = parseInt(cards[1]);
let sum = firstCard + secondCard;
let died = false;
let blackjack = false;
let msg = "";
let bet = 0;




function playGame() {
    if (sum === 21) {
        msg = "Blackjack!";
        died = false
        blackjack = true;
        bet += 1000;
    } else if (sum < 21) {
        msg = "do  you  want pick  a card?"
        died = false
        blackjack = false;
    } else {
        msg = "You lost"
        died = true
        blackjack = false;
        bet -=1000;
    }

    document.getElementById("msg").innerText = msg;
    document.getElementById("sum").innerText = "Sum : " + sum;
    document.getElementById("cards").innerText = firstCard + ", " + secondCard;
}

console.log("the value of sum :" + sum)
console.log("player is died : " + died)
console.log("blackjack:" + blackjack)
console.log(msg)



