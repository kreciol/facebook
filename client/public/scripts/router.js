import page from "page"
import { PostListComponent } from "./components/post-list.compoment";

page('*', (context, next) => {
    console.log(context.path, context.params);
    const $outlet = document.querySelector('router-outlet');
    $outlet.innerHTML = ''
    next();
})

page('/', () => {
    const $outlet = document.querySelector('router-outlet');

    const c = new PostListComponent();
    c.render($outlet);
})

page('/posts/:id', (context) => {
    const id = context.params.id;
})

page('/*', () => {
    console.log('404')
})

export function start() {
    page();
}