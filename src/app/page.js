import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-center text-4xl p-5">Next Level Data fetching!!</h2>
      <Link href="/posts">
        <button className="btn btn-accent">Posts</button>
      </Link>
    </div>
  );
};

export default HomePage;
