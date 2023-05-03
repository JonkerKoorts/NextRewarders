import Link from "next/link";
import React from "react";

const random = () => {
  return (
    <div>
      <h1>Random</h1>
      <Link href="/home">Back</Link>
    </div>
  );
};

export default random;
