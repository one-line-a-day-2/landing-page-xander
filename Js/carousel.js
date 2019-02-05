class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement
        this.imgs = carouselElement.querySelectorAll('.comment-card')
        this.currentImg = 0
        this.rightBtn = carouselElement.querySelector('.right-button')
        this.leftBtn = carouselElement.querySelector('.left-button')

        this.rightBtn.addEventListener('click', () => this.buttonClick(1))
        this.leftBtn.addEventListener('click', () => this.buttonClick(-1))
    }
    /**
     * @param {int} direction - either -1 or 1 for left and right respectively
     */
    buttonClick(direction){
        
        let prevImg = this.currentImg
        let nextImg = this.currentImg + direction
        if(nextImg < 0){
            this.currentImg = this.imgs.length - 1
        }else if( nextImg > this.imgs.length - 1){
            this.currentImg = 0
        }else{
            this.currentImg = nextImg
        }
        console.log(prevImg,this.currentImg)
        this.changeImg(prevImg, this.currentImg)
    }

    changeImg(prevImg, nextImg){
        console.log(this.imgs[prevImg].classList)
        this.imgs[prevImg].classList.toggle('active')
        this.imgs[nextImg].classList.toggle('active')
    }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel)
