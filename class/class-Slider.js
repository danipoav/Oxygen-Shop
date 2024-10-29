export class Slider {

    constructor(sliderId) {
        this.slider = document.getElementById(sliderId)
        this.slideImg = this.slider.getElementsByClassName('slider__content--img')
        this.current = 0;
        this.slideImg[this.current].classList.add('active')

        document.getElementById('next').addEventListener('click', () => this.nextSlide())
        document.getElementById('prev').addEventListener('click', () => this.prevSlide())

        this.dotContainer = document.querySelector('.slider__dots')
        this.createDots()

        setInterval(() => this.nextSlide(), 5000)

    }

    nextSlide() {
        this.slideImg[this.current].classList.remove('active')
        this.current = (this.current + 1) % this.slideImg.length
        this.slideImg[this.current].classList.add('active')
        this.updateDots()
    }

    prevSlide() {
        this.slideImg[this.current].classList.remove('active')
        this.current = (this.current - 1 + this.slideImg.length) % this.slideImg.length
        this.slideImg[this.current].classList.add('active')
        this.updateDots()
    }

    createDots() {
        for (let i = 0; i < this.slideImg.length; i++) {
            const dot = document.createElement('span')
            dot.classList.add('slider__dots--img')
            if (i === 0) {
                dot.classList.add('active')
            }
            dot.id = i;
            dot.addEventListener('click', () => this.clickDot(i))
            this.dotContainer.appendChild(dot);
        }
    }

    updateDots() {
        const dots = this.dotContainer.querySelectorAll('.slider__dots--img')
        dots.forEach(dot => dot.classList.remove('active'))
        const active = this.dotContainer.querySelector(`.slider__dots--img[id="${this.current}"]`)
        if (active) {
            active.classList.add('active')
        }
    }

    clickDot(imgId) {
        this.slideImg[this.current].classList.remove('active')
        this.current = imgId;
        this.slideImg[imgId].classList.add('active')
        this.updateDots()
    }
}