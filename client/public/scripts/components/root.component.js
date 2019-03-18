import { Component } from "./component";
import { PostListComponent } from "./post-list.compoment";

export class RootComponent extends Component {
    $element = null;
    template = `
    <div class="root"></div>
    `;

    render($holder) {
        this.$element = super.render($holder)
        
        const c = new PostListComponent();
        c.render(this.$element);
    }

}