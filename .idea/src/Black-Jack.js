const cards = ["A", "J"]
const cardspool = ["A♣", "2♣", "3♣", "4♣", "5♣", "6♣", "7♣", "8♣", "9♣", "10♣", "K♣", "Q♣", "J♣", "A♦", "2♦", "3♦", "4♦", "5♦", "6♦", "7♦", "8♦", "9♦", "10♦", "K♦", "Q♦", "J♦", "A♥", "2♥", "3♥", "4♥", "5♥", "6♥", "7♥", "8♥", "9♥", "10♥", "K♥", "Q♥", "J♥", "A♠", "2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "K♠", "Q♠", "J♠"];

function cardFace(suit, figure) {
    suits = {1: "♣", 2: "♦", 3: "♥", 4: "♠"};
    figures = {
        1: "ace",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "jack",
        12: "queen",
        13: "king"
    };
    var c = figures[figure] + "_of_" + suits[suit];
    return c;
}

//suit: heart, diamond, ace and clover

//First time: A = 11
//Other times: A = 1
let selectedCards = []; //First and second card -randomly. And then add with a draw function
let sum = 0;
let answer = "";
let bet = 0;

//To get inputs
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function Addcard(selectedCards) {
    const i_firstCard = Math.floor(Math.random() * cards.length);
    console.log("added card " + (i_firstCard + 1))
    const firstCard = cards[i_firstCard];
    console.log("1st card " + (firstCard))
    if (firstCard == "A") {
        selectedCards.push(1)
    }
    if (firstCard == "J" || firstCard == "Q" || firstCard == "K") {
        selectedCards.push(10)
    }
    console.log("Cards: " + selectedCards);
    sum = 0;
    console.log("Sum: " + sumCards(selectedCards));
    return selectedCards;
}

function startGame() {
    //TO DO: Add the first 2 cards randomly to the user
    //Math.random() - 0 - cards.length
    const i_firstCard = Math.floor(Math.random() * cards.length);
    //const i_secondCard = Math.floor(Math.random() * cards.length);


    console.log("1st card " + (i_firstCard + 1))
    // console.log("2nd card " + (i_secondCard + 1))

    const firstCard = cards[i_firstCard];
    //const secondCard = cards[i_secondCard];
    console.log("1st card " + (firstCard))
    //  console.log("2nd card " + (secondCard))

    if (firstCard == "A") {
        selectedCards.push(11)
    }

    //   if (secondCard == "A") {        selectedCards.push(1);    }
    if (firstCard == "J" || firstCard == "Q" || firstCard == "K") {

        selectedCards.push(10)

    }
    // if (secondCard == "J" || secondCard == "Q" || secondCard == "K") {        selectedCards.push(10);    }
    if (firstCard < 11 && firstCard > 1) {
        selectedCards.push(firstCard);
    }
    //  if (secondCard < 11 && secondCard > 1) {        selectedCards.push(secondCard);    }


    console.log("Cards: " + selectedCards);
    console.log("Sum: " + sumCards(selectedCards));
    console.log("sum = " + sum)

    if (sum < 21) {
        rl.question(" you want to draw a card? (Y/N): ", function (answerIn) {
            answer = answerIn;
            if (answer == "Y") {
                console.log("im  here 1")
                drawCard();

            }
            rl.question(" you want to draw a card? (Y/N): ", function (answerIn) {
                answer = answerIn;
                if (answer == "Y") {
                    console.log("im  here 1")
                    drawCard();

                }
                rl.question(" you want to draw a card? (Y/N): ", function (answerIn) {
                    answer = answerIn;
                    if (answer == "Y") {
                        console.log("im  here 1")
                        drawCard();
                        if (sum > 21) {
                            console.log("you  lose");
                            bet -= 1000;
                            setBet();
                        }
                    }


                })

            })

        })

    }
    if (sum === 21) {
        console.log("Blackjack!");
        bet += 1000;
        setBet();
    }
    if (sum > 21) {
        console.log("you  lose");
        bet -= 1000;
        setBet();
    }

}

/*
< 21 - Drawing a card, you are still playing
= 21 - Blackjack!
> 21 - Y
*/
function cardscards() {
    rl.question(" you want to draw a card? (Y/N): ", function (answerIn) {
        answer = answerIn;
        if (answer == "Y") {
            drawCard();

        }
        if (answer == "N") {
            console.log("im  here 1")
            drawCard();
        }
    })
}

function playingGame() {
    if (sum < 21) {
        rl.question(" you want to draw a card? (Y/N): ", function (answerIn) {
            answer = answerIn;
            drawCard(answer)
        })
    }
    if (sum === 21) {
        console.log("Blackjack!");
        bet += 1000;
        setBet();
    }


    /*


        if (sum>21 && sum < 18) {
            console.log("you got ");
            bet += 1000;

        } else {
            console.log("Sorry, you lose.")
            bet -= 1000;
        }
        if (bet<0){
            bet=0;
        }
        console.log("\nYour reward is : "+bet)
    */
}

function setBet() {
    if (bet < 0) {
        bet = 0;
    }
    console.log("\nYour reward is : " + bet)

}

function drawCard() {


    switch (answer) {
        case "Y":
            console.log("Draw the card...");
            Addcard(selectedCards);

            break;
        case "N":
            console.log("Ok, game finished.");
            setBet();

            break;
        default:
            console.log("Invalid input. ");
            break;
    }

};


function sumCards(cards) {
    cards.forEach(sumEachCard);

    return sum;
}


function sumEachCard(elem) {


    sum += Number(elem);

}

function round() {

}

let exit = false;

console.log("Blackjack");
console.log("Feeling with luck? - Give it a try~~");

startGame();
playingGame();


