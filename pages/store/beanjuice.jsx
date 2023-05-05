import Link from "next/link";
import React from "react";

const beanjuice = () => {
  return (
    <>
      <div>beanjuice</div>
      <div className="text-4xl font-bold text-main">
        I spoke to Jason {"(The owner of BEAN JUICE)"} yesterday and he said he
        want all 5 his shops on this APP
      </div>
      <Link href="/home">Back</Link>
    </>
  );
};

export default beanjuice;
