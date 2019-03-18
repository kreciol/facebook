export class Component {
    template = '';

    compile(html) {
        const document = new DOMParser()
            .parseFromString(html, "text/html");

        return document.body.firstElementChild;
    }

    render($holder) {
        const $element = this.compile(this.template);
        $holder.appendChild($element);

        return $element;
    }
}