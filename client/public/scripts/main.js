
async function fetchPostList() {
    const response = await fetch('http://localhost:3000/posts');

    return response.json();
}

async function bootstrap() {
    let posts = await fetchPostList();

    console.log(posts);
}

bootstrap()
    .catch(err => console.log(err));