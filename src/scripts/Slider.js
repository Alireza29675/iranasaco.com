const setBetween = (number, min, max) => {
    return Math.max(Math.min(number, max), min)
};

class Slider {
    constructor (query, gallery) {
        this.container = $(query);
        this.image = $(query + ' img');
        this.gallery = gallery;
        this.isActive = false;
        this.index = 0;
        this.init()
    }
    init () {
        this.container.addEventListener('click', (event) => {
            if (event.target === this.container) this.hidden()
        });
        window.addEventListener('keydown', (event) => {
            if (event.code === 'Escape' && this.isActive) this.hidden();
            if (event.code === 'ArrowRight' && this.isActive) this.imageIndex--;
            if (event.code === 'ArrowLeft' && this.isActive) this.imageIndex++;
        })
    }
    set imageIndex (index) {
        this.index = setBetween(index, 0, this.gallery.images.length-1);
        this.image.src = this.gallery.images[this.index].src;
    }
    get imageIndex () {
        return this.index
    }
    show (index) {
        this.imageIndex = index;
        this.isActive = true;
        this.container.classList.add('active')
    }
    hidden () {
        this.isActive = false;
        this.container.classList.remove('active')
    }
}

export default Slider