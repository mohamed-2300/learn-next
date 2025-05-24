import Link from "next/link";
import Todo from "../components/todo"

export default async function Posts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',
            {
                next: {revalidate:120}
            }
        )
        const posts = await response.json();
        const postJS = posts.map(post => (
            
            <Link style={{width:"70%"}} key={post.id} href={`/posts/${post.id}`}>
            <div  style={{
                width:"100%",
                background:"white",
                padding:"15px",
                color:"black",
                marginTop:"20px",
                borderRadius:"10px"
            }}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div></Link>
        ))
    return(
        <div>
            <h1>this is posts page</h1>
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"column"
                
            }}>
            {postJS}</div>
            {/* <div>
                <Todo />
            </div> */}
        </div>
    )
}