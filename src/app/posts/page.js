import Link from "next/link";
import React from "react";

const PostsPage = async () => {
  const res = await fetch("http://localhost:5000/posts", {
    cache: "no-store",
  });
  const posts = await res.json();
  //   console.log(posts);
  return (
    <div className="w-full">
      <h2 className="text-2xl text-center text-red-600 p-2">
        Total Posts: {posts.length}
      </h2>
      {posts.map((post) => (
        <div
          key={post.id}
          className="card w-[50%] my-10 mx-auto bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <p>Total Link: {post.like_count}</p>
            <div className="card-actions justify-end">
            <Link href={`/posts/${post.id}`}>
              <button className="btn btn-primary">See More</button>
            </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
