import { Component } from "./component";
import { PostComponent } from "./post.compoment";
import { fetchPostList } from "../services/posts.service";


export class PostListComponent extends Component {
    template = function () {
        return `<div class="post-list"></div>`;
    }

    async render($holder) {
        super.render($holder);

        const posts = await fetchPostList();

        posts.forEach(post => {
            const postComponent = new PostComponent();
            postComponent.post = post;
            postComponent.render(this.$element);
        });

    }
}