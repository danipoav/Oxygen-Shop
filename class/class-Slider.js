export class Slider {

    constructor(sliderId) {
        this.slider = document.getElementById(sliderId)
        this.slideImg = this.slider.getElementsByClassName('slider__content--img')
        this.current = 0;
        this.slideImg[this.current].classList.add('active')

        document.getElementById('next').addEventListener('click', () => this.nextSlide())
        document.getElementById('prev').addEventListener('click', this.prevSlide)
    }

    nextSlide() {
        this.slideImg[this.current].classList.remove('active')
        this.current = (this.current + 1) % this.slideImg.length
        this.slideImg[this.current].classList.add('active')
        console.log(this.current)
    }

    prevSlide() {
        console.log('prev works')
    }
}