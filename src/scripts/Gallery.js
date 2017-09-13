import Slider from './Slider'

const setBetween = (number, min, max) => {
    return Math.max(Math.min(number, max), min)
};

const imagesNames = ['ABB-Robot.png', 'DurrRobot.jpg', 'MotomanRobot.jpg', 'Rodip.jpg'];

class Gallery {
    constructor (query) {
        this.element = $(query);
        this.leftButton = $(query + ' > .left-button');
        this.rightButton = $(query + ' > .right-button');
        this.container = $(query + ' > .container');
        this.images = [];
        this.containerRight = 0;
        this.loadImages()
    }
    loadImages () {
        for (let name of imagesNames) {
            const img = document.createElement('img');
            img.src = './assets/images/gallery/' + name;
            img.alt = 'اتوماسیون صنعتی آریانا';
            this.images.push(img);
            this.container.appendChild(img);
        }
        this.slider = new Slider('body > .full-view-slider', this);
        this.init()
    }
    init () {
        const that = this;
        this.leftButton.onclick = () => this.move(-300);
        this.rightButton.onclick = () => this.move(300);
        for (let image of this.images) image.onclick = function () {
            that.onRequestForSlides(this)
        }
    }
    get width () {
        let sum = 0;
        for (let image of this.images) sum += image.clientWidth;
        return sum
    }
    get maxRight () {
        return -(this.width - this.element.offsetWidth)
    }
    disableButton (which) {
        this[which + 'Button'].classList.remove('active')
    }
    enableAllButtons () {
        this.leftButton.classList.add('active');
        this.rightButton.classList.add('active');
    }
    move (step) {
        const maxRight = this.maxRight;
        this.containerRight = setBetween(this.containerRight + step, maxRight, 0);
        this.container.style.right = this.containerRight + 'px';
        this.enableAllButtons();
        if (this.containerRight === maxRight) this.disableButton('left');
        if (this.containerRight === 0) this.disableButton('right')
    }
    onRequestForSlides (image) {
        for (let i in this.images) if (this.images[i] === image) {
            this.slider.show(i);
            break;
        }
    }
}

export default Gallery