export default async function PostDetails({postId}) {


    await new Promise((resolve) => {
        setTimeout(() => {resolve();},2000);
    })

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,
            {
                next: {revalidate:120}
            }
        )
        const post = await response.json();
    return (
        <div>
            <h2>{post.id}</h2>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    )
}