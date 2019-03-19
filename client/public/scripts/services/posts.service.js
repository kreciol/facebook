export async function fetchPostList() {
    const response = await fetch('http://localhost:3000/posts');
    return response.json();
}

export async function fetchPostById(postId) {
    const response = await fetch('http://localhost:3000/posts/' + postId);
    return response.json();
}