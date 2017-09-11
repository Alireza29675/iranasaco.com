class Navigation {
    constructor(query) {
        this.container = $(query);
        this.highlight = $(query + ' .select-highlight');
        this.items = $$(query + ' li');
        this.scrollTarget = 0;
        this.scrollingRenderer = window.framesFlow.render(this.scrollingRendererMethod.bind(this));
        this.init()
    }
    init () {
        const that = this;
        this.scrollingRenderer.pause();
        this.highlight.style.width = 100 / this.items.length + '%';
        for (let item of this.items) {
            item.onmouseover = function () { that.onMouseOverItem(this) };
            item.onclick = function () { that.onClickOnItem(this) };
        }
    }
    onMouseOverItem (element) {
        this.highlight.style.left = element.offsetLeft + 'px'
    }
    onClickOnItem (element) {
        const section = $(`[data-title=${element.getAttribute('data-link')}]`);
        this.scrollTarget = section.offsetTop;
        this.scrollingRenderer.play()
    }
    scrollingRendererMethod (frame) {
        const distance = Math.min(this.scrollTarget, (document.body.offsetHeight - window.innerHeight)) - window.scrollY;
        window.scrollTo(0, window.scrollY + distance/10);
        if (distance < 10) frame.renderer.pause()
    }
}

export default Navigation