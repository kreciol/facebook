export class Component {
    data = null;
    template = function() { return ''; };

    compile(html) {
        const document = new DOMParser()
            .parseFromString(html, "text/html");

        this.$element = document.body.firstElementChild;
    }

    render($holder) {
        this.compile(this.template());
        $holder.appendChild(this.$element);
    }
}