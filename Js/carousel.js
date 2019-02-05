class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement
        this.cards = carouselElement.querySelectorAll('.comment-card')
        this.currentCard = 0
        this.rightBtn = carouselElement.querySelector('.right-button')
        this.leftBtn = carouselElement.querySelector('.left-button')

        this.rightBtn.addEventListener('click', () => this.buttonClick(1))
        this.leftBtn.addEventListener('click', () => this.buttonClick(-1))
    }
    /**
     * @param {int} direction - either -1 or 1 for left and right respectively
     */
    buttonClick(direction){
        
        let prevCard = this.currentCard
        let nextCard = this.currentCard + direction
        if(nextCard < 0){
            this.currentCard = this.cards.length - 1
        }else if( nextCard > this.cards.length - 1){
            this.currentCard = 0
        }else{
            this.currentCard = nextCard
        }
        this.changeCard(prevCard, this.currentCard)
    }

    changeCard(prevCard, nextCard){
        this.cards[prevCard].classList.toggle('active')
        this.cards[nextCard].classList.toggle('active')
    }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel)
