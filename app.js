document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'artemis',
            img: 'images/atremis.png'
        },
        {
            name: 'artemis',
            img: 'images/atremis.png'
        },
        {
            name: 'collosus',
            img: 'images/collosus.png'
        },
        {
            name: 'collosus',
            img: 'images/collosus.png'
        },
        {
            name: 'gardens',
            img: 'images/gardens.png'
        },
        {
            name: 'gardens',
            img: 'images/gardens.png'
        },
        {
            name: 'giza',
            img: 'images/giza.png'
        },
        {
            name: 'giza',
            img: 'images/giza.png'
        },
        {
            name: 'lighthouse',
            img: 'images/lighthouse.png'
        },
        {
            name: 'lighthouse',
            img: 'images/lighthouse.png'
        },
        {
            name: 'mausoleum',
            img: 'images/mausoleum.png'
        },
        {
            name: 'mausoleum',
            img: 'images/mausoleum.png'
        }
    ] 

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    


    function createBoard(){
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/brick.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }

    }


    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]){
            alert('Match!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/brick.png')
            cards[optionTwoId].setAttribute('src', 'images/brick.png')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Got \'em all'
        }
    }


    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

 createBoard()


})