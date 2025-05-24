import Link from "next/link";


export default function Articles() {
    return(

        <div>
        <h1>this is article page</h1>
            <Link href="/posts">
                <button>to posts</button>
            </Link>
            </div>
    )
}