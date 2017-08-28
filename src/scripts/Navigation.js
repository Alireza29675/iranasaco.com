class Navigation {
    constructor(query) {
        this.container = $(query);
        this.highlight = $(query + ' .select-highlight');
        this.items = $$(query + ' li');
        this.init()
    }
    init () {
        for (let item of this.items) item.onmouseover = this.onMouseOverItem.bind(this)
    }
    onMouseOverItem (e) {
        this.highlight.style.left = Math.floor(e.pageX / window.innerWidth * 4) * 25 + '%'
    }
}

export default Navigation