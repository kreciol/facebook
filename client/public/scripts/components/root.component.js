import { Component } from "./component";
import { PostListComponent } from "./post-list.compoment";

export class RootComponent extends Component {
    template = function() {
        return `<div class="root"></div>`;
    }

    render($holder) {
        super.render($holder)
        
        const c = new PostListComponent();
        c.render(this.$element);
    }
}