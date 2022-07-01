import React from "react";

export default function Blog() {
    console.log('!')
  return (
    <main lang="en">
      <header>
        <h1>Michael W. A. Lund</h1>
        <span>Kaizen - Share the knowledge!</span>
      </header>
      <section>
        <h2>Blog title <span>{new Date()}</span></h2>
      </section>
    </main>
  );
}
