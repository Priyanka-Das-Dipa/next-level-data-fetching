import Link from "next/link";
import React from "react";

const DynamicPage = async ({ params }) => {
  console.log(params);
  const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  const post = await res.json();
  return (
    <div>
      <h2>Dynamic Page</h2>
      <div
        key={post.id}
        className="card w-[50%] my-10 mx-auto bg-base-100 shadow-xl"
      >
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.description}</p>
          <p>Total Like: {post.like_count}</p>
          <div className="card-actions justify-end">
              <Link href="/posts">
              <button className="btn btn-primary">Back</button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;
