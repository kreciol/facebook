import { Component } from "./component";

export class PostComponent extends Component {
    post = null;

    template = function() { 
        return `<div class="post">
        <a href="/posts/${this.post.id}">Link</a>
        <p>${this.post.body}</p>
        </div>`
    };

}