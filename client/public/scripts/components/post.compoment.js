import { Component } from "./component";

export class PostComponent extends Component {
    post = null;

    template = function() { 
        return `<div class="post"><p>${this.post.body}</p></div>`
    };

}