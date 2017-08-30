class Navigation {
    constructor(query) {
        this.container = $(query);
        this.highlight = $(query + ' .select-highlight');
        this.items = $$(query + ' li');
        this.init()
    }
    init () {
        this.highlight.style.width = 100 / this.items.length + '%';
        for (let item of this.items) item.onmouseover = this.onMouseOverItem.bind(this)
    }
    onMouseOverItem (e) {
        this.highlight.style.left = Math.floor(e.pageX / window.innerWidth * this.items.length) * 100 / this.items.length + '%'
    }
}

export default Navigation