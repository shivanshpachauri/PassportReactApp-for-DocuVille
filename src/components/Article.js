import React from "react";

const Article = ({ customheading, custompara }) => {
  return (
    <div>
      <article>
        <h2>{customheading}</h2>
        <p>{custompara}</p>
      </article>
    </div>
  );
};

export default Article;
