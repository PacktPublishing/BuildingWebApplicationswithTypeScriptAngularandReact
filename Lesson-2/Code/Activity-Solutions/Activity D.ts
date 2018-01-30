interface PostApiResponse {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function getPost(id: number) {
    const uri: string = `https://jsonplaceholder.typicode.com/posts/${id.toString()}`;

    fetch(uri)
        .then(response => response.json())
        .then((post: PostApiResponse) => {
            console.log(post.title);
        });
}
