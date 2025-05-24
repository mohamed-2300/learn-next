import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

export default async function ShowPost({params}) {
    const postId = params.postid;
    const loadingMessage = (<div>lloading...</div>)
    return (
        <div>
            <h1>post details</h1>
            <Suspense fallback={loadingMessage}>
            <PostDetails postId={postId} />
            </Suspense>
        </div>
    )
}