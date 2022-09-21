import axios from 'axios'; // Article が依存している axios をモックしたい
import React, { useState, useEffect } from 'react';
export const Article = ({ id }) => {
  const [article, setArticle] = useState(null);
  useEffect(() => {
    axios.get(id).then((res) => setArticle(res.body.result));
  }, []);
  return (
    article && (
      <main>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
      </main>
    )
  );
};
