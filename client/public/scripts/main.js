import { RootComponent } from "./components/root.component";


async function fetchPostList() {
    const response = await fetch('http://localhost:3000/posts');

    return response.json();
}

async function bootstrap() {
    let posts = await fetchPostList();

    console.log(posts);

    const $page = document.querySelector('#page');
    const c = new RootComponent();
    c.render($page);
}

bootstrap()
    .catch(err => console.error(err));