import page from "page"
import { PostListComponent } from "./components/post-list.compoment";
import { PostComponent } from "./components/post.compoment";
import { fetchPostById } from "./services/posts.service"

page('*', (context, next) => {
    console.log(context.path, context.params);
    const $outlet = document.querySelector('router-outlet');
    $outlet.innerHTML = ''
    next();
})

page('/posts', () => {
    const $outlet = document.querySelector('router-outlet');

    const c = new PostListComponent();
    c.render($outlet);
})

page('/posts/:id', async (context) => {
    const id = context.params.id;
    const post = await fetchPostById(id);

    const $outlet = document.querySelector('router-outlet');

    const c = new PostComponent();
    c.post = post;
    c.render($outlet);
})

page('/*', () => {
    console.log('404')
})

export function start() {
    page();
}