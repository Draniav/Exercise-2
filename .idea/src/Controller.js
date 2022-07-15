//const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J"]
const cardsV = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const cards = ["A",3,"K"];

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

function setBet() {
    if (bet < 0) {
        bet = 0;
    }
}

function resetGame() {
    if (sum == 0) {
        bet = 0;
    }


    setBet();
    selectedCards = [];
    selectedCardsvalue = [];
    sum = 0;
    died = false;
    blackjack = false;
    msg = "Feeling with luck?";


    betR = 0;
    ace = false;
    document.getElementById("msg").innerText = "Feeling with luck?";
    document.getElementById("sum").innerText = "Sum : " + sum;
    document.getElementById("cards").innerText = "cards :";
    document.getElementById("cardsV").innerText = "cardsV : " + selectedCardsvalue;
    document.getElementById("bet").innerText = "Reward : " + bet;
    document.getElementById("betR").innerText = "RewardR : " + betR;
    document.getElementById("resetbtn").textContent = "Quit";
   // document.getElementById("drawbtn").Disable = false;
    //document.getElementById("playbtn").enable=true;
  //  renderGame();
}


function renderGame() {
    setBet();

    document.getElementById("msg").innerText = msg;
    document.getElementById("sum").innerText = "Sum : " + sum;
    document.getElementById("cards").innerText = "cards : " + selectedCards;
    document.getElementById("cardsV").innerText = "cardsV : " + selectedCardsvalue;
    document.getElementById("bet").innerText = "Reward : " + bet;
    document.getElementById("betR").innerText = "RewardR : " + betR;

}


function reward() {
    if (sum === 21 && died == false) {
        msg = "Blackjack!";
        died = true;
        blackjack = true;
        bet += 1000 + betR;
        document.getElementById("resetbtn").textContent = "New game";
       // document.getElementById("drawbtn").Disable = true;


    } else if (sum < 21) {
        msg = "do  you  want pick  a card?"
        died = false
        blackjack = false;
       // document.getElementById("playbtn").removeEventListener(onclick());
    } else {
        msg = "You lost"
        died = true
        blackjack = false;
        bet -= 1000;

        document.getElementById("resetbtn").textContent = "New game";
       // document.getElementById("drawbtn").Disable = true;
        //document.getElementById("playbtn").visibility=hidden;
        //document.getElementById("playbtn").removeEventListener(onclick());
    }
}

function playGame() {

    addCard(selectedCards);
    addCard(selectedCards);
    reward()
    renderGame()

}

function newCard() {
    if (sum < 21) {
        addCard(selectedCards)
        renderGame()
    } else {
        reward();
        renderGame();
    }
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

    } else if ((cards[addedcard] == "J" || cards[addedcard] == "Q" || cards[addedcard] == "K") && died == false) {

        selectedCardsvalue.push(10)
        sum += 10;
        betR += 500;
    } else {
        let aux = cards[addedcard]
        alert (aux)
        selectedCardsvalue.push(aux)
        sum += aux ;
        betR += 100;

    }


}





