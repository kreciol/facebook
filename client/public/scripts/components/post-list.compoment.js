import { Component } from "./component";
import { PostComponent } from "./post.compoment";
import { fetchPostList } from "../services/posts.service";


export class PostListComponent extends Component {
    template = `
        <div class="post-list"></div>
    `

    async render($holder) {
        const posts = await fetchPostList();

        const $element = super.render($holder);

        posts.forEach(post => {
            const postComponent = new PostComponent();
            postComponent.render($element);
        });

    }
}